import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./Header"
import Login from "./Login"
import Problems from "./Problems"
import Homepage from "./Homepage";
import SignUp from "./Signup";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
                <Route path="/signupPage" element={<SignUp />} />
                <Route path="/loginPage" element={<Login />} />
                {/* <Route path="/problemset/all/" element={<AllProblems />} /> */}
                <Route path="/problemsPage/" element={<Problems />} />
                <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
