import Count from "./Count";
import UserForm from "./UserForm";
import Clock from "./Clock";
import Car from "./Car";

function Main({ description }) {
  return (
    <main>
      <p>{description}</p>
      <Count />
      <UserForm />
      <Clock />
      <Car />
    </main>
  );
}

export default Main;
