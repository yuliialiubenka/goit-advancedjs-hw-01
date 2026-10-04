# Advanced JavaScript Homework 1

Multi-page vanilla JavaScript homework project with an image gallery and a feedback form.

## Project structure

```text
src/
├── css/
│   ├── base.css
│   ├── form.css
│   ├── gallery.css
│   ├── home.css
│   ├── reset.css
│   └── styles.css
├── js/
    ├── 1-gallery.js
    └── 2-form.js
├── 1-gallery.html
├── 2-form.html
└── index.html
```

## What it does

### Image gallery

- Renders nine gallery cards from the `images` array.
- Builds the gallery markup dynamically in JavaScript.
- Uses [SimpleLightbox](https://simplelightbox.js.org/) installed through npm.
- Opens the full-size image when a gallery link is clicked.
- Displays image descriptions from the `alt` attribute below the lightbox image.
- Shows captions after a 250 ms delay.
- Provides keyboard navigation and the default lightbox controls without custom gallery click handlers.

### Feedback form

- Stores `email` and `message` in `localStorage` under `feedback-form-state`.
- Saves trimmed field values on every `input` event.
- Restores saved values after a page reload.
- Validates that both fields are filled and that the email has a valid format.
- Highlights invalid fields and displays field-level error messages.
- Shows `Fill please all fields` in a modal when the form is incomplete.
- Logs the completed `formData` object to the console on successful submission.
- Clears the form state from `localStorage` after successful submission.

## Getting started

Make sure that [Node.js](https://nodejs.org/) is installed, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The available pages are:

- `/` - home page;
- `/1-gallery.html` - image gallery;
- `/2-form.html` - feedback form.

## Available commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server.        |
| `npm run build`   | Create a production build in `dist`. |
| `npm run preview` | Preview the production build.        |

## Check

Open `1-gallery.html` and click any image to test the lightbox. Open `2-form.html`, enter form data, reload the page,
and verify that the values are restored. Submit an incomplete form to see the validation modal, or submit both valid
fields to see the object in the browser console and clear the saved state.
