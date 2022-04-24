import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PostListProvider from "./contexts/PostListContext";

function App() {
  return (
    <PostListProvider>
      <div className="container py-5">
        <Header />
        <hr />
        <Main />
      </div>
    </PostListProvider>
  )
}

export default App;


