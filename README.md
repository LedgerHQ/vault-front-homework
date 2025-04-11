# Ledger Vault - Frontend Homework

![illustration](https://i.imgur.com/AuJ6B7T.png)

## Objectives

Your challenge is to build a simple and intuitive interface for searching through a list of notifications.

### Figma Design

Here’s the design you’ll be implementing: **[Figma prototype](https://www.figma.com/proto/AwC58Mqda2ZOjqzadPdiso/LES---Front-end-homework?page-id=&node-id=1-4741&p=f&t=Dx21H0F2ytviGHvl-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A4741)**

All the available material can be found from this link: **[Figma components](https://www.figma.com/design/AwC58Mqda2ZOjqzadPdiso/LES---Front-end-homework?node-id=0-1)**

The password will be provided to you by email.

### Code

You'll be given a backend with a search endpoint to handle server-side operations and a minimal frontend that you'll enhance.

What we expect from you:

- Ensure the frontend nicely matches the Figma design.
- Create any necessary components and feel free to restructure the file architecture.
- Improve the Typescript types, so they are strictier & helpful.
- 🎁 **Bonus:** Add code quality tools (linting, formatting).
- 🎁 **Bonus:** A GitHub Action to automate code quality checks.
- 🎁 **Bonus:** Any other cool improvements you can think of!

> [!NOTE]
> We've **intentionally left some bugs/issues in the code**—happy debugging! 🥳

## Getting Started

1. Fork and clone this repository.
2. Complete the homework.
3. Commit as many times as needed.
4. Push your work to your fork.
5. Submit your fork URL as the deliverable. 🚀

We hope you enjoy the challenge! 💪

### Running the Backend

```sh
# Build the server image
docker build -t vault-front-homework:latest server

# Run the server container
docker run -p 5000:5000 vault-front-homework:latest
```

### Running the frontend

```
# install dependencies
pnpm install

# run the dev server
pnpm dev
```
