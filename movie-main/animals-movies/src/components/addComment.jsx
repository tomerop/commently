import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CommentContext } from "../context/commentContext";

const AddComment = () => {
  const { AddComment } = useContext(CommentContext);
  const [body, setBody] = useState("");
  useEffect(() => {}, []);

  return (
    <div>
      <h3>Add Comment here</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddComment({ name: localStorage.getItem("name"), body: body });
        }}
      >
        <input
          type="text"
          placeholder="body"
          name="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button style={{ backgroundColor: "green" }}>
          submit and add comment
        </button>
      </form>
    </div>
  );
};

export default AddComment;
