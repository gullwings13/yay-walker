# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

user1 = User.create(email:"trev@trev.com", password:"password", name:Faker::Internet.username, bio:Faker::Hipster.paragraph(sentence_count: 1), avatar_url:Faker::Avatar.image)

tour1u1 = Tour.create(name:Faker::Hipster.sentence(word_count: 3), description: Faker::Hipster.paragraph(sentence_count: 4), img_url: 'https://source.unsplash.com/random')

point1u1 = Point.create(lat: 40.740019, long: -73.990045, order: 1, text: Faker::Hipster.paragraph(sentence_count: 2), picture_url: 'https://source.unsplash.com/random')
point2u1 = Point.create(lat: 40.740058, long: -73.989581, order: 1, text: Faker::Hipster.paragraph(sentence_count: 2), picture_url: 'https://source.unsplash.com/random')
point3u1 = Point.create(lat: 40.740574, long: -73.989440, order: 1, text: Faker::Hipster.paragraph(sentence_count: 2), picture_url: 'https://source.unsplash.com/random')

tour1u1.points.push(point1u1)
tour1u1.points.push(point2u1)
tour1u1.points.push(point3u1)

user1.tours.push(tour1u1)

10.times do
    user = User.create(email:Faker::Internet.email, password: Faker::Internet.password(min_length: 10, max_length: 20),name:Faker::Internet.username, bio:Faker::Hipster.paragraph(sentence_count: 1), avatar_url:Faker::Avatar.image)
    5.times do
        tour = Tour.create(name:Faker::Hipster.sentence(word_count: 3), description: Faker::Hipster.paragraph(sentence_count: 1), img_url: 'https://source.unsplash.com/random')

        3.times do
            point1 = Point.create(lat: Faker::Address.latitude, long: Faker::Address.longitude, order: 1, text: Faker::Hipster.paragraph(sentence_count: 1), picture_url: 'https://source.unsplash.com/random')

            tour.points.push(point1)
        end

        user.tours.push(tour)
    end
end




