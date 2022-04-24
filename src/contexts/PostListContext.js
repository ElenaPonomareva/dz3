import { createContext } from "react";
import usePosts from "../hooks/usePosts";

const PostListContext = createContext();

const PostListProvider = ({ children }) => {
  const { posts, createPost, deletePost, clearAllPosts } = usePosts();

  return (
    <PostListContext.Provider
      value={{ posts, createPost, deletePost, clearAllPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

export { PostListContext };