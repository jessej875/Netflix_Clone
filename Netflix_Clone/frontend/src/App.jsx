import { Route } from 'react-router'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Homepage/>
     <Routes>
      <Route path={"/"} element={<Homepage />} />
        <Route path={"/movie/:id"} element={<Moviepage />} />
        <Route path={"/signin"} element={<SignIn />} />
        <Route path={"/signup"} element={<SignUp />} />
     </Routes>
    </div>
  )
}

export default App