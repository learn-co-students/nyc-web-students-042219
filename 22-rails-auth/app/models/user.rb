class User < ApplicationRecord
  has_secure_password
  #
  # def password
  #   @password
  # end
  # #
  # # # pt_pw = plainttext_passwrod
  # def password=(pt_pw)
  #   self.password_digest = BCrypt::Password.create(pt_pw)
  # end
  # #
  # # #
  # def authenticate(pt_pw) #
  #   # compare an already existing user's plaintext_pw against the salted and hashed version we have in the db
  #    if BCrypt::Password.new(self.password_digest) == pt_pw
  #
  # end


end
