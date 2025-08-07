🎬 MovieFlix - A Modern Movie Discovery App
MovieFlix is a sleek, responsive web application designed to help you discover your next favorite movie. Built with React and powered by the TMDB API, it offers a seamless search experience, real-time trending data from Appwrite, and a beautiful, modern interface styled with Tailwind CSS.

✨ Features
Instant Search: Find movies as you type with a debounced search implementation for a fast and fluid user experience.

Popular Movies: The homepage displays a curated list of the most popular movies currently available, fetched directly from the TMDB API.

Trending List: A dynamic, horizontal list showcases the top-searched movies, with data powered by your own user interactions and stored in an Appwrite database.

Responsive Design: A mobile-first design that looks great on any device, from smartphones to desktops.

Modern Tech Stack: Built with the latest web technologies for optimal performance and developer experience.

🛠️ Tech Stack
Frontend: React (with Vite)

Styling: Tailwind CSS

Backend-as-a-Service (BaaS): Appwrite for database and user accounts.

Movie Data: The Movie Database (TMDB) API

Hooks & Utilities: react-use for the useDebounce hook.

🚀 Installation and Setup
Follow these steps to get a local copy of the project up and running.

Prerequisites
Node.js (v18 or later)

npm

1. Clone the Repository
git clone [https://github.com/your-username/movie-rating.git](https://github.com/your-username/movie-rating.git)
cd movie-rating

2. Install Dependencies
Install all the necessary packages using npm.

npm install

3. Set Up Environment Variables
Create a file named .env.local in the root of your project directory and add the following variables.

# Get this from your TMDB account settings
VITE_TMDB_API_KEY="your_tmdb_api_key_here"

# Get these from your Appwrite project settings
VITE_APPWRITE_PROJECT_ID="your_appwrite_project_id_here"
VITE_APPWRITE_ENDPOINT="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_DATABASE_ID="your_appwrite_database_id_here"
VITE_APPWRITE_COLLECTION_ID="your_appwrite_collection_id_here"

Important: You must restart the development server after making changes to this file.

4. Run the Development Server
npm run dev

The application should now be running on http://localhost:5173.

⚙️ Appwrite Configuration
For the trending feature to work, you need to set up your Appwrite project correctly.

Create a Database: In your Appwrite project, create a new database.

Create a Collection: Inside the database, create a collection to store the search terms.

Define Attributes: Add the following attributes to your collection:

searchTerm (String, Size: 255)

count (Integer)

movie_id (Integer)

poster_url (URL)

Create Indexes: Go to the Indexes tab of your collection and create two indexes:

An index on the searchTerm attribute (Type: key).

An index on the count attribute (Type: key). This is required for ordering the trending results.

Set Permissions: Go to the Settings tab of your collection, scroll to Permissions, and add a new permission for Role: Any with Create, Read, and Update access.

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.🎬 MovieFlix - A Modern Movie Discovery App
MovieFlix is a sleek, responsive web application designed to help you discover your next favorite movie. Built with React and powered by the TMDB API, it offers a seamless search experience, real-time trending data from Appwrite, and a beautiful, modern interface styled with Tailwind CSS.

✨ Features
Instant Search: Find movies as you type with a debounced search implementation for a fast and fluid user experience.

Popular Movies: The homepage displays a curated list of the most popular movies currently available, fetched directly from the TMDB API.

Trending List: A dynamic, horizontal list showcases the top-searched movies, with data powered by your own user interactions and stored in an Appwrite database.

Responsive Design: A mobile-first design that looks great on any device, from smartphones to desktops.

Modern Tech Stack: Built with the latest web technologies for optimal performance and developer experience.

🛠️ Tech Stack
Frontend: React (with Vite)

Styling: Tailwind CSS

Backend-as-a-Service (BaaS): Appwrite for database and user accounts.

Movie Data: The Movie Database (TMDB) API

Hooks & Utilities: react-use for the useDebounce hook.

🚀 Installation and Setup
Follow these steps to get a local copy of the project up and running.

Prerequisites
Node.js (v18 or later)

npm

1. Clone the Repository
git clone [https://github.com/your-username/movie-rating.git](https://github.com/your-username/movie-rating.git)
cd movie-rating

2. Install Dependencies
Install all the necessary packages using npm.

npm install

3. Set Up Environment Variables
Create a file named .env.local in the root of your project directory and add the following variables.

# Get this from your TMDB account settings
VITE_TMDB_API_KEY="your_tmdb_api_key_here"

# Get these from your Appwrite project settings
VITE_APPWRITE_PROJECT_ID="your_appwrite_project_id_here"
VITE_APPWRITE_ENDPOINT="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_DATABASE_ID="your_appwrite_database_id_here"
VITE_APPWRITE_COLLECTION_ID="your_appwrite_collection_id_here"

Important: You must restart the development server after making changes to this file.

4. Run the Development Server
npm run dev

The application should now be running on http://localhost:5173.

⚙️ Appwrite Configuration
For the trending feature to work, you need to set up your Appwrite project correctly.

Create a Database: In your Appwrite project, create a new database.

Create a Collection: Inside the database, create a collection to store the search terms.

Define Attributes: Add the following attributes to your collection:

searchTerm (String, Size: 255)

count (Integer)

movie_id (Integer)

poster_url (URL)

Create Indexes: Go to the Indexes tab of your collection and create two indexes:

An index on the searchTerm attribute (Type: key).

An index on the count attribute (Type: key). This is required for ordering the trending results.

Set Permissions: Go to the Settings tab of your collection, scroll to Permissions, and add a new permission for Role: Any with Create, Read, and Update access.

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.
