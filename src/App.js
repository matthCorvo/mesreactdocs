import './App.css';
import Main from './composants/Main.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import State from './composants/concepts/State/States';
import Forms from './composants/concepts/Forms/Forms';
import UseEffect from './composants/concepts/useEffect/UseEffect';
import Index from './composants/concepts/Box/Index';
import NavbarIndex from './composants/concepts/Navbar/NavbarIndex';
import CarouselIndex from './composants/concepts/Carousel/CarouselIndex';
import LoaderIndex from './composants/concepts/Loader/LoaderIndex';
import SetIntervalIndex from './composants/concepts/SetInterval/SetIntervalIndex';
import CustomHook from './composants/concepts/CustomHook/CustomHook';


function App() {
  return (
    <div className="App">
 <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
          <Route path="/1">
            <State/>
          </Route>
          <Route path="/2">
            <Forms />
          </Route>
          <Route path="/3">
            <UseEffect />
          </Route>
          <Route path="/4">
            <Index />
          </Route>
          <Route path="/5">
            <NavbarIndex />
          </Route>
          <Route path="/6">
            <CarouselIndex />
          </Route>
          <Route path="/7">
            <LoaderIndex />
          </Route>
          <Route path="/8">
            <SetIntervalIndex />
          </Route>
          <Route path="/9">
            <CustomHook />
          </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
