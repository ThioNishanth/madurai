import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Router()
{
    return(
        <BrowserRouter>
        <nav>
            <link to={"Hom"}>Home</link>
            <link to={"ab"}>About</link>
        </nav>
        <Routes>
            <Route path={"Home"} element={<Home />}/>
            <Route path={"About"} element={<About />}/>
        </Routes>
        </BrowserRouter>
    );
}
export default Router;