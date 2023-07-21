"use client";
import { useState } from "react";
export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const [isCompletedOk, setIsCompletedOk] = useState(true);
  const resultComplete = isCompletedOk ? "" : "text-decoration-line-through";
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };
  const doneBtnOnClick = () => {
    if (isCompletedOk === false) {
      setIsCompletedOk(true);
      toggleDoneTaskFunc(id);
    } else {
      setIsCompletedOk(false);
      toggleDoneTaskFunc(id);
    }
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/* 
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
      */}
      <span className={resultComplete}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
