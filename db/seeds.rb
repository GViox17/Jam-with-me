# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'

User.destroy_all
Instrument.destroy_all
MusicianInstrument.destroy_all

puts '🌱 Seeding users...'
puts '🌱 Seeding instruments...'

#create 10 random users


30.times do 
    user= User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.unique.last_name,
        username: Faker::Games::Pokemon.unique.name,
        image_url: Faker::LoremFlickr.image(size: "#{rand(250..300)}x#{rand(250..300)}", search_terms: ['Artist']),
        location: "#{Faker::Address.city}, #{Faker::Address.state}",
        password: "password",
        bio: Faker::Movies::StarWars.quote
    )
end

#create 10 random instruments
30.times do 

    instrument = Instrument.create(
        name: Faker::Music.instrument

    )
end


count = 1
30.times do
    MusicianInstrument.create(
        user_id: count, 
        instrument_id: count
    )
    count += 1
end
# puts '🌱 Seeding locations...'


# end