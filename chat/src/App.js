import { Login } from "./pages/Login";
import { Chat } from "./pages/Chat";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useState} from "react"

function App() {

  const [user,setUser] = useState("")
  const [list, setList] = useState([]);

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login list={list} user={user} setUser={setUser}/>} />
            <Route path="/chat" element={<Chat list={list} setList={setList} user={user}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;