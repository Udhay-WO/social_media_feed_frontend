import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import PostFeed from "./components/PostFeed";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/feed" element={<PostFeed/>} />
          <Route path="/profile" element={<Profile/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
