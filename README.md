# Productivity Dashboard App

### Description
The purpose of this project is to provide an application with different features to help improve daily productivity. It will include a weekly and monthly calendar, a journal for daily entries to express thoughts and finally a task manager feature that will be able to filter based off of the category or difficulty.

This project is intended for people have daily tasks that they want to keep up with, along with help if they want to manage tasks and keep track of them.

The reason I built this project was because I deal with tasks every day, whether it would be with work, studies or even daily tasks like working out or feeding my dog. People tend to have lots of things to do in their minds, so this app would help remove some of that thinking to allow the users to focus on their tasks at hand.

### Features
The following will be included to use once the user has logged in such as:

- Weekly calendar for upcoming tasks
- Monthly calendar for future tasks/holiday/important dates
- Task Manager which will allow the following:
    
    - Create new tasks
    - Filter out tasks based off either importance, category or date
    - Delete tasks
    - Edit existing tasks

- Journal where users can keep track of their thoughts in a daily basis. This would include a rate of how they day went out of 10, to express themselves more.
Some features would include title, date, day rating, and description.

- A profile page for the current user where he can see statistics such as tasks created, to journal entries. It will also include the email, username, and password (which will be shown w/*). The user will have the option to update any of the details to the account and will be updated automatically.

### Tech Stack
The stack I used for this project is the following:

- Frontend (Views & Client-side)
    
    - EJS: server-side view templates
    - Bootstrap: for responsive styling
    - Vanilla JavaScript: front-end interactivity

- Backend

    - Node.js: runtime environment
    - Express.js: server framework

- Database

    - MongoDB: NoSQL database
    - Mongoose: MongoDB object modeling

- Authentication & Security

    - jwt: for session/auth handling
    - bcryptjs: for hashing passwords

- Other

    - dotenv: to store environment variables (Mongo URI, JWT secret)

### Installation Instructions
1. Clone this repository: https://github.com/FHernandez08/productivity-dashboard-app.git

2. Navigate into the project directory: cd productivity-dashboard

3. Install dependencies: npm install

4. Create a .env file in the project root and add:

    - MONGO_URI=your_mongodb_connection_string
    - JWT_SECRET=your_jwt_secret

    ** Recommend: Use MongoDB Atlas and download the MongoDB extension on VS code to be able to see the database easier

5. Start the server: npm start

6. Open the browser and navigate to:

    - Local: http://localhost:3000
    - Deployed: (production URL - will add it once completed and deployed on render)

### Usage
- Register a new account or log in with an existing account.

- Once logged in, you can:

    - View the weekly overview on the main dashboard
    - Manage tasks (add, edit, delete)
    - View your monthly calendar
    - Write and manage journal entries
    - See a motivational quote of the day

- Use the navigation bar to move between pages
- Log out securely with the logout button

### Wireframes
** This section will be added once the wireframes are fully completed**

### Future Improvements
** This section will be updated once project is completed**