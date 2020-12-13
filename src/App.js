import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rainbow from "./components/Rainbow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

  export default function App(props) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
            <Rainbow />
        </div>
    );
}
