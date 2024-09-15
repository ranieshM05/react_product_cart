# React Product and Cart Page

This project is a simple React application that demonstrates how to create a product page and cart functionality using the Fake Store API. It includes the ability to add and remove items from the cart, and ensures proper routing within a ReactJS application.

## Features

- Fetches a list of products from the Fake Store API.
- Displays products in a responsive layout.
- Shows key product information, such as image, title, price, and description.
- Allows users to add products to the cart.
- Cart page includes the ability to increase/decrease item quantity and remove items from the cart.
- Displays the total price with a 10% discount applied.
- Proper routing between the product page and cart page using React Router.
- Clean, readable, and well-documented code.

## Tech Stack

- ReactJS
- React Router
- HTML/CSS and Tailwind CSS for styling
- JavaScript for functionality

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:


   git clone https://github.com/your-username/my-store.git
Navigate to the project directory:

cd my-store
Install the dependencies:

npm install
Running the Project
Start the development server:


npm start
Open your browser

Project Structure

my-store/
├── public/
├── src/
│   ├── components/
|   |   |--caritems.js
|   |   |--productcard.js
│   ├── pages/
│   │   ├── ProductPage.js
│   │   ├── CartPage.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
components/: Contains reusable components like ProductCard and CartItem.
pages/: Contains ProductPage.js and CartPage.js for displaying products and the cart.
App.js: Main component that sets up routing.
index.js: Entry point of the React application.
How to Use
Navigate to the product page to view the list of products.
Click "Add to Cart" to add a product to the cart.
Go to the cart page to view and manage items in the cart.
Increase or decrease the quantity of items in the cart and view the total price with a 10% discount.