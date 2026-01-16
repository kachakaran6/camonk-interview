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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(
      {
        title,
        category: category.split(",").map((c) => c.trim()),
        description,
        coverImage,
        content,
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => navigate("/"),
      }
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Create New Blog</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Title</label>
              <Input
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Categories */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Categories</label>
              <Input
                placeholder="FINANCE, TECH"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            {/* Cover Image */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Cover Image URL</label>
              <Input
                placeholder="https://image-url.com"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Short Description</label>
              <Textarea
                placeholder="Brief summary of the blog"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Full Content</label>
              <Textarea
                placeholder="Write full blog content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                required
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">Failed to create blog</p>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>

              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating..." : "Create Blog"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogForm;
