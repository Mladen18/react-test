import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PostsList from "./pages/PostsList";
import Post from "./pages/Post";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsList />} />
        {/* <Route path="/post/:postId" element={<Post />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
