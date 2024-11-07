# Namma Kadai Inventory System

**Namma Kadai** is a Flask-based inventory management system designed to help small businesses manage their stock, purchases, sales, and financial reports efficiently. This system includes functionalities to track an initial cash balance, add and view items, record purchases and sales, and generate real-time reports on inventory and cash flow.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Author](#author)

## Features

- **Inventory Management**: Easily add and manage items in the inventory.
- **Purchases and Sales**: Record purchases and sales transactions, with automatic adjustments to item quantities and cash balance.
- **Reporting**: Generate reports to view the current inventory status and updated cash balance.
- **Bonus Functionalities**: Additional features for updating item quantities and tracking real-time inventory.

## Technologies Used

- **Backend**: Flask (Python)
- **Database**: SQLite
- **Frontend**: HTML, CSS, JavaScript

## Project Structure
Namma_Kadai/ ├── pycache/ # Python cache files for optimized loading ├── instance/ # Folder for app-specific configurations (e.g., database) ├── static/ # Static assets such as CSS, JavaScript, and images │ ├── shop13.jpg # Background image used in the app │ ├── styles.css # Main CSS file for styling the app │ └── script.js # JavaScript file for client-side functionalities ├── templates/ # HTML templates rendered by Flask views │ └── index.html # Main HTML template for the home page ├── app.py # Main Flask application file containing routes and logic ├── namma_kadai.db # SQLite database file to store inventory, purchases, and sales data ├── requirements.txt # Python dependencies required to run the app └── README.md # Project README file


- **app.py**: Contains the core Flask logic and route definitions.
- **namma_kadai.db**: Database file to store data for inventory, purchases, and sales.
- **static/**: Folder for static assets such as images, CSS, and JavaScript.
- **templates/**: HTML templates for rendering different views within the app.

## Setup and Installation

### Prerequisites

- Python 3.x
- Git (for cloning the repository)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/sowmiya493/Flask_app.git
   cd Flask_app
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   flask shell
   from app import db
   db.create_all()
   exit()
   flask run
Access the Application: Navigate to http://127.0.0.1:5000/ to use the Namma Kadai Inventory System.

Usage
Add Items: Use the "Add Item" page to add new items to your inventory.
Record Purchases and Sales: Manage transactions with automatic updates to stock and cash balance.
Generate Reports: View real-time inventory and cash flow reports to monitor your business health.
Update Inventory: Use additional features to modify item quantities.
Screenshots
Homepage

Add Item Section

Reports Section

(Add actual screenshots of each section for clarity.)

License
This project is licensed under the MIT License - see the LICENSE file for details.Author
Developed by Sowmiya. Contributions, feedback, and suggestions are welcome!
