import { PlusIcon, X } from "lucide-react";
import { Input } from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Linkedin = "linkedin",
}

const CreateContent = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const addContent = () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const[type,setType] = useState(ContentType.Youtube);

  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Add Content</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500 cursor-pointer" />
                </button>
              </div>
              <div className="space-y-4">
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Add Link" />
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  onClick={addContent}
                  variant="primary"
                  text="Add"
                  startIcon={<PlusIcon className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateContent;
