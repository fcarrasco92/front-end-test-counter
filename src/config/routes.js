import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Counter from "../components/Counter/Counter";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
    </Switch>
  );
};

export default Routes;
