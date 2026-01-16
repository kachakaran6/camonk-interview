import BlogCard from "./BlogCard";
import LoadingSkeleton from "./LoadingSkeleton";
import { useBlogs } from "@/hooks/useBlogs";
import { useNavigate } from "react-router-dom";

interface BlogListProps {
  onSelect: (id: number) => void;
}

const BlogList = ({ onSelect }: BlogListProps) => {
  const { data, isLoading, error } = useBlogs();
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    if (window.innerWidth < 768) {
      navigate(`/blog/${id}`);
    } else {
      onSelect(id);
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  if (error) {
    return <p className="text-red-500 text-sm">Failed to load blogs</p>;
  }

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => handleSelect(blog.id)}
        />
      ))}
    </div>
  );
};

export default BlogList;
