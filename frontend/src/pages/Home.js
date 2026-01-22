import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import Header from "@/components/Header";
const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    return (_jsxs("div", { className: "h-screen flex flex-col", children: [_jsx(Header, {}), _jsxs("div", { className: "flex flex-1 overflow-hidden", children: [_jsx("div", { className: "w-full md:w-1/3 border-r overflow-y-auto p-4", children: _jsx(BlogList, { onSelect: setSelectedId }) }), _jsx("div", { className: "hidden md:block md:w-2/3 overflow-y-auto p-6", children: _jsx(BlogDetail, { blogId: selectedId }) })] })] }));
};
export default Home;
