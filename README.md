# TIC-TAC-TOE

A demo game to answer the brief from Wise Rock

```
Write a tic-tac-toe game that runs in a web browser.

We expect this should take roughly 4-8 hours but want to give you a week to get it back to us. If you need more time or have any questions or feedback, please let us know. The goal is for this to be a fun way to demonstrate your frontend and backend skills.

Requirements:
- User can create a new game board
- Allow two (and only two) players to connect to a game board
- Persist game state on the server
- Follow standard rules for tic-tac-toe (or noughts and crosses)
- Display the game result and persist in the database at the end of the game
- Display a ranking of the top five players and allow players to start a new game
Technical Requirements:
- Frontend written with React
- Backend API serving HTML, JSON, gRPC, and/or web sockets
- PostgreSQL database
```

## Running the app

- Clone the repo
- Run `corepack enable` to get on board with the latest yarn for your package
  manager in this repo
- Run `yarn` to install packages
- Run `yarn start`

This will kick off the docker-compose that will stand up the database, run
migrations and seed the database as required, and stand up both the API and APP
servers.

You can then access the app at `http://localhost`

## Considerations

I have designed this application to demonstrate my abilities while also keeping
the scope in check as much as possible. Given that context, I have made some
decisions to include tools that are overpowered for this kind of project in
order to demonstrate a skill, and some decisions to omit tools I would use in a
larger project to save on time and complexity.

## Tools

This provides a high-level overview of the tools I've chosen to use here. For
specific libraries, please see the individual packages.

#### Base tech stack

- Node.js
- TypeScript
- React
- Tailwind CSS
- Socket.io
- Express
- Zod
- JWT

#### Dev tools

- eslint
- prettier
- jest

Please see (DESIGN.md)[/DESIGN.md] for more details on my design process and
thinking.
