<img width="1440" alt="Screenshot 2024-01-10 at 4 00 47 AM" src="https://github.com/shashanksanket/Zentrades-task-2/assets/40575030/c748b4e3-6294-4b57-8194-f40c8382679d"># Import Products Application

This React application is designed to import and display product data from a JSON or CSV file. The application allows users to customize the import settings and choose the columns they want to display in a table.

## Problem Statement

**Task:** Download the JSON file from [https://s3.amazonaws.com/open-to-cors/assignment.json](https://s3.amazonaws.com/open-to-cors/assignment.json). The JSON file contains 1000 records of products, each having four attributes: Subcategory, Title, Price, and Popularity.

**Requirements:**

1. Create a UI to import the data in the browser and display it as specified in the provided image file (`Import_products_Screen_1.png`).

2. The UI should have options to handle the display of columns in the table with multi-select functionality.

3. Implement the ">>" and "<<" buttons to add and remove selected options from the Available Fields List to Fields to be displayed List and vice versa.

4. Display the data in a table format of your choice with Title and Price ordered based on descending popularity.

**Deliverables:**

- Hosting URL on Heroku / Github pages.
- Github repository link to your solution.
- Time taken to complete this.

##Live Link:
https://shashanksanket.github.io/Zentrades-task-2/
## Getting Started

Follow these steps to set up and run the application:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shashanksanket/Zentrades-task-2.git
   ```

2. Change into the project directory:

   ```bash
   cd Zentrades-task-2
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Follow the on-screen instructions to import and display product data.

## Features

- **Step 1: Select File**
  - Choose a file (CSV or JSON) for importing data.

- **Step 2: Specify Format**
  - Select file type, character encoding, and delimiter.
  - Choose whether the file has a header.

- **Step 3: Display Heading**
  - Choose fields to be displayed in the table.
  - Multi-select functionality for available and displayed fields.

- **Table Display**
  - View imported data in a table format.
  - Sort data by Title and Price based on descending popularity.

## Components

### Dropdown

The `Dropdown` component is used for selecting file type, character encoding, and delimiter.

### Checkbox

The `Checkbox` component is used to toggle the header option.

## Folder Structure

```
|-- public
|-- src
    |-- components
        |-- checkbox.js
        |-- dropdown.js
    |-- App.css
    |-- App.js
    |-- index.css
    |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```

## Deployment

The application can be deployed on platforms like Heroku or GitHub Pages. Follow the deployment instructions provided by the chosen platform.


## Dependencies

- [React](https://reactjs.org/)
- [PapaParse](https://www.papaparse.com/)
- [Tailwind CSS](https://tailwindcss.com/)


## Acknowledgments

- Thanks to [PapaParse](https://www.papaparse.com/) for simplifying CSV parsing in the browser.
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

---

## Images
![Uploading Screenshot 2024-01-10 at 4.00.47 AM.png…]()
