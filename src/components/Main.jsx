import { Routes, Route } from "react-router-dom";
import About from "./About";
import UserForm from "./UserForm";

function Main({ description }) {
  return (
    <main>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default Main;
