import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Footer() {
  const themes = useContext(ThemeContext);
  return (
    <footer>
      <button style={{ background: themes.background }}>
        Add Social Media
      </button>
    </footer>
  );
}
