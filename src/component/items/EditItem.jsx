import React from "react";

export const EditList = ({
  editValue,
  handleCancelClick,
  handleEditFormChange,
  handleEditFormSubmit,
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <input
        className="span-add"
        name="title"
        type="text"
        required
        value={editValue.title}
        onChange={handleEditFormChange}
      ></input>
      <input
        className="span-add"
        name="content"
        type="number"
        min="1"
        step="0.01"
        required
        value={editValue.content}
        onChange={handleEditFormChange}
      ></input>
      <button className="btn-save btn-all" name="save" type="submit"></button>
      <button
        className="btn-cancel btn-all"
        name="cancel"
        onClick={handleCancelClick}
      ></button>
    </form>
  );
};
