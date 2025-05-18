Step-by-Step Process: Angular Frontend for E-Commerce Product Catalog
1. Set up the Angular Project

Open terminal or command prompt.

Create a new Angular 16 project using Angular CLI.

Enable routing when prompted.

Choose CSS or SCSS for styling.

Install Bootstrap 5 for responsive UI design.

2. Create Components
Generate the following components using Angular CLI:

product-list: displays products in a card/grid layout.

product-details: shows detailed view of a selected product.

admin-login: handles admin login functionality.

admin-dashboard: allows admin to manage products.

3. Create Product Model
Define a product structure with these fields:

id

name

description

price

image URL

4. Create Product Service
Build a service to handle product-related logic:

Use an in-memory array to store and manage products.

Add methods for:

Retrieving all products

Adding new products

Deleting products

Also implement admin login and logout using localStorage.

5. Implement Product Listing

Use Bootstrap grid or cards to show all products.

Use Angular’s looping mechanism to display products dynamically.

Add a "View Details" button on each card.

6. Implement Product Details Modal

Show a modal popup when "View Details" is clicked.

Modal displays complete product details like name, description, price, and image.

Include a button to close the modal.

7. Admin Login Page

Create a login form that accepts email (username) and password.

Hardcode the credentials for admin login:

Username: admin

Password: admin123

On successful login, store session information in localStorage.

Redirect to the admin dashboard upon login.

8. Admin Dashboard

Accessible only if admin is logged in.

Display a form to add new products with fields for name, description, price, and image URL.

Show a list of existing products with a delete button for each.

When a product is added, it should immediately appear in both the dashboard and main catalog.

When a product is deleted, it should be removed from both views.

9. Set Up Routing

Configure routes to switch between:

Home (product list)

Admin login

Admin dashboard

Add navigation links for easy access to each route.

10. Navbar and UI Enhancements

Add a Bootstrap navbar with links to Home and Admin Login.

Show a "Logout" button when the admin is logged in.

Maintain consistent UI and ensure the layout is responsive across devices.

11. Run the Angular Development Server

Open terminal and navigate to the project directory.

Run the development server using Angular CLI.
