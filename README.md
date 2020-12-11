# CigarShop

Kaliman Caribe Ltd. is an exclusive distributor of the prestigious brand of hand made Habanos cigars within Bulgaria.
This is my remake of their website using Angular and a Node.js REST API. You can create an account, look at products, add them to your cart or wishlist or you could read the blog!

[Link to the official website](https://kalimancaribe.com/bg/)

## 1. How is it built
* [The back-end](./server) portion uses **Express**, **mongoose**, **bcrypt** for password hashing, **jsonwebtoken (JWT)** for encoding user data stored in cookies and **MongoDB** for storage.
* [The front-end](./src) portion uses **Angular**.

## 2. Functionality
* Unauthenticated users are allowed to read the blog and look at products without being able to buy them or add them to the wishlist.
* Authorized users can add products to the cart or the wishlist.

## 3. Setup
### REST-API

* Run **npm install** (make sure you install the dev dependencies as well)
* Create a **_.env_** file which contains the following variables:

    | Variable             | Value                |
    |----------------------|----------------------|
    | DB_URL               | Database URL         |
    | SECRET               | CookieParser secret  |
    | JWT_KEY              | JWT secret key       |
    | PORT                 | Port for REST API    |
    | APP_URL              | React App URL        |

* Run **node(mon) -r dotenv/config index.js**

### Angular application

* After cloning the repo, run **`npm install`**
* Run **`ng serve`**

#### The app runs on **`localhost:4200`**

## 4. Routes

| Route               | Description                                            |
| ------------------- | ------------------------------------------------------ |
| /                   | Home page                                              |
| /login              | Login page                                             |
| /register           | Register page                                          |
| /profile            | User's profile page which also contains the settings   |
| /wishlist           | Wishlist page                                          |
| /cart               | Cart page                                              |
| /blog               | All blog posts                                         |
| /blog/details/(id)  | Blog post page                                         |
| /cigars?type=/type/ | Cigar pages containing different types of cigars       |
| /product/(id)       | Product details page                                   |
| /about-us           | About us page                                          |
| /brands             | Page containing the logos of all brands                |
| /contacts           | Contacts page                                          |
| /newsletter         | Page containing links to every year's newsletter       |
| any other route     | Error Page                                             |