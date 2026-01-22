import type { Blog } from "@/types/blog";
export declare const useBlogs: () => import("@tanstack/react-query").UseQueryResult<Blog[], Error>;
export declare const editBlog: (id: number, blog: Omit<Blog, "id">) => Promise<Blog>;
export declare const useBlog: (id: number) => import("@tanstack/react-query").UseQueryResult<Blog, Error>;
export declare const useCreateBlog: () => import("@tanstack/react-query").UseMutationResult<Blog, Error, Omit<Blog, "id">, unknown>;
