import type { Blog } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: Blog;
  onClick: () => void;
}

const BlogCard = ({ blog, onClick }: BlogCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-md transition"
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>

        <h2 className="text-lg font-semibold">{blog.title}</h2>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
