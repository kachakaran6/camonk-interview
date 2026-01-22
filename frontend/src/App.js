import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CreateBlog from "@/pages/CreateBlog";
import MobileBlogDetail from "./pages/MobileBlogDetail";
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/create", element: _jsx(CreateBlog, {}) }), _jsx(Route, { path: "/blog/:id", element: _jsx(MobileBlogDetail, {}) })] }));
}
export default App;
