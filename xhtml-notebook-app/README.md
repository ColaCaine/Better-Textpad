# XHTML Notebook Web Application

## Overview
This project is an XHTML notebook web application that allows users to create, format, and save notes. The application supports various text formatting options, including bold, italic, and highlighting, and it provides features for exporting notes in JSON format, autosaving, and utilizing browser cache for data backups.

## Features
- Create and edit notes with rich text formatting (bold, italic, highlight).
- Choose different fonts for note-taking.
- Autosave functionality to prevent data loss.
- Export notes as JSON files.
- Save notes to the web app and manage backups using browser cache.

## Project Structure
```
xhtml-notebook-app
├── src
│   ├── index.xhtml          # Main entry point of the web application
│   ├── scripts
│   │   └── main.js          # Main JavaScript logic for user interactions
│   ├── styles
│   │   └── main.css         # CSS styles for the application
│   ├── components
│   │   ├── editor.xhtml      # Note editor component
│   │   └── toolbar.xhtml     # Toolbar component for formatting options
│   └── utils
│       └── storage.js       # Utility functions for local storage management
├── public
│   └── manifest.json        # Web app manifest with metadata
├── package.json             # npm configuration file
└── README.md                # Documentation for the project
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.xhtml` in a web browser to run the application.

## Usage
- Use the editor to write your notes.
- Format your text using the toolbar options.
- Your notes will be autosaved periodically.
- You can export your notes as a JSON file for backup or sharing.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.