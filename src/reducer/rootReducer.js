const initstate = {
  posts: [
    {
      body:
        "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
      id: "1",
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
      body:
        "est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla",
      id: "2",
      title: "qui est esse",
    },
    {
      body:
        "et iusto sed quo iure↵voluptatem occaecati omnis eligendi aut ad↵voluptatem doloribus vel accusantium quis pariatur↵molestiae porro eius odio et labore et velit aut",
      id: "3",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
  ],
};

const rootReducer = (state = initstate, action) => {
  if (action.type === "DELETE_POST") {
    const posts = state.posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      posts: posts,
    };
  }
  return state;
};

export default rootReducer;
