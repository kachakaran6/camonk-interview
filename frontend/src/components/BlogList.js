import { jsx as _jsx } from "react/jsx-runtime";
import BlogCard from "./BlogCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { useBlogs } from "@/hooks/useBlogs";
import { useNavigate } from "react-router-dom";
const BlogList = ({ onSelect }) => {
    const { data, isLoading, error } = useBlogs();
    const navigate = useNavigate();
    const handleSelect = (id) => {
        if (window.innerWidth < 768) {
            navigate(`/blog/${id}`);
        }
        else {
            onSelect(id);
        }
    };
    if (isLoading)
        return _jsx(LoadingSkeleton, {});
    if (error) {
        return _jsx("p", { className: "text-red-500 text-sm", children: "Failed to load blogs" });
    }
    return (_jsx("div", { className: "space-y-4", children: data?.map((blog) => (_jsx(BlogCard, { blog: blog, onClick: () => handleSelect(blog.id) }, blog.id))) }));
};
export default BlogList;
