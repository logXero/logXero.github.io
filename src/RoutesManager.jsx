import { Route, Routes } from "react-router-dom";
import Main from "./layout/Main/Main";
import Login from "./features/Authentication/Login";
import Onbaording from "./features/Authentication/Onboarding";
import Registration from "./features/Authentication/Registration";
import {Homepage, NotFound, Dashboard} from "./Pages"

const RoutesManager = () => {
  return (
    <Routes>
    <Route path='/' element={<Homepage />} />
    <Route element={<Onbaording />}>
      <Route path='/register' element={<Registration />} />
      <Route path='/login' element={<Login />} />
    </Route>
    <Route element={<Main />}>
      <Route path='/home' element={<NotFound />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  </Routes>
  )
}

export default RoutesManager