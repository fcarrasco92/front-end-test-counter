import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Content from "../components/Content/Content";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/content" component={Content} />
    </Switch>
  );
};

export default Routes;
