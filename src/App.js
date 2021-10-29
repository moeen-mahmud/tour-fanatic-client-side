import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import UserPackages from "./Pages/UserPackages/UserPackages";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/place-order/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/my-packages">
            <UserPackages></UserPackages>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
