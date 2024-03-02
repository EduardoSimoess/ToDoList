# To-Do List Web Application

This is the repository of the To-Do List web application, developed using Next.js and styled with Tailwind CSS.

## How to Run

Make sure you have Node.js installed on your machine.

1. Clone this repository:

    ```bash
    git clone git@github.com:EduardoSimoess/to_do_list.git
    ```

2. Navigate to the project directory:

    ```bash
    cd to_do_list
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and access `http://localhost:3000` to see the To-Do List application running.

## Project Structure

- `components/`: This directory contains the Next.js application components.
- `app/`: Contains the main files where the application is rendered.
- `interfaces/`: Contains the TypeScript types.
- `provider/`: Contains the global context used in the aplication.
- `helpers/`: Contains function used multiple times in the aplication.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering.
- [Tailwind CSS](https://tailwindcss.com/): CSS utility framework for rapid and easy styling.

## Features

- Add new tasks.
- Mark tasks as completed.
- Track the number of completed tasks and tasks to be done.
- Remove task.
- Mobile-first design.
- Dark mode.

## Improvements

I would like to add filters related to the date or importance of the task.

However, making this type of filter using only front-end techniques such as high order functions is bad practice.

Therefore, it would be necessary to add a back end and database to begin improvements.

## Contributing

If you would like to contribute to this project, feel free to open an issue or submit a pull request.
