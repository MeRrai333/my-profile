import './App.css';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Main_page from './component/main_page.js';
import Cat_page from './component/cat.js'
import User_page from './component/user.js'

export default function App() {
  return (
    <div className="m-5 drop-shadow-xl ">
      <div className="bg-SpaceColor z-0 static h-100vh lg:h-95vh w-98%">
        <div className="bg-MainColor z-10 absolute sm:mt-40 lg:mt-56 w-98% sm:h-44 lg:h-232px drop-shadow-md"></div>
        <div className="bg-MainColor z-10 absolute sm:ml-52 lg:ml-3/4 sm:w-44 lg:w-232px h-full lg:h-95vh drop-shadow-md"></div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main_page />}></Route>
              <Route path="/cat" element={<Cat_page />}></Route>
              <Route path="/user" element={<User_page />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}