import React from "react";

export const AddListItem = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      <span className="span-add">
        {item.title} - {item.content} zł
      </span>

      <button
        className="btn-edit btn-all"
        name="edit"
        onClick={(e) => handleEditClick(e, item)}
      ></button>
      <button
        className="btn-del btn-all"
        name="delete"
        onClick={() => handleDeleteClick(item)}
      ></button>
    </>
  );
};
