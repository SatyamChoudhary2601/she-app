import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainBody from "./components/MainBody";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Video from "./components/Video";
import Message from "./components/Message";
// import CardFlip from "./components/Card/CardFlip";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Welcome} />
        <Route path="/swipe" component={MainBody} />
        <Route path="/video" component={Video} />
        <Route path="/message" component={Message} />
      </Router>
    </div>
  );
}

export default App;
