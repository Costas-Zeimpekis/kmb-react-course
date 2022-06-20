import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Count from "./Count";

function About() {
  const refCount = useRef(0);
  const refParagraph = useRef();
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const value = useMemo(() => {
    let i;
    for (i = 0; i <= 10000000; i++) {}

    return count + i;
  }, [count]);

  function handleRefClick() {
    refCount.current++;
  }

  return (
    <div>
      <h1 ref={refParagraph}> About</h1>
      <Count />
      <button
        onClick={() => {
          // Computing
          // Fetching
          navigate("/");
        }}
      >
        Go Home
      </button>
      <p>Value: {value}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Add Count
      </button>
      <button onClick={handleRefClick}>Add Ref</button>
      <p>{refCount.current}</p>
      {console.log(refParagraph.current)}
    </div>
  );
}

export default About;
