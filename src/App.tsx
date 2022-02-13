import { Routes, Route, Navigate } from "react-router-dom";
import PostsList from "./pages/PostsList";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";
import PostItem from "./pages/PostItem";
import PageForm from "./pages/PageForm";

function App() {
  const propMessage: string = "Hello from ";
  return (
    <MainLayout message={propMessage}>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsList message={propMessage} />} />
        <Route path="/post/:id" element={<PostItem message={propMessage} />} />
        <Route path="/form" element={<PageForm message={propMessage} />} />
        <Route path="*" element={<NotFound message={propMessage} />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
