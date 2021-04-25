import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import s from "./App.module.scss";
import WelcomeBoard from "../WelcomeBoard/WeclomeBoard";
import Questionary from "../Questionary/Questionary";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [isUserEntity, setisUserEntity] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
    history.push("/questionary");
  }, []);

  const handleUserType = (input) => {
    setisUserEntity(input);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className={s.app}>
      <Switch>
        <Route path="/questionary">
          {loggedIn ? (
            <WelcomeBoard>
              <Questionary
                onHandleUserType={handleUserType}
                isUserEntity={isUserEntity}
              />
            </WelcomeBoard>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <WelcomeBoard>
            <AuthPage handleLogin={handleLogin} />
          </WelcomeBoard>
        </Route>
        <Route>
          {loggedIn ? <Redirect to="/questionary" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
