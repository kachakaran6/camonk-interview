import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CreateBlog from "@/pages/CreateBlog";
import MobileBlogDetail from "./pages/MobileBlogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/blog/:id" element={<MobileBlogDetail />} />
    </Routes>
  );
}

export default App;
