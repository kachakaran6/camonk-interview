import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCreateBlog } from "@/hooks/useBlogs";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
    const navigate = useNavigate();
    const { mutate, isPending, error } = useCreateBlog();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [content, setContent] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({
            title,
            category: category.split(",").map((c) => c.trim()),
            description,
            coverImage,
            content,
            date: new Date().toISOString(),
        }, {
            onSuccess: () => navigate("/"),
        });
    };
    return (_jsx("div", { className: "flex justify-center", children: _jsxs(Card, { className: "w-full max-w-2xl shadow-md", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-2xl", children: "Create New Blog" }) }), _jsx(Separator, {}), _jsx(CardContent, { className: "pt-6", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Title" }), _jsx(Input, { placeholder: "Enter blog title", value: title, onChange: (e) => setTitle(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Categories" }), _jsx(Input, { placeholder: "FINANCE, TECH", value: category, onChange: (e) => setCategory(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Cover Image URL" }), _jsx(Input, { placeholder: "https://image-url.com", value: coverImage, onChange: (e) => setCoverImage(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Short Description" }), _jsx(Textarea, { placeholder: "Brief summary of the blog", value: description, onChange: (e) => setDescription(e.target.value), rows: 3, required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Full Content" }), _jsx(Textarea, { placeholder: "Write full blog content here...", value: content, onChange: (e) => setContent(e.target.value), rows: 6, required: true })] }), error && (_jsx("p", { className: "text-sm text-red-500", children: "Failed to create blog" })), _jsxs("div", { className: "flex justify-end gap-3 pt-2", children: [_jsx(Button, { type: "button", variant: "outline", onClick: () => navigate("/"), children: "Cancel" }), _jsx(Button, { type: "submit", disabled: isPending, children: isPending ? "Creating..." : "Create Blog" })] })] }) })] }) }));
};
export default BlogForm;
