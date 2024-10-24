# Intent

This project, `Rofront`, is a basic web app whose first goal was to learn the framework React. It can not be considered as a ready-to-use production app, since key functionnalities are missing. However, it is functional and can be built locally (more info in the dedicated section)

# Features

The main feature is to display a global view of posts. Each of these posts consist of a main text, with optional media (images/videos/gifs). There is a basic search implementation to perform text search across all posts. For better performance, the view is paginated. Watch the working app below :

<img src="public/Rofront_vis.gif"> 

# Back-end

The app retrieves data from an independent API REST (see `api` folder). The code relative to this backend can be found [here](https://github.com/LedruRollin/Roback).

# Ideas of improvement

## Features
- Improve search system, which is currently minimal (a simple check by inclusion)
- Add tag support
- Improve UI/UX

## Security

- ~~Add authentification~~ (done, see [this PR](https://github.com/LedruRollin/Rofront/pull/1))
- Check/sanitize input from user


# Build the project

\/!\ The procedure to deploy backend with some data is still WIP. For that reason,  building thr project will currently only give a simple error view where the app tells you it can not contact back-end.

That being said, the app can still be ran locally. To do so, you can use the following commands :

```bash
git clone https://github.com/LedruRollin/Rofront.git
npm install
npm start
```
