import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import NewPost from "./Components/NewPost/NewPost";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserProfile from "./Components/UserProfile/UserProfile";
import Search from "./Components/Search/Search";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account" element= {<Account />}/>

        <Route
          path="/register"
          element={<Register />}/>
        <Route
          path="/login"
          element={<Login />}/>

        <Route
          path="/newpost"
          element= {<NewPost />}/>

        <Route
          path="/update/profile"
          element= {<UpdateProfile />}/>
        <Route
          path="/update/password"
          element= {<UpdatePassword />}/>

        <Route
          path="/forgot/password"
          element= {<ForgotPassword />}/>

        <Route
          path="/password/reset/:token"
          element= {<ResetPassword />}/>

        <Route
          path="/user/:id"
          element= {<UserProfile />}/>

        <Route path="search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
