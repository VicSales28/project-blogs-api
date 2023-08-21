# Blogs API 📑

I developed an API and a database for a blog!

The project was built in Node.js using the Sequelize package to create a CRUD for posts.

Regular deadline: June 26, 2023 at 2:00 pm

<details>
  <summary><strong>🏗 Project structure</strong></summary><br />

  <img width="607" alt="image" src="https://github.com/VicSales28/project-blogs-api/assets/115190439/3b6c19a6-ff5a-4d7e-8357-08936add31ee">

The files created by me are in `src/`:

- In the folder  📁`controllers` there are the files responsible for receiving all user requests and controlling what will be shown to the user.
- In the folder  📁`services` there are the files responsible for doing the business rules.
- The folder 📁`models` centralizes the definition of database models in a specific location.
- The folder 📁`migrations` there are files that manages database migrations.
- In the folder  📁`routers` there are the files responsible for defining routes.
- In the folder  📁`middlewares` there are the files responsible for the validations.

The created endpoints are:
- POST `/login`
- POST `/user`
- GET `/user`
- GET `/user/:id`
- POST `/categories`
- GET `/categories`
- GET `/post`

</details>

<details>
  <summary><strong>🔎 Linter</strong></summary><br />

To ensure code quality, ESLint was used.

This project already comes with the dependencies related to the linter configured in the package.json files.

To run ESLint in the project, simply execute the command `npm install` within the project, and then `npm run lint`. If ESLint analysis identifies issues in your code, these problems will be displayed in your terminal. If there are no issues in your code, nothing will be printed in your terminal.

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git@github.com:tryber/sd-028-b-project-blogs-api.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

<details>
  <summary><strong>🐋 Running on Docker</strong></summary><br />
  
> :information_source: Run the `node` and `db` services using the command `docker-compose up -d --build`.

  - Remember to stop the `mysql` service if you're using it locally on the default port (`3306`), or adjust it if you want to use the application within containers;

  - These services will initialize a container named `blogs_api` and another named `blogs_api_db`;

  - From here, you can run the `blogs_api` container via the CLI or open it in VS Code;

> :information_source: Use the command `docker exec -it blogs_api bash`.

  - This will provide you access to the interactive terminal of the container created by the compose, which is running in the background.

> :information_source: Install the dependencies [**if they exist**] using `npm install`. (Install inside the container)

- **:warning: Attention:** If you choose to use Docker, **ALL** commands available in the `package.json` (npm start, npm test, npm run dev, ...) must be executed **WITHIN** the container, meaning in the terminal that appears after running the `docker exec` command mentioned above.

  - **:warning: Attention:** The **git** within the container is not configured with your credentials. Either perform commits outside the container or configure your git credentials within the container.

  - **:warning: Attention:** Do not run the npm audit fix command! It updates various project dependencies, and this update creates conflicts with the evaluator.

  - ✨ **Tip:** The `Remote - Containers` extension (which will be in the recommended extensions section of VS Code) is recommended so you can develop your application in the Docker container directly within VS Code, just like you do with your local files.

</details>

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>

