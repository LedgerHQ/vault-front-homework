# vault-front-homework

## Objectives

The main goal of the homework is to build a simple interface to search accross a list of notifications.

![1618934366](https://user-images.githubusercontent.com/944835/115428226-79153780-a202-11eb-9c5f-13febfc4754b.png)
![1618934381](https://user-images.githubusercontent.com/944835/115428224-787ca100-a202-11eb-8519-cf03d3127309.png)
![1618934372](https://user-images.githubusercontent.com/944835/115428225-79153780-a202-11eb-9baa-c86e02f97401.png)

You will be provided with a backend with a search endpoint that handles the server part.
⚠️ There is a bug in the search code that you will have to fix 😏 

The current frontend is very minimal and you will be in charge to:
- develop a nice UI/UX experience. Mockups in this document just give a rough indications of what are the features of the application. Feel free to implement any layout you find pretty and that offers the best UX experience
- create any components you would need and feel free to restructure the files architecture
- ⚠️ we intentionnally put some bugs/problems in the code, happy debugging 🥳
- add code quality tools (linting, formating)
- 🎁 **bonus** github action that runs those tools
- 🎁 **bonus** anything cool you have in mind

## Getting started

- fork and clone this repository
- complete the homework
- do as many commits as you want
- push your work on you fork
- The deliverable will be your fork URL 🚀

We hope you will enjoy the challenge 💪

### Launch the backend

```
# build the server image
$ docker build -t vault-front-homework:latest server

# run the server image
$ docker run -p 5000:5000 vault-front-homework:latest
```

### Launch the frontend

```
# install dependencies
yarn

# run the dev server
yarn dev
```


