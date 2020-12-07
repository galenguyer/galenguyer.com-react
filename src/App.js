import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App(prps) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <h1>Homepage</h1>
                </Route>
                <Route>
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </div>
    );
}
