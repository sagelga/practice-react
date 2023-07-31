# practice-react

> Created using
>
ChatGPT : [https://chat.openai.com/c/ec168126-7ac1-4dd6-8bfe-45a5bcd5c4e5](https://chat.openai.com/c/ec168126-7ac1-4dd6-8bfe-45a5bcd5c4e5)

Sure, let's merge each programming challenge, providing a description, acceptance criteria, hints, and beginning
guidelines for each:

## Challenge 1: User Input Form

**Description:**
Create a simple user input form that takes the user's name and age. When the user clicks the "Submit" button, display
their entered name and age on the screen.

**Acceptance Criteria:**

1. There should be a form with input fields for the user's name and age.
2. When the user enters their name and age and clicks the "Submit" button:
    - The form should display the user's name and age on the screen.
    - The input fields should be cleared for the next input.

**Hints:**

- Use `useState` to create state variables to store the user's name and age.
- Create an event handler function to update the state variables when the user enters their name and age.
- Bind the event handler function to the form's input fields using the `onChange` event.
- Create a "Submit" button that, when clicked, displays the user's name and age on the screen and resets the input
  fields.

**Guidelines:**

1. Set up the basic structure of the component with the form, input fields, and "Submit" button.
2. Use `useState` to create two state variables, one for the name and one for the age.
3. Create an event handler function, e.g., `handleInputChange`, to update the state variables based on the input
   changes.
4. Bind the `handleInputChange` function to the `onChange` event of the input fields.
5. Implement a function to handle the form submission, e.g., `handleSubmit`, that displays the user's name and age on
   the screen.

## Challenge 2: To-Do List

**Description:**
Build a simple "To-Do List" where the user can add and remove tasks. Users should be able to enter a task in an input
field, click the "Add" button to add it to the list, and click a "Remove" button to delete a task.

**Acceptance Criteria:**

1. Display an empty "To-Do List" on the screen initially.
2. There should be an input field and an "Add" button to add tasks to the list.
3. When the user enters a task in the input field and clicks the "Add" button:
    - The task should be added to the "To-Do List."
    - The input field should be cleared for the next task.
4. Each task in the list should have a "Remove" button next to it.
5. When the user clicks the "Remove" button for a task:
    - The task should be removed from the list.

**Hints:**

- Use `useState` to manage the list of tasks.
- Create an event handler function to add tasks to the list when the user clicks the "Add" button.
- Implement a function to remove tasks from the list when the user clicks the "Remove" button.

**Guidelines:**

1. Set up the basic structure of the component with an empty list and the input field for task input.
2. Use `useState` to create a state variable, e.g., `tasks`, to store the list of tasks.
3. Create an event handler function, e.g., `handleAddTask`, to add a new task to the `tasks` state.
4. Bind the `handleAddTask` function to the "Add" button's `onClick` event.
5. Map through the `tasks` state to display each task along with a "Remove" button.
6. Implement a function, e.g., `handleRemoveTask`, to remove a task from the `tasks` state when the user clicks the "
   Remove" button.

## Challenge 3: Dark Mode

**Description:**
Implement a "Dark Mode" feature in your application using React's `useState` and `useEffect` Hooks. When the user clicks
a "Dark Mode" button, toggle the application's theme between light and dark mode.

**Acceptance Criteria:**

1. There should be a button labeled "Dark Mode" on the screen.
2. When the user clicks the "Dark Mode" button for the first time:
    - The application's theme should switch to a dark mode (e.g., background color becomes dark).
    - The button label should change to "Light Mode."
3. When the user clicks the "Dark Mode" button again (while in dark mode):
    - The application's theme should switch back to the light mode.
    - The button label should change back to "Dark Mode."

**Hints:**

- Use `useState` to manage the theme state, which determines whether the dark mode is active or not.
- Use `useEffect` to apply the theme changes to the entire application when the theme state changes.

**Guidelines:**

1. Set up the basic structure of the component with a state variable, e.g., `isDarkMode`, and a "Dark Mode" button.
2. Use `useState` to create the `isDarkMode` state variable and set it to `false` initially.
3. Implement an event handler function, e.g., `toggleDarkMode`, to toggle the `isDarkMode` state between `true`
   and `false`.
4. Bind the `toggleDarkMode` function to the "Dark Mode" button's `onClick` event.
5. Use `useEffect` to apply the appropriate styles or class changes to the application based on the `isDarkMode` state.
6. Create a CSS class for the dark mode styles, e.g., .dark-mode, and specify the desired dark mode styles like a dark
   background color and lighter text color.
7. In the component's useEffect hook, add an event listener for changes to the isDarkMode state variable. Whenever the
   isDarkMode state changes, the useEffect hook will execute the function to apply the appropriate styles.
8. Inside the useEffect hook, check the value of the isDarkMode state. If it's true, add the .dark-mode class to the
   root
   element or body of your application. Otherwise, remove the .dark-mode class if it exists.
9. Additionally, within the same useEffect, after applying the styles, save the isDarkMode variable to localStorage
   using
   the localStorage.setItem() method. You can do this by passing the isDarkMode state as a dependency to the useEffect
   hook
   so that it runs whenever isDarkMode changes.

During the component's initialization (i.e., when it mounts), use the localStorage.getItem() method to retrieve the
isDarkMode variable from localStorage and set it as the initial value for the isDarkMode state using useState.

## Challenge 4: Countdown Timer

**Description:**
Create a simple countdown timer in React using the `useState` and `useRef` Hooks. The timer should start when the user
clicks a "Start" button and stop when they click a "Stop" button.

**Acceptance Criteria:**

1. There should be a "Start" button and a "Stop" button on the screen.
2. When the user clicks the "Start" button:
    - The timer should start counting down from a predefined value (e.g., 60 seconds).
    - The remaining time should be displayed on the screen, updating every second.
3. When the user clicks the "Stop" button:
    - The timer should stop counting down and display the time at which it was stopped.

**Hints:**

- Use `useState` to manage the remaining time in the timer.
- Use `useRef` to store the interval ID returned by `setInterval` so you can clear it later.

**Guidelines:**

1. Set up the basic structure of the component with a state variable, e.g., `remainingTime`, and "Start" and "Stop"
   buttons.
2. Use `useState` to create the `remainingTime` state variable and set it to the initial countdown time (e.g., 60
   seconds).
3. Create an event handler function, e.g., `startTimer`, to start the countdown by using `setInterval`.
4. Use `useRef` to create a reference to the interval ID returned by `setInterval` inside the `startTimer` function.
5. Create another event handler function, e.g., `stopTimer`, to stop the countdown by using `clearInterval` with the
   interval ID from the `useRef`.
6. Bind the `startTimer` function to the "Start" button's `onClick` event and the `stopTimer` function to the "Stop"
   button

## Challenge 5: Quiz Application

**Description:**
Build a small quiz application where the user can select answers to questions, and their score is calculated based on
correct answers.

**Acceptance Criteria:**

There should be a list of multiple-choice questions displayed on the screen, along with their possible answers.
The user should be able to select one answer for each question.
When the user selects an answer:
The selected answer should be highlighted or visually indicated.
The user should not be able to change their answer once it is selected.
After answering all questions, the user should click the "Submit" button.
The application should calculate the score by checking the correct answers.
The user's score should be displayed on the screen along with appropriate feedback (e.g., "You scored 4 out of 5").

**Hints:**

* Use useState to manage the user's selected answers and the quiz score.
* Use an array of objects to store the questions, their possible answers, and the correct answer.
* Use map to render the list of questions and their answer options.

**Guidelines:**

1. Set up the basic structure of the component with state variables for the user's selected answers and the quiz score.
2. Create an array of objects, each representing a question with its possible answers and the correct answer.
3. Use useState to create a state variable, e.g., userAnswers, to store the user's selected answers (initialize it with
   an
4. empty array).
5. Use useState to create a state variable, e.g., score, to store the user's quiz score (initialize it to 0).
6. Render the list of questions and their answer options using map.
7. Create an event handler function, e.g., handleAnswerSelect, to update the userAnswers state when the user selects an
8. answer.
9. Bind the handleAnswerSelect function to the onClick event of the answer options.
10. Implement a function, e.g., calculateScore, to calculate the user's score based on their selected answers and the
11. correct answers.
12. Display the user's score and appropriate feedback after they click the "Submit" button.

## Challenge 6: React Fragment

**Description:**
In this challenge, you will learn how to use React Fragments to group multiple elements without adding extra nodes to
the DOM. Fragments allow you to return multiple elements from a component without wrapping them in a single parent
element.

**Acceptance Criteria:**

1. Create a functional component that renders a list of items using React Fragments.
2. The list should consist of multiple items, and each item should contain a name and a description.
3. Use React Fragments to group each list item without adding additional parent elements to the DOM.

**Hints:**

Use React Fragments (<>...</>, <React.Fragment>...</React.Fragment>, or Fragment import from 'react') to group elements
without creating additional nodes in the DOM.

**Guidelines:**

1. Set up the basic structure of the component.
2. Create an array of objects, each representing an item with a name and description.
3. Render the list of items using map.
4. For each item, use a React Fragment to group the name and description elements without adding a wrapping parent
   element.

### Challenge 7: Simple TODO List using `useState`

**Description:**
Create a simple TODO list application where users can add tasks, mark tasks as completed, and remove tasks from the
list.

**Acceptance Criteria:**

1. The user can add a task to the list.
2. Each task has a checkbox to mark it as completed.
3. Completed tasks should be visually distinct from uncompleted tasks.
4. The user can remove a task from the list.
5. The UI is responsive and visually appealing.

**Guidelines:**

1. Start by setting up a new React app using `create-react-app` or your preferred method.
2. Use the `useState` hook to manage the list of tasks and their completion status.
3. Create functions to handle adding, marking, and removing tasks.
4. Build the UI with a form to add new tasks and a list to display existing tasks.
5. Apply CSS styling to make the TODO list visually appealing.

**CSS Styling:**

```css
/* For the list item */
.todo-item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* For the completed tasks */
.todo-item.completed {
    text-decoration: line-through;
    opacity: 0.7;
}

/* For the task input form */
.todo-form {
    margin-bottom: 16px;
}

/* For the add button */
.add-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* For the checkbox */
.checkbox {
    margin-right: 8px;
}
```

## Challenge 8: Modal Component using React Fragments

**Description:**
Build a modal component that displays additional information when a button is clicked. The modal should disappear when
closed.

**Acceptance Criteria:**

1. The modal is hidden by default and appears when the button is clicked.
2. Clicking outside the modal or on a close button should hide the modal.
3. The modal should be visually appealing and centered on the screen.
4. The content of the modal should be customizable.

**Guidelines:**

1. Create a new React component to represent the modal.
2. Use React Fragments to wrap the modal content without adding extra DOM elements.
3. Add state and functions to manage the visibility of the modal.
4. Style the modal using CSS to achieve a visually pleasing appearance.

**CSS Styling:**

```css
/* For the modal overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* For the modal content */
.modal-content {
    max-width: 400px;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* For the close button */
.close-button {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
}
```

## Challenge 9: Shopping Cart using `useReducer`

**Description:**
Create a shopping cart using the `useReducer` hook to manage the state. Users can add items, remove items, and update
quantities.

In this system, a well-designed and user-friendly display page will be provided, showcasing a variety of available
stocks. Each item will be presented with its name (title), a detailed description, and its price for easy reference.

To initiate the shopping process, the user will have the option to interact with an input bar, where they can manually
type in the desired quantity of the item they wish to purchase. Alternatively, the user can conveniently use the '+'
and '-' buttons to increment or decrement the quantity, respectively. However, to proceed with the purchase, the minimum
allowed quantity must be set to 1; this ensures that users cannot add an item with zero or negative quantities to their
shopping cart.

The shopping cart functionality will be easily accessible through a dedicated cart button in the navigation bar. Upon
clicking this button, a modal will appear, providing a clear overview of the items currently added to the cart. Users
will have the ability to adjust the quantity of each item in the cart, granting them the flexibility to make changes
according to their preferences.

As the user modifies the quantity of each item, the system will automatically calculate the subtotal for each product by
multiplying the quantity in the cart by the respective item's price. Furthermore, the system will effortlessly tally up
the grand total by summing the subtotals of all the items present in the cart. This feature ensures that users can
easily keep track of their expenses and make informed decisions while shopping.

**Acceptance Criteria:**

1. Users can add items to the cart with a specified quantity.
2. Users can remove items from the cart.
3. Users can update the quantity of items in the cart.
4. The cart displays the total number of items and the total price.
5. The UI is visually pleasing and responsive.

**Guidelines:**

1. Set up a new React app and define the necessary data structure for the cart items.
2. Use the `useReducer` hook to manage the state of the cart.
3. Implement functions to handle adding, removing, and updating items in the cart.
4. Display the cart items and provide controls for users to interact with the cart.
5. Apply CSS styling to make the shopping cart visually appealing.

**CSS Styling:**

```css
/* For the cart item */
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* For the quantity input */
.quantity-input {
    width: 40px;
    text-align: center;
    margin-right: 8px;
}

/* For the remove button */
.remove-button {
    padding: 4px 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

## Challenge 10: Language Switcher using `useContext`

**Description:**
Create a language switcher using `useContext` to allow users to switch between different languages.

**Acceptance Criteria:**

1. The application displays content in the default language initially.
2. The user can switch between languages using a language switcher component.
3. The context provides the selected language to child components.
4. Different components display content based on the selected language.

**Guidelines:**

1. Define a new context to hold the selected language.
2. Create a language switcher component that dispatches the selected language to the context.
3. Implement different components that consume the language context and display content accordingly.
4. Add a default language for the application to display when no language is selected.
5. Style the language switcher and components to make the UI visually appealing.

**CSS Styling:**

```css
/* For the language switcher container */
.language-switcher {
    display: flex;
    justify-content: space-between;
    padding: 8px;
}

/* For the language switcher button */
.language-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
```

## Challenge 11: Form with Validation using `useRef`

**Description:**
Build a form with validation using `useRef` to handle user input and display error messages for empty fields.

**Acceptance Criteria:**

1. The form should have input fields for name, email, and password.
2. The form should display an error message when the user clicks the submit button with empty fields.
3. The error message should disappear when the user enters valid input.
4. The form should be visually pleasing and responsive.

**Guidelines:**

1. Set up a new React app and create a form with input fields for name, email, and password.
2. Use `useRef` to manage references to the input elements and handle user input.
3. Implement functions to validate the form data and display error messages.
4. Style the form and error messages to make the UI visually appealing.

**CSS Styling:**

```css
/* For the form container */
.form-container {
    max-width: 400px;
    padding: 16px;
    margin: auto;
}

/* For the form input fields */
.form-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

/* For the error message */
.error-message {
    color: red;
    font-size: 14px;
}
```

Feel free to combine these guidelines with the provided acceptance criteria, hints, and descriptions to tackle each
challenge one by one. Have fun with the projects, and happy coding!
