import { useContext } from "react"
import { PostListContext } from "../../../../contexts/PostListContext"


const PostItem = ({ id, title, text, image, tag }) => { 
const { deletePost } = useContext(PostListContext) 
const deleteHandler = () => deletePost(id) 

return ( 
<section className="d-flex flex-column align-items-center my-2"> 
<div className="card border-dark" style={{width: '20rem'}}> 
<img src={image} className="card-img-top img-thumbnail" alt="..." /> 
<div className="card-body text-dark bg-light"> 
<h5 className="card-title">{title}</h5> 
<p className="card-text">{text}</p> 
<p className="card-text">#{tag}</p>

</div> 

<div className="card-body text-white d-flex flex-column align-items-center"> 

<button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить пост</button> 

</div> 

</div> 
</section> 
) 
} 

export default PostItem 