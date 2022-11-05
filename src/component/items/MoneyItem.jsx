import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { removeInMoney, updateInMoney } from "../../slice/items/inMoneySlice";
import {
  decrementIn,
  incrementIn,
} from "../../slice/contentTotal/totalinMoneySlice";
import {
  removeOutMoney,
  updateOutMoney,
} from "../../slice/items/outMoneySlice";
import {
  decrementOut,
  incrementOut,
} from "../../slice/contentTotal/totalOutMoneySlice";
import { decrementDelete } from "../../slice/allMoneySplice";
import { EditList } from "./EditItem";
import { AddListItem } from "./AddListItem";
import { strings } from "../../strings/strings";

const MoneyItem = ({ item }) => {
  const [editValue, setEditValue] = useState({
    editId: "",
    title: "",
    content: "",
    idMoney: "",
  });
  const [oldValue, setOldValue] = useState({
    editId: "",
    title: "",
    content: "",
    idMoney: "",
  });
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(0);

  const handleDeleteClick = (item) => {
    if (item.idMoney === strings.dochody) {
      dispatch(decrementIn(item.content));
      dispatch(removeInMoney({ id: item.id }));
    } else {
      dispatch(decrementOut(item.content));
      dispatch(removeOutMoney({ id: item.id }));
    }
    dispatch(decrementDelete(item.content));
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();
    const tagName = e.target.name;
    const tagValue = e.target.value;
    const newFormData = { ...editValue };
    newFormData[tagName] = tagValue;
    setEditValue(newFormData);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    if (item.idMoney === strings.dochody) {
      dispatch(incrementIn(parseFloat(oldValue.content, 2)));
    } else {
      dispatch(incrementOut(parseFloat(oldValue.content, 2)));
    }
    setEditId("");
  };

  const handleEditClick = (e, item) => {
    e.preventDefault();
    setEditId(item.id);
    const formValues = {
      editId: item.id,
      title: item.title,
      content: item.content,
      idMoney: item.idMoney,
    };
    if (item.idMoney === strings.dochody) {
      console.log(parseFloat(item.content, 2));
      dispatch(decrementIn(parseFloat(item.content, 2)));
    } else {
      dispatch(decrementOut(parseFloat(item.content, 2)));
    }

    setEditValue(formValues);
    setOldValue(formValues);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    if (item.idMoney === strings.dochody) {
      dispatch(
        updateInMoney({
          content: editValue.content,
          title: editValue.title,
          id: editValue.editId,
        })
      );
      dispatch(incrementIn(parseFloat(editValue.content,2)));
    } else {
      dispatch(
        updateOutMoney({
          content: editValue.content,
          title: editValue.title,
          id: editValue.editId,
        })
      );
      dispatch(incrementOut(parseFloat(editValue.content,2)));
    }

    setEditId("");
  };

  return (
    <li>
      {item.id === editId ? (
        <EditList
          editValue={editValue}
          handleCancelClick={handleCancelClick}
          handleEditFormChange={handleEditFormChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddListItem
          item={item}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
      )}
    </li>
  );
};
export default MoneyItem;
