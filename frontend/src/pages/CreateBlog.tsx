import BlogForm from "@/components/BlogForm";
import Header from "@/components/Header";

const CreateBlog = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 overflow-y-auto p-6 bg-muted/40">
        <BlogForm />
      </div>
    </div>
  );
};

export default CreateBlog;
