/* import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; */
import { connect } from "react-redux";
import { deletePost } from "../action/actionCreator";

const Post = (props) => {
  /*   const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]); */

  console.log(props);
  const { post, deletePost, history } = props;

  const handleDelete = () => {
    deletePost(post.id);
    history.push("/");
  };

  return (
    <div className="post container">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
      <button className="center" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
