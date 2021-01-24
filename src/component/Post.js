import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  return (
    <div className="post container">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
