## Environment Variables

This project uses the following environment variables to configure essential aspects of the application:

- **VITE_API_URL**:  
  This variable defines the base URL for your API requests. It is used by Axios to set the endpoint for HTTP requests. For example:


- **BASE_URL**:  
  This variable specifies the base URL for the application. It is typically used to set up routing in the application, allowing you to define how the application should respond to different paths. The value is usually set to the root URL of your app.

Make sure to define these variables in a `.env` file at the root of your project or directly in your deployment environment.

## Project Scripts

The following scripts are defined in the `package.json` file to facilitate various development tasks:

- **dev**:  
  Starts the Vite development server. This command allows you to run the application in development mode, enabling features like hot module replacement for a better development experience.
  ```bash
  npm run dev

### build

- **build**:  
  Compiles the application for production. This command generates optimized and minified static files suitable for deployment. It processes your Vue components, JavaScript files, and any other assets, producing a final output that can be served by a web server.

  To run the build script, use the following command in your terminal:
  ```bash
  npm run build

### lint

- **lint**:  
  Runs ESLint to analyze your code for potential errors and coding style violations. This command helps ensure that your code adheres to defined standards and best practices, improving readability and maintainability.

  To run the lint script, use the following command in your terminal:
  ```bash
  npm run lint

### lint:fix

- **lint:fix**:  
  Runs ESLint with the `--fix` option to automatically correct fixable linting errors in your code. This command helps streamline the process of maintaining code quality by resolving many common issues with a single command.

  To run the lint:fix script, use the following command in your terminal:
  ```bash
  npm run lint:fix

### format

- **format**:  
  Runs Prettier to format your code according to defined style rules. This command helps ensure consistent formatting across your codebase, improving readability and maintainability.

  To run the format script, use the following command in your terminal:
  ```bash
  npm run format

### docs

- **docs**:  
  Generates documentation for your JavaScript code using JSDoc. This command scans your source files for comments formatted with JSDoc tags and creates HTML documentation based on those comments.

  To run the docs script, use the following command in your terminal:
  ```bash
  npm run docs

### Running the Project

You can run the project using either npm or Docker, depending on your preference and environment setup.

#### Using npm

To start the development server with npm, run the following command in your terminal:

```bash
npm run dev
```

#### Using Docker

To start the development server with Docker, ensure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed. Then, run the following command in your terminal:

```bash
docker-compose up
```
