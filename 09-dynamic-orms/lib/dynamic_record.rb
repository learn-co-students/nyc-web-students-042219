class DynamicRecord
  attr_accessor(:name)
  # self.attr_accessor(:message, :user_id, :id)
  # floating

  def self.table_name
    "#{self.to_s.downcase}s"
  end

  def self.column_names
    sql = "PRAGMA table_info(#{self.table_name})"
    columns = DB[:conn].execute(sql)

    columns.map do |col|
      col['name']
    end
  end

  def self.all
    sql = "SELECT * from #{self.table_name}"

    results = DB[:conn].execute(sql)

    results.map do |row|
      self.new(row)
    end
  end

  def initialize(attributes={})
    # {'posted_at' => ____, 'message' => ____, 'user_id' => ____}
    # {'id' => ____, 'username' => ____, 'email' => ____}
    # columns = ["message", "user_id"]

    # ["id", "username", "email"]
    self.class.column_names.each do |col_name|
      # give me a reader and writer for each col
      # self.send(:attr_accessor, col_name)
      self.class.attr_accessor col_name

      # call the writer method and set the attribute
      self.send("#{col_name}=", attributes[col_name])
    end
    # self.message=(attributes['message'])
    # self.user_id=(attributes['user_id'])

    # @id = attributes['id']
    # @message = attributes['message']
    # @user_id = attributes['user_id']
  end

  def save
    # if the tweet is coming from the DB
    # update it
    if persisted?
      update_record
    else
      # otherwise, if its brand new
      # insert into the db
      insert_record
    end
  end

  def persisted?
    !!self.id
  end

  private

  def insert_record
    sql = <<-SQL
    INSERT INTO #{self.class.table_name}
    (message, user_id)
    VALUES (?, ?);
    SQL
    # binding.pry
    DB[:conn].execute(sql, self.message, self.user_id)

    last_row_sql = <<-SQL
    SELECT *
    FROM tweets
    ORDER BY id DESC
    LIMIT 1
    SQL
    @id = DB[:conn].execute(last_row_sql)[0]["id"]
    self
  end

  def update_record
    sql = <<-SQL
    UPDATE tweets
    SET message = ?, user_id = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.user_id)
    self
  end
end
