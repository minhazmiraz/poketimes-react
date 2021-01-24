import { Link } from "react-router-dom";
import PokeBall from "../pokeball.png";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const posts = props.posts;
  /* const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setPosts(response.data.slice(0, 10));
    });
  }, []); */

  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <img src={PokeBall} alt="A pokeball" />
          <div className="card-content">
            <Link to={"/post/" + post.id}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">There is no post yet</div>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
