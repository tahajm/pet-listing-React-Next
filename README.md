# Coolblue NextJS Assignment

In this assignment we would like you to build an amazing Pets web app using the provided mock-up designs. 🧑‍🏭

- You can use the below mentioned REST API endpoint to request the information for your application.
- Together with this readme file we provide you with a boilerplate NextJS application. Consider this as a starting point, but don't hesitate to make improvements or changes.

Carefully read the instructions before you proceed.

## Scope

The idea of the assignment is to improve and extend the development of an app that displays different types of `pets on a filter page`.

- Replace hardcoded pets with pet data fetched from the internal Next API route:
  - GET `/api/pets`.
  - The endpoint provides all the pets and the options to filter and to sort or order by property using query params.
  - In other words: `/api/pets?name={value}` or `/api/pets?sortBy={property}` or `/api/pets?order=desc`
- Implement a filter to filter pets by `species`.
- Implement default sorting of pets alphabetically by `name`. When the "Latest added" filter is toggled, sort pets by `dateAdded` with the newest pets first.
- Make sure that the page matches the provided [designs](#design-specifics).
- Make sure the application works in the latest version of modern browsers.

Apart from the above, we expect you to make some general improvements you think would be beneficial.

Useful quick-links:

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)

## What we are looking for

We would like to see your best work, so please focus on what you regard as quality work. Things we will be looking out for are among others:

- We’d love to see a responsive design that works well across different screen sizes.
- Performance matters, so feel free to lean on best practices and patterns from frameworks like Next.js.
- Please aim for an accessible application so everyone can use your app comfortably.
- Using semantic HTML is encouraged as it helps with both accessibility and SEO.
- We value type safety, so try using TypeScript to its strengths.
- If you can include some tests, that would be great. We are not looking for 100% coverage, but we do want to see your approach to testing.

## Design specifics

Refer to the designs and specifications in the `/designs` directory for detailed information on component specifications, layout designs, color codes and font usage.

### Designs

- [Component Specifications](./designs/Components.png)
- [Filter Page - Desktop](./designs/Desktop_overview.png)
- [Filter Page - Mobile](./designs/Mobile_overview.png)

### Static assets

All the required `icons and images` are added to the `./public` directory

The images of all the pets are available in the `/public/images` folder.

The icons are available in the `/public/icons` folder.

### Colors used

- Yellow: `#E0B833`
- Blue: `#2B6DB1`
- Dark blue: `#285DAB`
- Gray: `#DDDDDD`
- White: `#FFFFFF`
- Black: `#111111`

> These colors are already defined in the `globals.css` file.

### Font used

- `Open Sans`

## Conditions

Take as much time as you feel comfortable with. Based on the amount of time you spent in combination with what you handed in we'll go over your assignment and ask questions along the way. Your reasoning is the most important to us!

Make sure you hand in your assignment 48 hours before the second interview! That way you give us some time to go over it too 🤓

### Submission instructions

Please create a zip file of the project folder (excluding the node_modules directory) and upload it to a cloud service (such as WeTransfer or Google Drive). Share the link via email with the recruiter at least 48 hours before the second interview.

## Usage

### Global dependencies

Make sure you have Node 20 installed:

- [Node.js](https://nodejs.org/)
- [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Will open your default browser to [http://localhost:3000](http://localhost:3000).

### Build production bundles

```
npm run build
```

## Questions

- **Question**: Can I use NPM packages or frameworks like Material-ui?

- **Answer**: Yes, you can, but we don't recommend this since it decreases the chance of showing your skills.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding! 😺

## All commands

| Command                 | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| **dev**                 | Start the Next.js development environment              |
| **build**               | Create a Next.js production build                      |
| **start**               | Start a webserver for the production build             |
| **lint**                | Lint the code using ESLint and Stylelint               |
| **lint:fix**            | Fix linting errors for all files                       |
| **format**              | Formats the code using Prettier                        |
| **test**                | Run unit tests                                         |
| **test:fix**            | Run unit tests with updating snapshots                 |
| **test:coverage**       | Run unit tests with code coverage enabled              |
| **test:watch**          | Run unit tests in watch mode                           |
| **test:watch:coverage** | Run unit tests in watch mode and code coverage enabled |
| **typecheck**           | Validate TypeScript compilation                        |
