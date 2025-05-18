✅ Step-by-Step Process (Frontend Only)
🔹 Step 1: Set up the Angular Project
Open terminal or command prompt.

Create a new Angular 16 project using Angular CLI.

Choose routing support when prompted.

Use CSS or SCSS for styling as per your preference.

Install Bootstrap 5 for styling.

🔹 Step 2: Create Components
Create the following components using Angular CLI:

product-list – to display products in a grid/card view.

product-details – to show selected product details in a modal.

admin-login – for admin to login.

admin-dashboard – for admin to add or delete products.

🔹 Step 3: Create Product Model
Define a model (structure) for a product with fields like:

id

name

description

price

image URL

🔹 Step 4: Create Product Service
Build a service to manage product data.

Use an in-memory list to store products.

Include methods to:

Get all products

Add a new product

Delete a product

Also, handle admin login/logout using localStorage.

🔹 Step 5: Implement Product Listing
Use Bootstrap cards or grid to show all products.

Use *ngFor loop to display each product dynamically.

Add a "View Details" button on each card.

🔹 Step 6: Implement Product Details Modal
When "View Details" is clicked, show a modal or a popup.

Modal shows complete product details like name, price, image, etc.

Include a close button.

🔹 Step 7: Admin Login Page
Create a simple login form.

Accept email and password.

On successful match (hardcoded values), store admin session in localStorage.

Redirect to admin dashboard on successful login.

🔹 Step 8: Admin Dashboard
Only accessible if admin is logged in.

Provide a form to add a new product.

List all current products with a delete button for each.

When a product is added, it shows up in the product list.

When deleted, it is removed from both dashboard and catalog.

🔹 Step 9: Set Up Routing
Set up routing to navigate between:

Home (product list)

Admin login

Admin dashboard

Add navigation links for easy switching.

🔹 Step 10: Navbar & Final Touches
Add a Bootstrap navbar for navigation between:

Home

Admin Login

Show logout option if admin is logged in.

Ensure consistent UI and responsiveness.

✅ Final Result:
A fully working Angular frontend that:

Displays products dynamically

Lets admin login using hardcoded credentials

Allows adding/deleting products (admin only)

Uses localStorage for session simulation
