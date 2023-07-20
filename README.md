# practice-react

> Created using
>
ChatGPT : [https://chat.openai.com/c/ec168126-7ac1-4dd6-8bfe-45a5bcd5c4e5](https://chat.openai.com/c/ec168126-7ac1-4dd6-8bfe-45a5bcd5c4e5)

Sure, let's merge each programming challenge, providing a description, acceptance criteria, hints, and beginning
guidelines for each:

**Challenge 1: User Input Form**

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

**Beginning Guidelines:**

1. Set up the basic structure of the component with the form, input fields, and "Submit" button.
2. Use `useState` to create two state variables, one for the name and one for the age.
3. Create an event handler function, e.g., `handleInputChange`, to update the state variables based on the input
   changes.
4. Bind the `handleInputChange` function to the `onChange` event of the input fields.
5. Implement a function to handle the form submission, e.g., `handleSubmit`, that displays the user's name and age on
   the screen.

**Challenge 2: To-Do List**

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

**Beginning Guidelines:**

1. Set up the basic structure of the component with an empty list and the input field for task input.
2. Use `useState` to create a state variable, e.g., `tasks`, to store the list of tasks.
3. Create an event handler function, e.g., `handleAddTask`, to add a new task to the `tasks` state.
4. Bind the `handleAddTask` function to the "Add" button's `onClick` event.
5. Map through the `tasks` state to display each task along with a "Remove" button.
6. Implement a function, e.g., `handleRemoveTask`, to remove a task from the `tasks` state when the user clicks the "
   Remove" button.

**Challenge 3: Dark Mode**

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

**Beginning Guidelines:**

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

**Challenge 4: Countdown Timer**

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

**Beginning Guidelines:**

1. Set up the basic structure of the component with a state variable, e.g., `remainingTime`, and "Start" and "Stop"
   buttons.
2. Use `useState` to create the `remainingTime` state variable and set it to the initial countdown time (e.g., 60
   seconds).
3. Create an event handler function, e.g., `startTimer`, to start the countdown by using `setInterval`.
4. Use `useRef` to create a reference to the interval ID returned by `setInterval` inside the `startTimer` function.
5. Create another event handler function, e.g., `stopTimer`, to stop the countdown by using `clearInterval` with the
   interval ID from the `useRef`.
6. Bind the `startTimer` function to the "Start" button's `onClick` event and the `stopTimer` function to the "Stop"
   button's
   Challenge 5: Quiz Application

Description:
Build a small quiz application where the user can select answers to questions, and their score is calculated based on
correct answers.

Acceptance Criteria:

There should be a list of multiple-choice questions displayed on the screen, along with their possible answers.
The user should be able to select one answer for each question.
When the user selects an answer:
The selected answer should be highlighted or visually indicated.
The user should not be able to change their answer once it is selected.
After answering all questions, the user should click the "Submit" button.
The application should calculate the score by checking the correct answers.
The user's score should be displayed on the screen along with appropriate feedback (e.g., "You scored 4 out of 5").
Hints:

Use useState to manage the user's selected answers and the quiz score.
Use an array of objects to store the questions, their possible answers, and the correct answer.
Use map to render the list of questions and their answer options.
Beginning Guidelines:

Set up the basic structure of the component with state variables for the user's selected answers and the quiz score.
Create an array of objects, each representing a question with its possible answers and the correct answer.
Use useState to create a state variable, e.g., userAnswers, to store the user's selected answers (initialize it with an
empty array).
Use useState to create a state variable, e.g., score, to store the user's quiz score (initialize it to 0).
Render the list of questions and their answer options using map.
Create an event handler function, e.g., handleAnswerSelect, to update the userAnswers state when the user selects an
answer.
Bind the handleAnswerSelect function to the onClick event of the answer options.
Implement a function, e.g., calculateScore, to calculate the user's score based on their selected answers and the
correct answers.
Display the user's score and appropriate feedback after they click the "Submit" button.
Feel free to combine these guidelines with the provided acceptance criteria, hints, and descriptions to tackle each
challenge one by one. Happy coding!