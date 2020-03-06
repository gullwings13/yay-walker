# Walking Tour App
User submitted walking tours


## Overview

_**Walking Tour App** is a full stack application for submitting and taking walking tours._

### Permissions

Digital assets used with full licensing and permission from [Unsplash](). Digital assets stored locally. PMVP includes ability to upload images.

<br>

## MVP

_The **Walking Tour App** MVP will allow a user to sign up/login and view and submit basic walking tours. For MVP a walking tour will consist of two or more points of interest shown on a map and some text associated with each point of interest._

<br>

### MVP Goals

- _User can signup and login._
- _User can submit new tours._
- _User can edit and delete their own tours._
- _User can browse existing tours._
- _User can edit their own profile._
- _User can consume tours._
- _User can place and move points on a map to indicate walking tour path._
- _User can view points on a map to indicate walking tour path._


<br>

### MVP Libraries

|     Library      |MVP| Description                                |
| :--------------: | :-:|:----------------------------------------- |
|      React       | Yes | _The core front end framework._ |
|      Axios       | Yes | _To make API calls from the front end to the RoR Backend._ |
|     Gatsby       | Yes | _An additional framework for the frontend focusing on fast page loads, Gatsby will handle the routing of the front end app._ |
|  Typography.js   | No | _A CSS Addon for the frontend to make font styling easier._ |
|  TailwindCSS   | No | _A CSS Library for the frontend._ |
|   Ruby on Rails  | Yes | _The core backend framework._ |
|   Devise  | No | _Backend framework to handle security._ |
|      Rack CORS       | Yes | _Backend library to provide support for Cross-Origin Resource Sharing (CORS)._ |

<br>

### MVP Client (Front End)

#### Wireframes

https://scene.zeplin.io/project/5e6176ef832f4b12e2a5ce26

#### Component Hierarchy



#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | _The header will contain the navigation and logo._               |
|  Navigation  |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   y   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card |   n   | _The cards will render the post info via props._                 |
|    Footer    |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

### MVP Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/users/:id`
	- Show route for a user requested by ID
- POST `/users`
	- Create route for a new user
- PUT `/users/:id/nominate`
  - Update a user by id to create an association to the ballots table

<br>

***

## Planning

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

<br>

### Timeframes

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

- _Snap points of interest to roads/pathes,_
- _Show users current location on map._
- _Give user directions how to get from one point of interest to the next._
- _Allow user to search for walking tours._
- _Show nearby walking tours._
- _Allow Show nearby walking tours._
- _Allow users to rate and favorite walking tours._
- _Allow tour creators to add audio/video to points of interest._

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
