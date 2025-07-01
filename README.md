# **📝 ToDo App — Express, Node.js, MongoDB (Mongoose)**
A simple and functional ToDo List application built using Node.js, Express.js, and MongoDB (via Mongoose). This backend-powered app allows users to create, read, update, and delete tasks efficiently using RESTful APIs.
### **Features**
- ✅ Add new ToDo items

- 📋 Get all ToDos

- 🔍 Get ToDo by ID

- ✏️ Update ToDo by ID

- ❌ Delete ToDo by ID

- 🌐 Built with Express.js and Mongoose

- 🗄️ MongoDB for data storage

📦 Environment variable management via dotenv
### 🧑‍💻 Tech Stack
- **Backend: Node.js, Express.js**

- **Database: MongoDB (Mongoose ODM)**

- **Tools: Nodemon, Dotenv, Postman (for testing)**
### 📂 Folder Structure
```
📦 todo-app/
├── models/
│   └── Todo.js         // Mongoose schema
├── routes/
│   └── todoRoutes.js   // API route handlers
├── database.js         // MongoDB connection logic
├── index.js            // Main entry point
├── .env                // Environment variables
├── package.json
└── README.md
```
### 📦 Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```
2. Install dependencies
```bash
npm install
```
3. Set up environment variables
Create a .env file in the root:
```
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/todoapp
```
4. Run the app
```bash
nodemon index.js
```
### 🔌 API Endpoints
```
| Method   | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/todos`     | Get all todos     |
| `GET`    | `/todos/:id` | Get todo by ID    |
| `POST`   | `/todos`     | Create new todo   |
| `PUT`    | `/todos/:id` | Update todo by ID |
| `DELETE` | `/todos/:id` | Delete todo by ID |
```
### 🧠 Learning Purpose
This project is ideal for:
- Beginners learning **Node.js & Express**
- Understanding RESTful API design
- Practicing **Mongoose** schema and queries
- Learning backend + database integration
### 🙌 Contributing
Pull requests are welcome! If you have ideas or improvements, feel free to contribute.
### 📃 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute it.
