# 📋DAY 4 TASK: "Todo Manager" App with Performance Optimization

## 🎯Objective:
Build an optimized **Todo Manager** App to practice:

• useReducer

• useRef

• useMemo

• useCallback

• Custom Hooks

## 🔥Requirements
### 1. Todo Management (useReducer):
• Use useReducer to manage a list of todos.

• Each todo should have:

o ID

o Title

o Completed status (true/false)

• Actions:

o ADD a new todo

o TOGGLE a todo’s completion

o REMOVE a todo

### 2. Auto Focus Input (useRef):
• Use useRef to automatically focus on the todo input field when the app loads.

• Also, use useRef to reset/clear the input field after adding a todo.

### 3. Optimizing Todo List (useMemo):
• Use useMemo to optimize rendering:

• Memoize the filtered list of todos (e.g., Completed / Pending).

### 4. Prevent Unnecessary Re-renders (useCallback):
• Use useCallback for:

• Adding a todo

• Toggling a todo

• Deleting a todo

### 5. Custom Hook:
• Create a custom hook called useTodos that manages all todo-related logic.

• Handles reducer, adding, toggling, removing todos.

## 🎁Bonus Features (Optional)
• Add a Filter: "All", "Completed", "Pending".

• Show a count of completed and pending todos.

• Save todos to localStorage and load them back on app start.

## 🖼 UI Layout Sketch:

✏️Add Todo Section
```
[ Enter new todo here.... ] [Add Todo Button]

📋Todo List Section

📝Todo 1 [Toggle Complete] [Delete]

✅Todo 2 (completed) [Toggle Incomplete] [Delete]

📝Todo 3 [Toggle Complete] [Delete]

🎯Filter Buttons

[ Show All ] [ Show Completed ] [ Show Pending ]
```

## 📊Todo Statistics:

Total Todos: 5

Completed: 2

Pending: 3

## 🧠Behaviour Flow:

• Input auto-focused on page load.

• Typing in the input and pressing "Add Todo" adds a new todo.

• List updates reactively (optimized using useMemo).

• useCallback ensures handlers don’t re-render unnecessarily.

• Custom Hook (useTodos) keeps the App component clean and focused.

```
Add Todo Input + Button

Todo List Items

Todo 1 [Toggle] [Delete]

Todo 2 [Toggle] [Delete]

| Filter Buttons |

[All] [Completed] [Pending]

Todo Count (Stats)

Total: 5| Completed: 2 | Pending: 3
```