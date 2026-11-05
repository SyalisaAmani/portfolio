import { Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import MainLayout from "../components/layout/MainLayout"


function AppRoutes(){
    return(
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<NotFound />}/>
        </Route>
    </Routes>
    )
}

export default AppRoutes