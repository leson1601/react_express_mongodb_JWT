
import Home from './Home';
import NewPost from './NewPost';
import About from './About';
import Missing from './Missing';
import Login from './Login';
import RequireAuth from './RequireAuth';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './Layout';
import Admin from './Admin';
import Editor from './Editor';
import Unauthorized from './Unauthorized';
import LinkPage from './LinkPage';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>      
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />} >
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />} >
          <Route path="post" element={<NewPost />} />
        </Route>


        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
    // <div className="App">
    //   <Router>
    //     <Header title="React JS Blog" />
    //     <Nav />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/post" element={<NewPost />} />
    //       <Route path="/post/:id" element={<PostPage />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="*" element={<Missing />} />

    //     </Routes>
    //     <Footer />
    //   </Router>
    // </div>
  );
}

export default App;