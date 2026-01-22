import type { Blog } from "@/types/blog";
export declare const getBlogs: () => Promise<Blog[]>;
export declare const getBlogById: (id: number) => Promise<Blog>;
export declare const createBlog: (blog: Omit<Blog, "id">) => Promise<Blog>;
