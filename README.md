# Trello Clone

## About

A Trello clone that uses Next.js for the frontend and a local express server for the backend that accesses a json file as it's database.

## MVP

- Create Board
- Edit Board
- Basic tests
- Simple error handling
- API

## How to run this app

Clone the repository

Install all the dependencies

> <code>npm install</code>

Start the server

> <code>node /server/server.js</code>

Start the app

> <code>npm start</code>

## How to test this app

This app and it's api are designed to use Jest as a testing framework as well as supertest to handle the api tests.

> <code>npm test</code>

## Missing functionality

<strong>API:</strong>

- CRUD functionality is not complete, we only have:
  - Boards (Get all boards)
  - Board (Read, Update)
  - Card (Update)

<strong>Front end:</strong>

- Is only hooked up to Boards api above (just displays all boards)
  - Single Board page is still hard coded
  - Cannot create, edit or delete boards or cards
