import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    async function getData() {
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      console.log(localStorage.getItem("token"));
      const url = "http://localhost:3002/api/comments";
      const { data } = await axios.get(url, config);
      setComments(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name}
            <br />
            {comment.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
