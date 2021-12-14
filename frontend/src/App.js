import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import MainPage from "./components/pages/MainPage";
import Agendamento from "./components/pages/Agendamento";
import MainPagePsc from "./components/pages/MainPagePsc";
import Gerenciamento from "./components/pages/gerenciamento";
import GerenciamentoPsc from "./components/pages/gerenciamentoPsc";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/main" component={MainPage} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/main-psc" component={MainPagePsc} />
          <Route path="/agenda" component={Agendamento} />
          <Route path="/gerenciamento" component={Gerenciamento} />
          <Route path="/gerenciamento-psc" component={GerenciamentoPsc} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
