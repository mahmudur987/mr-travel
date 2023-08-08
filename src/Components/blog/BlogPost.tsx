// BlogPost.tsx
import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

interface BlogPostProps {
  title: string;
  content: [];
  likes: number;
  rating: number;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  likes,
  rating,
}) => {
  const [Rating, setRating] = useState(rating);
  const [Likes, setLikes] = useState(likes);

  const handleLike = () => {
    setLikes(Likes + 1);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border ">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        {content.map(
          (item: { tip: string; description: string }, i: React.Key) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-green-500">
                {item.tip}
              </h2>
              <p>{item.description}</p>
            </div>
          )
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="flex items-center gap-2">
          {[...Array(Rating)].map((_, index) => (
            <span className="text-yellow-500 " key={index}>
              <AiFillStar />{" "}
            </span>
          ))}
        </p>
        <button
          onClick={handleLike}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FaThumbsUp className="mr-2" /> Like {Likes}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
