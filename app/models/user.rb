class User < ApplicationRecord

    validates :username, uniqueness: true
    validates :password, length: {minimum: 8}

    has_secure_password 
    
    has_many :musician_instruments

    has_many :instruments,
        through: :musician_instruments



end
