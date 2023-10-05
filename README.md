# The Crew Unofficial Logbook

The Crew Unofficial Logbook is a MERN (MongoDB, Express.js, React, Node.js) web application designed as an interactive logbook for players of the game [The Crew: The Quest for Planet Nine](https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine). It offers a user-friendly interface for game players to log and track their missions. The application features robust user authentication, interactive components, and a seamless integration between the frontend and backend services, making it a go-to platform for fans of the game.

## Live Deplyment

Check out the live deployment of The Crew Unofficial Logbook [here](https://unofficial-logbook-3aafcc4e45ae.herokuapp.com).

## Features

- **User Authentication**: Secure signup, login, and session management.
- **Crew Management**: Users can create, edit, and manage crews.
- **Mission Tracking**: Log, update, and monitor missions in real-time.
- **Dynamic UI**: Intuitive and responsive design for an optimal user experience.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Heroku CLI (for deployment)

### Local Development

1.  #### Clone the Repository

```bash
git clone https://github.com/greenplastic90/the-crew-express-react.git
cd the-crew-express-react
```

2. #### Install Dependencies:

```bash
npm install
```

3. #### Create Environment Variables:
   Create a `.env` file in the root directory and set your environment-specific variables. For example:

```makefile
DATABASE_URL=your_mongo_connection_string
SECRET=your_secret_key
REACT_APP_TOKEN_NAME=the_crew_auth_token_name
```

4. #### Run Application

```bash
npm start
```

### Deployment on Heroku

1. Login to Heroku and create a new app.
2. Set up the MongoDB add-on or connect to your MongoDB provider.
3. Push the main branch to Heroku:

```bash
git push heroku main
```

4. After deployment, seed the database with:

```bash
heroku run node seed/seed.js
```

## License

This project is licensed under the MIT License.
