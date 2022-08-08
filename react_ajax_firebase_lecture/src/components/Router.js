import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../routes/Home";
import Profile from "../routes/Profile";

const AppRouter = (props) => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="*" element={<Home></Home>} />
        </Routes>
    </BrowserRouter>)
}

export default AppRouter;