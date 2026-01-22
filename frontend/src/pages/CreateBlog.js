import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BlogForm from "@/components/BlogForm";
import Header from "@/components/Header";
const CreateBlog = () => {
    return (_jsxs("div", { className: "h-screen flex flex-col", children: [_jsx(Header, {}), _jsx("div", { className: "flex-1 overflow-y-auto p-6 bg-muted/40", children: _jsx(BlogForm, {}) })] }));
};
export default CreateBlog;
