import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> About</h1>
      <button
        onClick={() => {
          // Computing
          // Fetching
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default About;
