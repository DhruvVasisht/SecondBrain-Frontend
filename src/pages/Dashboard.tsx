import { PlusIcon, Share2Icon } from "lucide-react";
import Button from "../components/Button";
import CreateContent from "../components/CreateContent";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { useState } from "react";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <Sidebar />
      <div className="p-6 ml-76 min-h-screen">
        <CreateContent
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-3 mb-6">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon className="w-4 h-4" />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<Share2Icon className="w-4 h-4" />}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card
            type="twitter"
            link="https://x.com/nitesh_singh5/status/1884311802324128068"
            title="New Job post"
          />
          <Card
            type="youtube"
            link="https://www.youtube.com/watch?v=Iw0iC8MnHQA"
            title="New Video"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
