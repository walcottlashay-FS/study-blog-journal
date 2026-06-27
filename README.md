# Study Blog Journal

This project is a static study blog journal built with Next.js. It was created to document my learning process while working through web development concepts, project structure, GitHub workflow, deployment, routing, API development, React Native, and authentication.

The site is structured like a blog, with each post focused on a concept or project reflection. The goal of this project is to keep the website updated with new content while practicing source control, deployment, and static site development.

## Project Overview

This site includes multiple study journal posts that explain what I have learned during different parts of my web development course. Each post has a title, category, date, reading time, summary, and full article content.

The blog posts are managed through a TypeScript data file and displayed dynamically using Next.js routes.

## Technologies Used

* Next.js
* React
* TypeScript
* CSS
* Git
* GitHub
* Vercel

## Current Blog Posts

### What I Learned Building My First API

This post reflects on learning how APIs connect the front end, backend, and database. It covers Node.js, Express, MongoDB, CRUD routes, Postman testing, and how APIs can support real-world business tools.

### What I Learned About Deploying Static Sites

This post explains what I learned about moving a project from my computer to a live website. It discusses project setup, GitHub, deployment, ignored files, and why clean project structure matters.

### How GitHub Helped Me Understand Project Management

This post focuses on how GitHub supports project organization, version control, commits, collaboration, and deployment. It also explains why GitHub is important for showing project progress.

### What I Learned About Next.js Pages and Routing

This post explains how Next.js routing works through the app folder, pages, dynamic routes, slugs, reusable layouts, and blog-style structure.

### What I Learned Starting React Native with Expo

This post reflects on learning how React Native and Expo connect web development skills to mobile app development. It covers components, mobile app structure, and how web development concepts can transfer to apps.

### Understanding JSON Web Tokens

This is the latest content update. This post explains how JSON Web Tokens help applications verify logged-in users, protect routes, and connect the authentication flow between the front end and backend.

## Latest Update

For the final content update, I added a new article about JSON Web Tokens.

New post added:

* Understanding JSON Web Tokens

New image added:

* json-web-token-auth.svg

The new article explains:

* What a JSON Web Token is
* How a token is created after login
* How JWTs help verify users
* Why protected routes need authentication
* Why private information should not be stored inside a token
* How JWTs connect front-end and backend authentication

## New Article Route

The new article can be viewed at:

```text
/posts/understanding-json-web-tokens
```

## Project Structure

```text
study-blog-journal
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   └── posts
│       └── [slug]
│           └── page.tsx
├── components
│   └── PostFilter.tsx
├── lib
│   └── posts.ts
├── public
│   └── images
│       ├── api-project.png
│       ├── react-native-expo.png
│       └── json-web-token-auth.svg
├── README.md
├── package.json
└── .gitignore
```

## How the Blog Works

The blog content is stored in:

```text
lib/posts.ts
```

Each post includes:

* slug
* title
* category
* date
* summary
* reading time
* image
* content

The dynamic post pages use the post slug to create individual article pages.

Example:

```text
/posts/understanding-json-web-tokens
```

## Running the Project Locally

To install dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

To test the production build:

```bash
npm run build
```

## Deployment

This project is deployed through Vercel and managed through GitHub. Updates are made locally, committed with Git, pushed to GitHub, and then redeployed through Vercel.

## GitHub Workflow

The project is managed with Git and GitHub.

Common commands used:

```bash
git status
git add .
git commit -m "Add JSON Web Tokens article"
git push origin main
```

## Assignment Requirements Completed

* Added instructor as a GitHub collaborator
* Managed all code through GitHub
* Added a new content update
* Included at least one image with the new article
* Deployed the updated site
* Prepared the project for GitHub ZIP download from the default branch

## Important Submission Notes

For final submission, the ZIP file should be downloaded directly from the GitHub repo default branch.

Files and folders that should not be submitted include:

* node_modules
* .env files with live keys
* Word documents
* PDF files
* Notepad files
* .txt files used only for links

The live site link and GitHub repo link should be submitted directly in the FSO activity feedback area.

## Author

Lashay Walcott
