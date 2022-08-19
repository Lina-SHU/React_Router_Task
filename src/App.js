import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  return <button type="button" onClick={() => navigate('/login')}>登出</button>
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (
    <>
      <p>Post 頁面</p>
      <Outlet />
    </>
  )
  
  
}

const PostId = () => {
  let param = useParams();
  return <p>PostID： {param.postId}</p>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />}>註冊頁面</Route>
          <Route path="/login" element={<Login />}>登入頁面</Route>
          <Route path="/todo" element={<Todo />}>Todo 頁面</Route>
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />}></Route>
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
