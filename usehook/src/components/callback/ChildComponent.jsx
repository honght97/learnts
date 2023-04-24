import React, { useEffect, useState } from "react";

const ChildComponent = ({ getData }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);
  return (
    <div>
      <p>Child component</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
};

export default ChildComponent;
