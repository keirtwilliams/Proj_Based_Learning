# 📝 Ligtask - Task Manager App

Ligtask is a simple React-based task manager that allows users to add and delete tasks. It was built as part of my project-based learning journey while studying `useState`, controlled components, conditional rendering, and event handling in React.

## 🚀 Features

- Add new tasks dynamically
- Delete individual tasks
- Basic input validation (ignores empty or whitespace-only inputs)

## 💡 What I Learned

While building this project, I practiced and understood:

- React `useState` for state management
- Controlled components using `onChange`
- Handling input events in React
- Dynamically rendering lists using `.map()`
- Using `.filter()` to remove items from an array
- Conditional rendering and simple validations
- Applying CSS styling to components

## 🛠 Tech Stack

- **React**
- **JavaScript (ES6+)**
- **CSS3**

## 🧠 How It Works

- When a user types in the input field, the state (`addNew`) updates in real time.
- Pressing the "Add" button triggers `handleAddTask`, which:
  - Validates the input.
  - Adds the new task to the `tasks` state.
  - Clears the input field.
- Each task in the list includes a "Delete" button that calls `handleDelTask`, removing it from the array.

## 📚 Resources Used

- [React Docs](https://reactjs.org/docs/getting-started.html)
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Personal notes & experimentation
- [Chatgpt](https://chatgpt.com/?model=auto)

## 👤 Author
- Keirt William Gemperle
- Front-End Developer in training
- Passionate about building real-world projects to reinforce technical skills.