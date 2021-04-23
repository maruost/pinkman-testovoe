import s from "./App.module.scss";
import WelcomeBoard from "../WelcomeBoard/WeclomeBoard";

function App() {
  return (
    <div className={s.app}>
      <WelcomeBoard />
    </div>
  );
}

export default App;
