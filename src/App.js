import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rainbow from "./components/Rainbow";
import Home from "./pages/Home";

export default function App(prps) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
            <Footer />
            <Rainbow />
        </div>
    );
}
