import { NotebookIcon, Share2Icon, Trash2Icon } from "lucide-react";

interface CardProps {
  title: string;
  type: "youtube" | "twitter";
  link: string;
}

const Card = ({ title, type, link }: CardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center group cursor-pointer">
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-200">
              <NotebookIcon className="text-indigo-600 w-4 h-4" />
            </div>
            <h1 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-1">
              {title}
            </h1>
          </div>
          <div className="flex gap-2">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              aria-label="Share content"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Share2Icon className="w-4 h-4 text-gray-600 hover:text-indigo-600" />
              </a>
            </button>
            <button 
              className="p-2 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-200"
              aria-label="Delete content"
            >
              <Trash2Icon className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50 hover:border-indigo-100 transition-colors duration-200">
          {type === "youtube" && (
            <iframe
              className="w-full aspect-video"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;