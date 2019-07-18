# FortheGram

<table>
<tr>
<td>
FortheGram is a functional clone of one of the most popular apps in the world - Instagram. 
</td>
</tr>
<table>

## Demo

Here is the working Demo of the site : http://forthegram1.herokuapp.com/

## Table of Content

* [Features](#features)
* [Screenshots and Examples](#Screenshots-and-Examples)
* [Technologies Used](#Technologies-Used)
* [Features Analysis](#Features-Analysis)
* [State](#State)
* [Components](#Components)
* [FAQ](#FAQ)
* [Future Features to be implemented](#Future-Features-to-be-implemented)

## Features
* A secure user authentication system that employs both the front and back end.
* The ability to create, edit and delete Posts that consist of a caption and a photo(stored in AWS)




## Screenshots and Examples
<!-- ![Image of Site](/img/screenshot.png) -->
<img src="./img/screenshot.png" width="50%" height="50%">



## Technologies Used

* Front End
  * React
  * Redux
  * Webpack
  * SCSS 
  * Jquery

* Back End
  * Ruby on Rails
  * Jbuilder
  * Postgres

* External Support
  * AWS
  * Heroku



## Features Analysis

### User Authentication

Visitors to the site can create an account and login with it to access the current features of the site. A demo user is also available. The authentication is protected both by a combination of a back and front end system.

The database of users/sessions/passwords exist in the back end via Rails, through a series of controllers and the BCrypt Ruby Gem. However, the calls to pull user information are intiial from React are done via Ajax Requests, instead of direct HTTP requests. React components are used to generate the pages to login instead of Rails that was strictly used for the back end portion. This combination of Rails and React promotes a sturdy and secure authentication system

### Creating Posts

Upon logging into the site. Just like Instagram, users can upload a photo via a post. The photo is stored on AWS while the information and the reference for the photo is stored on Heroku's DB.

### Comment on Posts

Comments can be created and deleted from Posts. The data on comments is stored on the backend database.

### Like Posts

Posts can also be liked, with a counter on each post showing the number of likes. The like data is also stored on the backend database.

### User Dashboard and Following Users

Users have a dashboard where their posts, their followers and who they follow are displayed. Users can follow other users by going to the dashboard.

## State 




## Components




## FAQ




## Future Features to be Implemented

* The ability to like comments
* The ability to search for other posts and users

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
* System dependencies
* Configuration
* Database creation
* Database initialization
* How to run the test suite
* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions
