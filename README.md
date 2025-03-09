# Sanity + React Blog Setup

This project sets up a blog using **Sanity** as the backend and **React** for the frontend. The documentation can be found [here](https://www.sanity.io/guides/build-your-first-blog-using-react), but this setup has been updated to work with the latest versions of React and Sanity.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   
## Configuring CORS in Sanity

To allow your React application to communicate with Sanity, configure CORS settings:

1. Go to the Sanity project dashboard.
2. Click on `Settings > API`.
3. Locate the CORS Origins section.
4. Click `ADD NEW ORIGIN` and enter:
   ```sh
   http://localhost:3000
   ```
   Or, use `*` to allow access from any location (not recommended for production).
5. Save the changes.