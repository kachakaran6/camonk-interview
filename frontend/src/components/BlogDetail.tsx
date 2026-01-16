import { useBlog } from "@/hooks/useBlogs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogDetailProps {
  blogId: number | null;
}

const BlogDetail = ({ blogId }: BlogDetailProps) => {
  const { data, isLoading, error } = useBlog(blogId ?? 0);

  if (!blogId) {
    return (
      <p className="text-muted-foreground text-center mt-20">
        Select a blog to view details
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (error || !data) {
    return <p className="text-red-500">Failed to load blog</p>;
  }

  return (
    <article className="space-y-6">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <div className="flex flex-wrap gap-2">
        {data.category.map((cat) => (
          <Badge key={cat} variant="secondary">
            {cat}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl font-bold">{data.title}</h1>

      <Separator />

      <p className="leading-relaxed text-muted-foreground whitespace-pre-line">
        {data.content}
      </p>
    </article>
  );
};

export default BlogDetail;
