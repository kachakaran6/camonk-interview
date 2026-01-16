import { useState } from "react";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";
import Header from "@/components/Header";

const Home = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 border-r overflow-y-auto p-4">
          <BlogList onSelect={setSelectedId} />
        </div>

        {/* Right Panel */}
        <div className="hidden md:block md:w-2/3 overflow-y-auto p-6">
          <BlogDetail blogId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
