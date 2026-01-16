import { useParams, useNavigate } from "react-router-dom";
import BlogDetail from "@/components/BlogDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MobileBlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      <div className="h-14 border-b flex items-center px-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Button>
        <span className="ml-2 font-semibold">Blog</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <BlogDetail blogId={Number(id)} />
      </div>
    </div>
  );
};

export default MobileBlogDetail;
