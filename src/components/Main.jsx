import Count from "./Count";
import UserForm from "./UserForm";

function Main({ description }) {
  return (
    <main>
      <p>{description}</p>
      <Count />
      <UserForm />
    </main>
  );
}

export default Main;
