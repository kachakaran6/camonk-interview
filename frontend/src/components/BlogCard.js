import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const BlogCard = ({ blog, onClick }) => {
    return (_jsx(Card, { onClick: onClick, className: "cursor-pointer hover:shadow-md transition", children: _jsxs(CardContent, { className: "p-4 space-y-2", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: blog.category.map((cat) => (_jsx(Badge, { variant: "secondary", children: cat }, cat))) }), _jsx("h2", { className: "text-lg font-semibold", children: blog.title }), _jsx("p", { className: "text-sm text-muted-foreground line-clamp-2", children: blog.description })] }) }));
};
export default BlogCard;
