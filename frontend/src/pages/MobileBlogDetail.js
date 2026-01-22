import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import BlogDetail from "@/components/BlogDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
const MobileBlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (_jsxs("div", { className: "h-screen flex flex-col", children: [_jsxs("div", { className: "h-14 border-b flex items-center px-4", children: [_jsx(Button, { variant: "ghost", size: "icon", onClick: () => navigate(-1), children: _jsx(ArrowLeft, {}) }), _jsx("span", { className: "ml-2 font-semibold", children: "Blog" })] }), _jsx("div", { className: "flex-1 overflow-y-auto p-4", children: _jsx(BlogDetail, { blogId: Number(id) }) })] }));
};
export default MobileBlogDetail;
