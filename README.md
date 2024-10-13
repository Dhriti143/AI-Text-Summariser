# AI Text Summarizer

An AI-based application that summarizes text using the Hugging Face API and a user-friendly web interface. This project utilizes modern web technologies, including HTML, CSS, JavaScript for the frontend, and Node.js with Express for the backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- User-friendly interface for inputting text.
- AI-powered text summarization using Hugging Face's BART model.
- Responsive design for desktop and mobile devices.
- Easy to use with just a few clicks.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js
  - Hugging Face API

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-text-summarizer.git
   cd ai-text-summarizer
   ```
2. **Set up environment variables:** Create a `.env` file in the root of the project and add your Hugging Face API token:
   ```
   ACCESS_TOKEN=your_api_key_here
   ```
3. **Start the server:**
```
node index.js
```
4. Open your browser and visit:
```
http://localhost:3000
```


## Usage
1. Open the application in your web browser.
2. Paste the text you want to summarize into the input text area.
3. Click the "Summarize" button.
4. The summarized text will appear in the summary text area.
