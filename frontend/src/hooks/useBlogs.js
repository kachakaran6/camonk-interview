import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, getBlogById, createBlog } from "@/api/blogs";
export const useBlogs = () => useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
});
export const editBlog = async (id, blog) => {
    const res = await fetch(`http://localhost:3001/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    });
    if (!res.ok)
        throw new Error("Failed to edit blog");
    return res.json();
};
export const useBlog = (id) => useQuery({
    queryKey: ["blogs", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
});
export const useCreateBlog = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (blog) => createBlog(blog),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
        },
    });
};
