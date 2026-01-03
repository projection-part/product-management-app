# Product Management Application

A responsive Product Management application built using **React + Vite**.  
This application allows users to view, search, add, edit, and paginate products using **in-memory state only**, with no backend integration.

---
### Navigate to the project folder
```
cd product-management-app
```
Install dependencies
```
npm install
```
Run the development server
```
npm run dev
```
Open in browser
```
http://localhost:5173
```

## Live Demo
**Deployed Link:** https://product-management-app-two-beta.vercel.app/ 
 

---

## Features

### Product Display
- Display products in **Table (List) View**
- Display products in **Card (Grid) View**
- Toggle between List and Card views

### Search Functionality
- Real-time product search by name
- **500ms debounce** implemented for optimized performance

### Add & Edit Product
- Add new products using a form
- Edit existing products
- Form fields:
  - Name (required)
  - Price (required, number)
  - Category (required)
  - Stock (number)
  - Description (optional)
- Basic validation with error messages
- Data stored **in memory only** (no backend)

### Pagination
- Pagination for product listing
- Dynamic page count based on filtered data

### UI & Responsiveness
- Clean, HR-friendly professional UI
- Fully responsive (Desktop, Tablet, Mobile)
- No external UI libraries used

---

## Tech Stack
- **React**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

---
