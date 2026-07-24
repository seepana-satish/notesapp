import moment from "moment";
import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            {moment(date).format("DD MMM YYYY")}
          </p>
        </div>

        <button
          onClick={onPinNote}
          className={`text-2xl transition ${
            isPinned ? "text-blue-600" : "text-gray-300 hover:text-blue-500"
          }`}
        >
          <MdOutlinePushPin />
        </button>

      </div>

      {/* Content */}
      <p className="text-sm text-gray-600 mt-4 leading-6">
        {content?.slice(0, 120)}
        {content?.length > 120 && "..."}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5">

        <div className="flex flex-wrap gap-2">
          {tags?.map((item, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              #{item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={onEdit}
            className="text-gray-500 hover:text-green-600 text-xl transition"
          >
            <MdCreate />
          </button>

          <button
            onClick={onDelete}
            className="text-gray-500 hover:text-red-600 text-xl transition"
          >
            <MdDelete />
          </button>

        </div>

      </div>

    </div>
  );
};

export default NoteCard;