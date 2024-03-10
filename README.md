<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://e7.pngegg.com/pngimages/748/441/png-clipart-logo-pharmacy-pills-miscellaneous-trademark.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Pharmacy Management System Backend API</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

In this projects a owner, managers and cashiers can visit the website for making the business more efficiently. They can check all the medicines, cashiers and managers. Also this API works on role based authentication, so each user have their user pevileges.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Node.js
- Express.js
- Sequelize
- Nodemon
- JSON Web Token

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Software And Tools Required

- Git
- SQLite

### Modules

- User Register & Login Module
- Medication Module
- Customer Module

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install the dependencies
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### API Module Endpoints

### Register & Login Module

- `POST /api/user/register` : Register a new user
- `POST /api/user/login` : Login a user

### User Module

- `GET /api/user/getAllUsers` : Get all Users
- `GET /api/user/getAUser/id` : Get a User
- `PUT /api/user/updateAUser/id` : Update a User
- `DELETE /api/user/deleteAUser/id` : Delete a User

### Medications Module

- `POST /api/medication/create-medication` : Add a new Medication
- `GET /api/medication/get-all-medications` : Get all Medicines
- `GET /api/medication/get-a-medication/id` : Get a Medication
- `PUT /api/medication/update-medication/id` : Update a Medication
- `PUT /api/medication/soft-delete-medication/id` : Soft Delete a Medication
- `DELETE /api/medication/delete-medication/id` : Permanantly Delete a Medication

### Customer Module

- `POST /api/customer/create-customer` : Add a new Customer
- `GET /api/customer/get-all-customers` : Get all Customers
- `GET /api/customer/get-a-customer/id` : Get a Customer
- `PUT /api/customer/update-customer/id` : Update a Customer
- `PUT /api/customer/soft-delete-customer/id` : Soft Delete a Customer
- `DELETE /api/customer/delete-customer/id` : Permanantly Delete a Customer

<!-- CONTACT -->

## Contact

Chathura Madhava - [@https://www.linkedin.com/in/chathura-madhava-126465191/](https://www.linkedin.com/in/chathura-madhava-126465191/)

Project Link: [https://github.com/P-A-Chathura-Madhava/pharmacy-management-backend.git](https://github.com/P-A-Chathura-Madhava/pharmacy-management-backend.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
