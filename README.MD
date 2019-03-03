# node-authentication

A node API with user register, authenticate and reset password

## Dependencies
Node - [Node](https://nodejs.org/en/ "Node")
MongoDB - [MongoDB](https://nodejs.org/en/ "MongoDB")
Yarn - [Yarn](https://nodejs.org/en/ "Yarn")

## Install

```
git clone https://github.com/AlcidesA/node-authentication.git
cd node-authentication
yarn install
```

## Setup

To test sending forgotten password email I use the
Mailtrap - [Mailtrap](https://mailtrap.io "Mailtrap")

You can create a free account, and then you create an inbox.

In integrations, change to nodemailer, get the data and put it in the **mail.json** file


## Run
                
1. **Start MongoDB**
2. node src/index.js