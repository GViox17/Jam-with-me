class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :image_url, :location
  has_many :instruments
end
