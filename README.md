# Command Menu Component

This repository contains a React component for a command menu, similar to the command palette found in many modern applications. The component is built using React, Framer Motion for animations, and React Icons for iconography.
Its a work in progress. 

## Features

- Keyboard-driven command menu
- Search functionality
- Animated transitions
- Keyboard navigation (arrow keys and tab)
- Action execution on command selection

## Component Structure

The main component is `CMenu`, located in `app/components/CMenu.tsx`. It uses the following key technologies:

- React (with hooks)
- Framer Motion for animations
- React Icons for the search icon

## Usage

To use the CMenu component in your project:

1. Import the component:
   ```jsx
   import CMenu from './path/to/CMenu';
   ```

2. Add the component to your JSX:
   ```jsx
   <CMenu />
   ```

3. Ensure you have the necessary dependencies installed:
   - react
   - framer-motion
   - react-icons

## Customization

The component uses a `commands` array imported from `./commands`. You can customize the available commands by modifying this file.

## Keyboard Shortcuts

- `Ctrl+K` or `Cmd+K`: Toggle the command menu
- `Escape`: Close the command menu
- `ArrowUp` / `ArrowDown` or `Tab` / `Shift+Tab`: Navigate through commands
- `Enter`: Execute the selected command

## Styling

The component uses Tailwind CSS classes for styling. Customize the appearance by modifying these classes in the
