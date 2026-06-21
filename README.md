# Podcast App

A React podcast browsing app that lets users explore podcast previews, search by title, sort results, filter by genre, and move through results using pagination.

This project focuses on managing multiple pieces of UI state together in a clean and predictable way. The main goal was to make sure search, sorting, filtering, and pagination all work together without breaking the user experience.

---

## Features

- Fetches podcast data from an external API
- Live search by podcast title
- Sort options:
  - Newest first
  - Oldest first
  - Title A–Z
  - Title Z–A
- Genre filtering using the provided genre mapping data
- Pagination to keep the list manageable
- Loading, error, and empty states
- Responsive layout for smaller screens
- Centralised state management using **React Context**

## Tech Stack

- React
- JavaScript (ES6+)
- CSS Modules
- Vite

## Project Goal

The purpose of this project was to build a podcast browsing interface where multiple controls stay in sync at all times.

This means:

- searching should immediately affect the displayed podcasts
- sorting should work on the filtered/search results
- genre filters should remain applied while paging through results
- pagination should only show the podcasts that match the current search, sort, and filter state

## How It Works

### 1. Data Fetching

Podcast preview data is fetched from:

```
https://podcast-api.netlify.app/
```

The app loads the podcast data once when the application starts and stores it in global state using the PodcastContext.

### 2. Search

Users can search podcasts by typing any part of a show title into the search bar.

The search is:

- case-insensitive
- updated live as the user types

### 3. Sorting

Users can sort the current podcast results by:

- newest updated
- oldest updated
- title A–Z
- title Z–A

Sorting works together with the current search term and selected genre filter.

### 4. Genre Filtering

The API returns genre IDs only, so genre names are mapped using the provided data.js file.

Users can filter the podcast list by genre, and the selected filter stays active while navigating through the app.

### 5. Pagination

Podcasts are displayed in smaller chunks rather than rendering the entire list at once.

The app:

- calculates the total number of pages based on the processed podcast list
- keeps the current page in sync with the active search, sort, and filter state
- resets back to page 1 when the result criteria changes

## State Management

This project uses React Context to manage the main application state.

The context stores:

- all fetched podcasts
- loading and error state
- current search term
- selected sort option
- selected genre
- current page

From that state, the app derives:

- filtered podcasts
- sorted podcasts
- paginated podcasts
- total result count
- total pages

## Folder Structure

```
src
├── api
│   └── fetchPodcasts.js
├── components
│   ├── GenreFilter.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   ├── PodcastCard.jsx
│   ├── PodcastGrid.jsx
│   ├── SearchBar.jsx
│   └── SortSelect.jsx
├── context
│   └── PodcastContext.jsx
├── utils
│   ├── formatDate.js
│   └── genreService.js
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```
git clone <repo-link>
```

### 2. Open the project folder

```
cd <project-folder>
```

### 3. Install dependencies

```
npm install
```

### 4. Start the development server

```
npm run dev
```

## What I Focused On in This Project

A big part of this challenge was not just displaying podcast data, but making sure the different UI controls were not conflicting with one another.

The main things I focused on were:

- keeping the code modular by splitting the UI into reusable components
- using a shared context so search, sorting, filtering, and pagination stay in sync
- keeping the filtering/sorting/pagination logic predictable and easy to follow
- handling loading, empty, and error states cleanly
- documenting key functions and modules with JSDoc comments
- safely migrating reusable components and logic from the previous DJS03 project

## Possible Future Improvements

If I were to continue building this project further, I'd look at adding:

- a podcast details page for each show
- favouriting / saved podcasts
- persistent filters using local storage
- debounced search for larger datasets
- improved pagination controls for very large result sets

## Author

Built by Mughammad for DJS04 React Podcast App CodeSpace challenge.
