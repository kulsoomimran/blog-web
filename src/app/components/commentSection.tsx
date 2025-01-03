"use client";
import { useState } from "react";

interface Icomment {
  id: number;
  name: string;
  comment: string;
}

const CommentSection = () => {
  // comment states
  const [name, setName] = useState(""); // Name input state
  const [comment, setComment] = useState(""); // Comment input state
  const [commentlist, setCommentlist] = useState<Icomment[]>([]);

  // Add comment function
  const addComment = () => {
    if (name.trim() === "" || comment.trim() === "") return; // Ensure both name and comment are provided
    const newComment = { id: Date.now(), name, comment };
    setCommentlist([...commentlist, newComment]);
    setName(""); // Clear the name input after submitting
    setComment(""); // Clear the comment input after submitting
  };

  // Delete comment function
  const deleteComment = (id: number) => {
    setCommentlist(commentlist.filter((comment) => comment.id !== id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200 mt-9 mb-11">
      <h1 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Comment Section</h1>

      {/* Comment input */}
      <div className="mb-6 space-y-4">
        {/* Name input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          aria-label="Name input"
        />
        {/* Comment input and Add button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="flex-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Comment input"
          />
          <button
            onClick={addComment}
            disabled={!name || !comment}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-gray-400 transition-all"
          >
            Add
          </button>
        </div>
      </div>

      {/* Comment list */}
      <div>
        {commentlist.length > 0 ? (
          <ul className="space-y-4">
            {commentlist.map((comment) => (
              <li
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                key={comment.id}
              >
                <p className="text-gray-700 text-sm md:text-base">
                  <strong className="text-blue-800">{comment.name}:</strong> {comment.comment}
                </p>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="text-red-600 hover:text-red-800 transition duration-200"
                  aria-label="Delete comment"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
