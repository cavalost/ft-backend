# ft-backend

## Factsheet

| **Category**              | **Value**                                 |
| ------------------------- | ---------------------------------------- |
| **Contact**               | claudina.avalos@opendeusto.es
| **Language / Framework**  | Node / Express
| **Deployment type**       | Heroku
| **Production URL**     | [https://appclau.herokuapp.com](https://appclau.herokuapp.com)|

## Configuration

Configuration is via the following environment variables:

| Env var      | Example      | Purpose                   |
| ------------ | ------------ | ------------------------- |
| `PORT` | `3000` | Port |
| `FT_API_URL` | `https://api.ft.com/content/search/v1` | FT API endpoint |
| `FT_API_KEY` | `-` | Auth for the FT API. To obtain one, visit [https://developer.ft.com/portal/docs-start-obtain-an-api-key](https://developer.ft.com/portal/docs-start-obtain-an-api-key) |
## Requirements
Node >= 8

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev-start
```

### Compiles and runs the server
```
npm run start
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run test
```

### Deploy to Heroku
Link the repository to Heroku, create a heroku/nodejs Buildpack, setup the environment variables and perform a commit + push to master to start the deployment

