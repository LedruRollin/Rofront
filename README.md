# Intent

This project is a basic web app whose first goal was to learn the framework React. It can not be considered as a ready-to-use production app, since key functionnalities are missing. However, it is functional and can be built locally (more info in the dedicated section)

# Features

The app is a single page application (SPA) whose main feature is to display a global view of posts. Each of these posts consist of a main text, with optional media (images/videos/gifs). There is also a basic search implementation to perform text search across all posts. For better performance, the view is paginated.

# Back-end

The app retrieves data from an independent API REST (see `api` folder). The code relative to this backend can be found here (TODO: ADD LINK).

# Ideas of improvement

## Features
- Improve search system, which is currently minimal (a simple check by inclusion)
- Add tag support
- Improve UI/UX

## Security

- Add authentification
- Sanitize input from user


# Build the project

To build the project, use the following commands :

`yarn start`
