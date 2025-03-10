import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/:slug" element={<OnePost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;