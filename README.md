# IMDB Application

## Design Explanation
My IMDB application allows users to rate movies. Technologies used in the project:
- **Backend**: Node.js and Express
- **Database**: MySQL
- **Authentication**: Google OAuth 2.0 and JWT (JSON Web Tokens)
- **Frontend**: HTML, CSS, Bootstrap

Main functionalities of the application:
- User registration and login
- Viewing movies
- Adding comments to movies and watching trailers
- Multilingual support

## Data Model
The data model is built on MySQL. Our main data models are:
- **User**: User information and authentication.
  - `name`: String
  - `email`: String
  - `city`: String
  - `password`: String
- **Movie**: Movie information.
  - `name`: String
  - `description`: String
  - `rating`: Number (1-10 scale)
- **Review**: User comments and ratings.
  - `name`: String
  - `email`: String
  - `comment`: String
  - `rating`: Number (1-10 scale)

## Assumptions
- Users register with a unique username and email.
- Each user can make multiple comments.
- Movies and comments are visible to everyone.
- Each movie can have multiple comments.

## Problems Encountered
- **Authentication**: Initially, I encountered issues with JWT authentication integration. I resolved this issue through research.
- **Language Support**: I faced many errors and challenges while implementing language change.
- **Related Data**: I experienced some difficulties when associating movie and review data.

## Video Presentation
https://drive.google.com/file/d/1HvgAMP1KiKQ1PkbhCklFQo1olHiocoBA/view?usp=sharing

Note: I also forgot to show that signing in with a Google account is available in the video
Mete Yağcı
18070006041
