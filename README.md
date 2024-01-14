# WMS

WMS is a warehouse management inventory tool created custom to my actual place of employment, to solve multiple issues as I have come across while working as a fork lift operater. The system in place is glitchy and outdated at best, and is causing inventory problems, costing time and money. Created with the MERN stack.

## Installation

```bash
npm run setup_dev
```

or to setup server side:

```bash
npm run setup_server
```

to setup client side:

```bash
npm run setup_client
```

to import base data to mongo db

```bash
npm run setup_data:import
```

to delete data in mongo db

```bash
npm run setup_data:destroy
```

To setup enviroment variables, create a .env file in `./WMS/server` and copy the contents of `.env.example` to `.env` file. Replace values in `.env` with your enviroment variable values.

#### SERVER API

##### Endpoints

users

- `http://localhost:5000/api/`
  - `POST` - registerUser
  - `GET` - getUsers
- `http://localhost:5000/api/auth`
  - `POST` - authUser
- `http://localhost:5000/api/logout`
  - `POST` - logoutUser
- `http://localhost:5000/api/:id`
  - `DELETE` - deleteUser
  - `PUT` - updateUser
  - `GET` - getUserById
- `http://localhost:5000/api/profile`
  - `GET` - getUserProfile
  - `PUT` - updateUserProfile

products

- `http://localhost:5000/api/products`
  - `GET` - getProducts
  - `POST` - createProduct
