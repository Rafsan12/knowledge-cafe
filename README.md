# Knowledge Cafe

A simple and interactive platform for exploring blog articles, where users can browse various posts, view author details, and read the complete content. Built with React and powered by JSON data for the blog content.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Browse a list of blog articles with details like title, cover image, author, and more.
- Read complete blog posts by clicking on the blog cards.
- Displays author information and reading time.
- Easily customizable and extendable.

## Demo

You can view a live demo of this project [here](https://timely-brioche-5f6072.netlify.app/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rafsan12/knowledge-cafe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd knowledge-cafe
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

## Usage

- After starting the development server, you can browse the list of blog posts.
- Click on any blog card to view more details about the post.
- Explore author details and reading time for each post.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For implementing logic and functionality.
- **HTML & CSS**: For structuring and styling the components.
- **JSON**: For storing blog data.
- **Netlify**: For deployment.

## Project Structure

knowledge-cafe/ ├── public/ │ ├── index.html │ └── ... ├── src/ │ ├── components/ │ │ ├── Blog.js │ │ ├── Blogs.js │ │ └── ... │ ├── data/ │ │ └── blogs.json │ ├── App.js │ ├── index.js │ └── ... ├── package.json └── README.md

- `components/`: Contains React components used in the project.
- `data/`: Contains the `blogs.json` file, which holds the blog data.
- `App.js`: The root component that renders the main layout.
- `index.js`: Entry point of the React application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, feel free to reach out:

- **Author**: Rafsan
- **GitHub**: [Rafsan12](https://github.com/Rafsan12)
