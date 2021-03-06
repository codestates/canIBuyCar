import MainPage from "./pages/Main";
import LandingPage from "./pages/Landing";
import BrandPage from "./pages/Brand";
import CarPage from "./pages/Car";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupComplete from "./components/SignupComplete";
import Mypage from "./pages/Mypage";
import Board from "./pages/Board";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isComplete, setIsComplete] = useState(false);
  const signupComplete = () => {
    setIsComplete(true);
  };

  const signupClear = () => {
    setIsComplete(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/brand/:selected">
          <BrandPage />
        </Route>
        <Route path="/car/:carId">
          <CarPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          {isComplete ? (
            <SignupComplete signupClear={signupClear} />
          ) : (
            <Signup signupComplete={signupComplete} />
          )}
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
