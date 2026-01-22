import type { Blog } from "@/types/blog";
interface BlogCardProps {
    blog: Blog;
    onClick: () => void;
}
declare const BlogCard: ({ blog, onClick }: BlogCardProps) => import("react/jsx-runtime").JSX.Element;
export default BlogCard;
