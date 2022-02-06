import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PostsList from "./pages/PostsList";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";
import PostItem from "./pages/PostItem";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/post/:id" element={<PostItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
