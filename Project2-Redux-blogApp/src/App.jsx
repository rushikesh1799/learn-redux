import "./App.css";
import Posts from "./features/post/Components/Posts";
import AddPostForm from "./features/post/Components/AddPostForm";
import User from "./features/user/User";

function App() {
    return (
        <>
            <User />
            <AddPostForm />
            <Posts />
        </>
    );
}

export default App;
