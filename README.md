# 🖥️ Roya OS: A Retro Portfolio Experience

A bespoke, Windows 98-inspired digital environment built to showcase my software engineering journey. This project reimagines a traditional portfolio as a fully functional, interactive operating system in the browser.

---

## 🚀 Features

- **Window Management System**: Custom-built hook-based window manager handling focus, minimization, maximization, and z-index layering.
- **Interactive Desktop**: Draggable icons and windows with persistence logic and pixel-art aesthetics.
- **Retro UI Components**: Authentically styled Win98 buttons, title bars, and "outset/inset" borders using Tailwind CSS.
- **Responsive Start Menu**: A centered navigation hub featuring custom retro 45-degree arrow icons and a playful "Shutdown" sequence.
- **Live Apps**:
  - **Paint**: Integration of a retro drawing tool via iframe with custom loading states to prevent "crushed" layouts.
  - **Notepad**: Markdown-based text viewer for "About Me" and "Resume" data.
  - **Taskbar**: Real-time clock and active window tracking with unique emoji identification.

---

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS (Custom retro utility classes)
- **Icons**: Lucide React + Custom SVG paths for brand icons
- **State Management**: Custom React Hooks for window and desktop state management

---

## 📂 Project Structure

```text
src/
├── assets/           # cv pdf file
├── components/       # UI Components
│   ├── content/      # App-specific modals (Paint, About, Projects)
│   ├── desktop/      # Taskbar, StartMenu, DraggableIcons
│   └── visuals/      # CRT effects and background layers
├── constants/        # Social links and window configurations
├── content/          # Static text 
├── hooks/            # useWindowManager (The "Kernel" of the OS) and more
├── shared/           # Reusable UI primitives (ContentModal)
└── types/            # TypeScript interfaces and type definitions
```

---

## ⌨️ Development

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/Roya9022/roya-profile.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 📜 Personal Note

This project was built to bridge the gap between my love for retro aesthetics and modern web development practices. It demonstrates my ability to handle complex UI states, responsive design, and creative problem-solving.

"Hi, I'm Roya! I built this space to show what I've been working on. Feel free to explore—just don't break anything! :)"

---

## 🤝 Contact

- **GitHub**: [@Roya9022](https://github.com/Roya9022)
- **LinkedIn**: [linkedin.com/in/roya-azemi](https://linkedin.com/in/roya-azemi)
- **Email**: azemiroya@gmail.com
