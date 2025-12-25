# Responsive To Do List Website

This is a simple and calm To Do List website built using **HTML, CSS, and vanilla JavaScript**.  
The main goal of this project is to create a comfortable user experience that adapts naturally to different devices, while keeping the code clean and easy to understand.

The design focuses on soft colors, a pixel-art background, and small joyful interactions when tasks are completed.

---

## What This Website Can Do

- Add new to do items
- Mark tasks as completed
- Remove tasks from the list
- Save tasks manually using a **Save** button
- Keep tasks even after the page is refreshed (using `localStorage`)
- Show a full-page **pink star confetti animation** when a task is checked

Everything is built without any external libraries.

---

## Responsive Design Philosophy

This website adapts based on the device being used:

- **On mobile phones**
  - The to do form becomes larger
  - Buttons and inputs are easier to tap
  - Layout feels more spacious and comfortable

- **On laptops and desktops**
  - The form becomes smaller and more focused
  - The pixel-art background remains visible
  - The interface feels clean and minimal

All responsiveness is handled purely with CSS using viewport units, `clamp()`, and media queries.

---

## Data Storage

Tasks are saved using the browser’s **localStorage**.

- Click **Save To Do List** to store your current tasks
- Completed status is saved as well
- Tasks are automatically restored when the page is reloaded
- `console.log` is used to show saved and loaded data for learning and debugging purposes

---

## Confetti Effect

When you complete a task:
- Pink star-shaped confetti appears across the entire screen
- The animation is lightweight and temporary
- It adds a small reward-like feeling without being distracting

This effect is created using simple CSS animations and JavaScript.

---

## Project Structure

```text
project/
│
├── index.html   # Main HTML file
├── style.css    # Styling and responsive layout
├── script.js    # Logic, localStorage, and animations
└── bg.png       # Pixel-art background image
