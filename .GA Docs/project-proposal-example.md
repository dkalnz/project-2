# Project Proposal Example

## Project Description

My app is called Reelz.  It's a movie app for people who have a hard time figuring out which movie to see.  Users can see a list of all of the movies which are currently playing in theatres and then click on a specific movie to see a summary of the movie and watch the movie's trailer.  In the future, I'd like to add a feature so that users can see where the movie is playing on a map that also shows movie times.

## Wireframes

### Home

![All Movies](https://media.git.generalassemb.ly/user/17300/files/8e436980-3a87-11ea-931d-7a0189e8ce5c)

### Movie Details

![Movie details](https://media.git.generalassemb.ly/user/17300/files/d5325e80-3a89-11ea-85f1-fc36e21f2f2d)

### MVP User Stories

_**MVP User Stories**_
- _As a user, I want to see a listing of all of the movies currently playing in theatres so that I can consider which ones I might want to go see._
- _As a user, I would like to click on an individual movie to view additional details about it including a summary of the movie and a link to the movie trailer so that I can better determine which movie I'd like to go see._
- _As a user, I want to be able to easily navigate the movies on my mobile phone so that I can see movie details while I'm at the movie theatre._

_**Post MVP Stretch Goals**_
- _As a user, I would like to be able to search for movies by name so that I can more easily find a movie and view its details._
- _As a user, I would like to filter movies by genre, so that I can more easily select movies based on the type of film I'm interested in watching._
- _As a user, I would like to see where a movie is playing near me so I can check local movie times._

## API

[The Movie DB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

#### Now Playing Response
```json
{
  "results": [
    {
      "popularity": 71.71,
      "vote_count": 948,
      "video": false,
      "poster_path": "/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
      "id": 359724,
      "adult": false,
      "backdrop_path": "/mn9k8zapebAbCqsiKf24juhXjjx.jpg",
      "original_language": "en",
      "original_title": "Ford v Ferrari",
      "genre_ids": [
        28,
        18,
        36
      ],
      "title": "Ford v Ferrari",
      "vote_average": 7.8,
      "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
      "release_date": "2019-11-13"
    },
    {
      "popularity": 61.46,
      "vote_count": 114,
      "video": false,
      "poster_path": "/30YacPAcxpNemhhwX0PVUl9pVA3.jpg",
      "id": 431693,
      "adult": false,
      "backdrop_path": "/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg",
      "original_language": "en",
      "original_title": "Spies in Disguise",
      "genre_ids": [
        28,
        12,
        16,
        35
      ],
      "title": "Spies in Disguise",
      "vote_average": 7.5,
      "overview": "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
      "release_date": "2019-12-24"
    }
  ],
  "page": 1,
  "total_results": 1008,
  "dates": {
    "maximum": "2020-01-24",
    "minimum": "2019-12-07"
  },
  "total_pages": 51
}
```

#### Videos Response
```json
{
  "id": 431693,
  "results": [
    {
      "id": "5bde0d090e0a26058d016b4c",
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "key": "LSSGHvzMY60",
      "name": "Spies in Disguise | Official Trailer [HD] | Blue Sky Studios",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer"
    }
  ]
}
```

## Component Hierarchy

![image](https://media.git.generalassemb.ly/user/17300/files/b8942780-3a85-11ea-95fe-c734084916c8)

#### OPTIONAL Component Details
| Component | Description | State/Props
| --- | --- | :---: |
| App | This will make the initial data request and include React Router | State |
| Header | This will render the header include the nav | Props |
| MoviesList | This will render all of the movies | Props |
| Movie | This will render an individual movie | Props |
