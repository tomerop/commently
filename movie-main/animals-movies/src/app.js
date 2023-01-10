import "./App.css";
import NavBar from "./components/navBar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddComment from "./components/addComment";
import SignUp from "./components/signUp";
import SignIn from "./components/sighIn";
import Comments from './components/comments';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/addComment" element={<AddComment />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
