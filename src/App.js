import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import MainLogin from "./components/main-login";
import Login from "./components/login";
import Register from "./components/register";
import Quotes from "./components/quotes";
import Chat from "./components/chat";
import Signout from "./components/signout";
import Bookmarks from "./components/bookmark";
import Settings from "./components/settings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signout" element={<Signout />} />
        <Route exact path="/bookmark" element={<Bookmarks />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/user" element={<MainLogin />} />
      </Routes>
    </div>
  );
}

export default App;
