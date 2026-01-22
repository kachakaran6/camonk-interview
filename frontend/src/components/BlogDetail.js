import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBlog } from "@/hooks/useBlogs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
const BlogDetail = ({ blogId }) => {
    const { data, isLoading, error } = useBlog(blogId ?? 0);
    if (!blogId) {
        return (_jsx("p", { className: "text-muted-foreground text-center mt-20", children: "Select a blog to view details" }));
    }
    if (isLoading) {
        return (_jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-64 w-full rounded-lg" }), _jsx(Skeleton, { className: "h-6 w-1/2" }), _jsx(Skeleton, { className: "h-4 w-full" }), _jsx(Skeleton, { className: "h-4 w-full" })] }));
    }
    if (error || !data) {
        return _jsx("p", { className: "text-red-500", children: "Failed to load blog" });
    }
    return (_jsxs("article", { className: "space-y-6", children: [_jsx("img", { src: data.coverImage, alt: data.title, className: "w-full h-64 object-cover rounded-lg" }), _jsx("div", { className: "flex flex-wrap gap-2", children: data.category.map((cat) => (_jsx(Badge, { variant: "secondary", children: cat }, cat))) }), _jsx("h1", { className: "text-3xl font-bold", children: data.title }), _jsx(Separator, {}), _jsx("p", { className: "leading-relaxed text-muted-foreground whitespace-pre-line", children: data.content })] }));
};
export default BlogDetail;
