# YouTube Transcript Summarizer Chrome Extension

## Overview
This Chrome extension scrapes the YouTube video link, fetches the transcript using the **YouTube Transcript API**, and generates a summary using **spaCy** for natural language processing. Users can also select the **shrinkage percentage** to control the length of the summary. The summary is displayed directly in the extension.

---

## Features
- **Scrape YouTube Video Link**: Extracts the video ID from the YouTube URL.
- **Fetch Transcript**: Uses the **YouTube Transcript API** to retrieve the video transcript.
- **Generate Summary**: Summarizes the transcript using **spaCy** and **text ranking algorithms**.
- **Customizable Shrinkage**: Users can select the shrinkage percentage (e.g., 10%, 20%, etc.) to control the summary length.
- **Display Summary**: The summary is displayed directly in the extension's popup.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript (for Chrome extension UI).
- **Backend**: Python (Django for handling requests and processing).
- **APIs**:
  - **YouTube Transcript API**: Fetches the video transcript.
- **Libraries**:
  - **spaCy**: For natural language processing and text summarization.
  - **heapq**: For extracting top sentences based on scores.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/YouTube-Transcript-Summarizer.git
