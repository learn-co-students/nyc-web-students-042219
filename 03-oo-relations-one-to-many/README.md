Intro to OO Relations
===========================

## Lecture Notes

* Has Many / Belongs to

* Single Source of truth

#### Where we've been

class Student
  def batch
  end
end

class Batch
end

augustus = Student.new("augustus")
Student.new("qun")
Student.new("tim")

augustus.batch
=> "042219"

batch = Batch.new("042219")

batch.students
=> ["augustus", "qun", "tim", ...]


#### Where we'll be from here on out


class Student
  attr_reader :name, :batch

  def initialize(name, batch)
    @batch = batch
  end


end
batch = Batch.new("042219")

augustus = Student.new("augustus", batch)
Student.new("qun")
Student.new("tim")

augustus.batch
=> <Batch 0x075e88 @name="042219" >

batch = Batch.new("042219")

batch.students
=> [<Student @name="tim">, <Student>, <Student>]





#### Define terminology
  * Model
  a class, whos primary role is to represent data

  * Domain / Domain Modeling
  The Subject Matter of the App
  Models
  class Student
  class Batch
  class Lesson

  class GithubRepoSyncer (a service object, class, )


### Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `User#tweets` that returns an array of Tweet instances
  => ["my tweet"] X :(
    => [<Tweet>]
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class, the user who authored this tweet
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
