import { useEffect, useState } from "react";

const LSPostsKey = "posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const createPost = async (title, text, image, tag) => {
    const newPost = {
      id: Date.now(),
      title, 
      text,
      image, 
      tag,
    };

    setPosts((prev) => [...prev, newPost]);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const clearAllPosts = () => {
    setPosts([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSPostsKey)
    if (dataFromLS) {
      setPosts(JSON.parse(dataFromLS))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LSPostsKey, JSON.stringify(posts));
  }, [posts]);


	return {
		posts,
		createPost,
		deletePost,
		clearAllPosts,
	}
};

export default usePosts
