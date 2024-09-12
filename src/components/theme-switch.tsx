"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DarkModeToggle
      onChange={toggleTheme}
      checked={theme === "dark"}
      size={50}
    />
  );
}
