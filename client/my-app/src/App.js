
import './App.css';
import Post from './post.js';
import Header from './Header';
import {Route,Routes} from "react-router-dom"
import Layout from './Layout.js';
import IndexPage from './pages/IndexPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import { UserContextProvider } from './UserContext.js';
import CreatePost from './pages/createPages.js';
import PostPage from './pages/PostPage.js';
import EditPost from './pages/EditPages.js';

function App() {
  return (
  <UserContextProvider>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<IndexPage/>}/>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path="/post/:id" element={<PostPage />} />
    <Route path="/edit/:id" element={<EditPost/>} />
    </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
