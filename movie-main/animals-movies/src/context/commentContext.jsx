import React, { createContext, useState } from "react";
import axios from "axios";
export const CommentContext = createContext();
const url = "http://localhost:3002/api/comments";

function CommentProvider(props) {
  const { children } = props;
  const [errorMsg, setErrorMsg] = useState(null);

  const bringAllCommentsFromMongo = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      setErrorMsg("didnt get all comments");
    }
  };

  const AddComment = async (commentObj) => {
    console.log(commentObj);
    try {
      const response = await axios.post(url, commentObj, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(commentObj);
  };

  const showAllComments = async () => {
    await bringAllCommentsFromMongo();
  };

  return (
    <CommentContext.Provider value={{ AddComment, showAllComments }}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
