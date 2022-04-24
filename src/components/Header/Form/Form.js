import { useContext, useState } from "react";
import { PostListContext } from "../../../contexts/PostListContext";

const Form = () => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [tag, setTag] = useState('')

  const { createPost } = useContext(PostListContext)

const titleHandler = (e) => setTitle(e.target.value)
const textHandler = (e) => setText(e.target.value)
const imageHandler = (e) => setImage(e.target.value)
const tagHandler = (e) => setTag(e.target.value)

const submitHandler = (e) => {
  e.preventDefault()
  
  const titleTrim = title.trim()
  const textTrim = text.trim()
  const imageTrim = image.trim()
  const tagTrim = tag.trim()
  if (titleTrim && textTrim && imageTrim && tagTrim) {
    createPost(titleTrim, textTrim, imageTrim, tagTrim)
    setTitle('')
    setText('')
    setImage('')
    setTag('')
  }
}

return (
  <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
      <input 
        type="text" 
        className="form-control my-2"
        placeholder="Заголовок" 
        value={title} 
        onChange={titleHandler} 
      />
      <input 
        type="text" 
        className="form-control my-2"
        placeholder="Текст поста" 
        value={text} 
        onChange={textHandler}
      />
      <input 
        type="text" 
        className="form-control my-2"
        placeholder="Добавить фото" 
        value={image} 
        onChange={imageHandler}
      />
      <input 
      type="text" 
      className="form-control"
      placeholder="Тэг" 
      value={tag} 
      onChange={tagHandler}
    />
    </div>
    <button type="submit" className="btn btn-primary">Опубликовать</button>
  </form>
)
}

export default Form