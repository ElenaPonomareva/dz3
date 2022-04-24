import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import PostItem from "./PostItem/PostItem"

const PostList = () => {

	const {posts} = useContext(PostListContext)


	return (
		<ul className="list-group">
			{posts.map((post, index) => (
				<PostItem key={post.id} id={post.id} index={index} title={post.title} text={post.text} image={post.image} tag={post.tag} />
			))}
		</ul>
	)
}

export default PostList