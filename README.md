# Pokemon Website (Pokedex)

https://pokedex-website-2021.herokuapp.com

source code links:
- [Front-end repo](https://github.com/zipengliang21/Pokedex.git)
- [Back-end repo](https://github.com/zipengliang21/Pokedex-server.git)

# Menu
- [Introduction](#introduction)
- [Task requirements](#task-requirements)
- [Tech Stack](#tech-stack)
- [Above and Beyond Features](#above-and-beyond-features)
- [Steps in the future](#steps-in-the-future)
- [Contributions](#contributions)


## Introduction
Pokemon Website is a one-stop web application for Pokemon lovers and trainers. Users can find the natures and characteristics of Pokemon that they want on the application. The application also allows users to make posts and comments in Forum for social and networking purposes.


## Task requirements
### Minimal requirements
  - [x] Users can Search for different pokemons
  - [x] Users can Filter pokemon according to their types
  - [x] Users can sign up or login to their accounts

 ### Standard requirements
  - [x] Admin can login an Admin account
  - [x] Add pokemons to database by Admin
  - [x] Delete pokemons from database by Admin
  - [x] Users can update their profile

 ### Stretch requirements
  - [x] Provide Engish and Chinese language versions
  - [x] Users can make posts and comments in forum
  - [ ] Users can login via their google accounts or github accounts


## Tech stack

### Unit 1 - HTML, CSS, JS && Unit 2 - React

We use React and Typescript to complete the frontend. So we can make seperate component like the search bar through React. Also, TSX is used with a large amount of HTML code in our project.
We also apply Hook in Pokemon Website, which enriches the website and gives better user experience.
Axios is used in our project. HTTP requests can be sent through axios.


### Unit 3 - Node & Express

Node.js and TypeScript are used to complete the back end. Express.js is applied as our RESTful framework. Some endpoints are used in back end for CRUD operations, which the front end can access through HTTP requests.

### Unit 4 - MongoDB

The data of our project is stored in database MongoDB. It is document-based and more flexible. Schemas are made for our users, posts, pokemons and comments. These schemas have several properties as well as restrictions.

### Unit 5 - Release Engineering
CI/CD pipelines are set up with github action.The code could step into production when CI/CD passes. Also, we depoly our project into Heroku, which can be connected to our GitHub Repos. We could get the user's perspective with the help of Heroku.

## Steps in the future
- Third-Party Login

> In the future, we will try our best to allow users to login through Google or Github.

- Recognizing pokemon pics by ML

> Because of time constraint, we couldn't let the website recognize pokemon pictures by Machine Learning. However, in the future, our team will try to realize the funtion.


## Above and Beyond Features


### Fully Responsive
Pokedex is fully responsive. The mobile-specific UI components are designed and can be viewed through mobile phones easily.

### Highly Customizable
Users can also switch languages. We currently support English and Chinese, but other languages can be easily integrated.

### Highly orginized
Only users and admin can make posts, and delete their own posts.But visitors can't. Users and visitors don't have access to the admin add/delete page, but admin have.


## Contributions
- Zipeng Liang

> Zipeng is the team leader and the full-stack developer in the team. He has set up the project structure and decided what technologies should be used in the application. He drew the prototypes of our project. He also contributed in solving many challenging problems throughout the term such as language translation and user authtication.

- Jenna(Jingwen) Che

> She is the meeting organizer and the full-stack develpoer in the team. She wrote Filter Search page UI and Hook for Posts, comments, search and filter. She also wrote CRUD operations for forum (posts, comments) and add/delete pokemon part with typescript. She also made meeting notes and drew the prototypes with Zipeng. She also helped other teammates to debug.

- You Ding

> You Ding is the frontend developer in the team. She mainly works on the UI of login and add/delete page. She is also responsible for completing the project documentation for the team.

- Hongxi Guo

> Hongxi is the frontend and backend developer in the team. She took charge on the design and the implementation of the profile database and the respective server. She also completed the functionality that allows users to edit their profile. She actively participated in group meetings and contributed her ideas of the frontend design and the group work flow.


 ### prototypes on figma:
 https://www.figma.com/file/yG3uhtgRI8cvmZCrmN5QK0/Pokedex?node-id=19%3A2


