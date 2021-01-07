const moment = require('moment');
const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const experience1Id = mongoose.Types.ObjectId();
const category1Id = mongoose.Types.ObjectId();

module.exports = {
    "experiences": [
{
    "_id": experience1Id,
      "title": "Night in the City",
      "image": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2452&q=80",
      "description": "Slovakia's capital since the country's independence in 1993, Bratislava is a mosaic of illustrious history: a medieval and Gothic old town, baroque palaces commissioned by Hungarian nobles, and the crowning castle, rebuilt to Renaissance finery. Slicing through the city are stark-angled, communist-era blocks and a futurist bridge. Recent years have added a cast of outlandish statues, boutiques and modish cafes, eagerly sought out by visiting stag party groups and day trippers from Vienna. Many arrive purely to enjoy the uproarious nightlife, from rowdy beer halls to hidden nightclubs.",
      "shortInfo": "Let's go out!",
      "createdAt": moment().toISOString(),
      "updatedAt": moment().toISOString(),
      "startDate": moment().add(2, 'days').toISOString(),
      "timeFrom": "14:00",
      "timeTo": "18:00",
      "joinedPeopleCount": 1,
      "status": "active",
      "category": category1Id,
      "joinedPeople": [user2Id],
      "experienceCreator": user1Id,
      "price":"Ksh 200/Person"
},
{
    "_id": experience2Id,
    "title": "Batman Screening",
    "image": "https://images.unsplash.com/photo-1526906004573-b4a4fcd642fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "description": "One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. He's developed an arsenal of technology that would put most armies to shame. And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman, Incorporated.",
    "shortInfo": "Batman premiere tomorrow!",
    "createdAt": moment().toISOString(),
    "updatedAt": moment().toISOString(),
    "startDate": moment().add(7, 'days').toISOString(),
    "timeFrom": "08:00",
    "timeTo": "10:00",
    "joinedPeopleCount": 1,
    "status": "active",
    "category": category2Id,
    "joinedPeople": [user3Id],
    "experienceCreator": user2Id,
    "price":"Ksh 200/Person"
  },
  {
    "_id": experience3Id,
    "title": "Cycling in Almada",
    "image": "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
    "description": "Human presence in the area of Almada dates to the end of the Neolithic period about 5000 years ago; archeological excavations performed in the municipality suggest that non-sedentary nomadic tribes may have occupied this location sporadically. The gradual development of settlement here made its greatest advance with the coming of Islamic civilization, when Muslims constructed a fort at Almada to defend and monitor the entrance to the Tagus River.",
    "shortInfo": "Very nice trip in Portugal",
    "createdAt": moment().toISOString(),
    "updatedAt": moment().toISOString(),
    "startDate": moment().add(7, 'days').toISOString(),
    "timeFrom": "08:00",
    "timeTo": "10:00",
    "joinedPeopleCount": 2,
    "status": "active",
    "category": category1Id,
    "joinedPeople": [user1Id, user3Id],
    "experienceCreator": user2Id,
    "price":"Ksh 200/Person"
  },{
    "_id": experience4Id,
    "title": "New Aquaman",
    "image": "https://images.unsplash.com/photo-1512136146408-dab5f2ba8ebb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "description": "An action-packed adventure that spans the vast, visually breathtaking underwater world of the seven seas, “Aquaman” reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be…a king.",
    "shortInfo": "Let's go watch new Aquaman",
    "createdAt": moment().toISOString(),
    "updatedAt": moment().toISOString(),
    "startDate": moment().add(7, 'days').toISOString(),
    "timeFrom": "08:00",
    "timeTo": "10:00",
    "joinedPeopleCount": 2,
    "status": "active",
    "category": category1Id,
    "joinedPeople": [user1Id, user3Id],
    "experienceCreator": user2Id,
    "price":"Ksh 200/Person"
  },
  {
    "_id": experience5Id,
    "title": "Burger Festival",
    "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1671&q=80",
    "description": "BurgerFest is located along Main and Buffalo Streets and in the Village of Hamburg Municipal Parking Lot. The Taste of Hamburg portion of the festival features the favorite offerings of area restaurants, in the parking lot.  The one-day festival has something for everyone, from Kids Space children’s inflatable rides and activities; an arts and crafts show and sale, the Classic Car Show and the Beer Tent.",
    "shortInfo": "Burger Festival in the Town!",
    "createdAt": moment().toISOString(),
    "updatedAt": moment().toISOString(),
    "startDate": moment().add(7, 'days').toISOString(),
    "timeFrom": "08:00",
    "timeTo": "10:00",
    "joinedPeopleCount": 2,
    "status": "active",
    "category": category6Id,
    "joinedPeople": [user1Id, user3Id],
    "experienceCreator": user2Id,
    "price":"Ksh 200/Person"
  },
  {
    "_id": experience6Id,
    "title": "London Marathon",
    "image": "https://images.unsplash.com/photo-1513276193780-64b881470da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "description": "In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C. According to legend, Pheidippides ran the approximately 25 miles to announce the defeat of the Persians to some anxious Athenians.",
    "shortInfo": "Little bit of exercise!",
    "createdAt": moment().toISOString(),
    "updatedAt": moment().toISOString(),
    "startDate": moment().add(7, 'days').toISOString(),
    "timeFrom": "08:00",
    "timeTo": "10:00",
    "joinedPeopleCount": 2,
    "status": "active",
    "category": category1Id,
    "joinedPeople": [user1Id, user3Id],
    "experienceCreator": user2Id,
    "price":"Ksh 200/Person"
  }
    ],
    "users": [
        {
            "_id": user1Id,
            "avatar": "https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg",
            "username": "filipj",
            "name": "Filip Jerga",
            "email":"filip@gmail.com",
            "profile": "http://localhost:3000/profile/DjhaulS",
            "about": "Bla bla bla bla",
            "active":true,
            "role": 1 ,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
            "username": "Rhonyn99",
            "password": "testtest",
            joinedExperiences: [experience3Id, experience4Id, experience5Id, experience6Id] 
        },
        {
            "_id": user2Id,
            "avatar": "https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png",            "username": "filipj",
            "name": "Peter Green",
            "email": "peter@gmail.com",
            "profile": "http://localhost:3000/profile/asfjkasfhd",
            "about": "Bla bla bla bla",
            "active":true,
            "role": 1 ,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
            "username": "Petergreen",
      "password": "testtest1",
      joinedExperiences: [experience1Id]
        },
        {
            "_id": user3Id,
      "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
      "name": "Kevin Rock",
      "email": "kevin@gmail.com",
            "profile": "http://localhost:3000/profile/asfjkasfhd",
            "about": "I have a famous name",
            "active":true,
            "role": 1 ,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
            "username": "Kevin21",
      "password": "testtest2",
      joinedExperiences: [experience2Id, experience3Id, experience4Id, experience5Id, experience6Id]
        },
        {
            "_id": user4Id,
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU",
            "name": "Daniel Rock",
            "email": "daniel@gmail.com",
            "profile": "http://localhost:3000/profile/asfjkasfhd",
            "about": "I have a famous name",
            "active":true,
            "role": 1 ,
            "createdAt": moment().toISOString(),
            "updatedAt": moment().toISOString(),
            "username": "dankatman",
            "password": "katungi2758",
            joinedExperiences: [experience2Id, experience3Id, experience4Id, experience5Id, experience6Id]
        },
    ],
    "categories": [
        {
          "_id": category1Id,
          "name": "sport",
          "image": "https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
        },{
          "_id": category2Id,
          "name": "cinema",
          "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "image2": "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
          "image3": "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        },
        {
          "_id": category3Id,
          "name": "music",
          "image": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
        },
        {
          "_id": category4Id,
          "name": "dance",
          "image": "https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
        },
        {
          "_id": category5Id,
          "name": "party",
          "image": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        },
        {
          "_id": mongoose.Types.ObjectId(),
          "name": "literature",
          "image": "https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        },
        {
          "_id": category6Id,
          "name": "food",
          "image": "https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
        },
        {
          "_id": mongoose.Types.ObjectId(),
          "name": "games",
          "image": "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        }
    ]
}