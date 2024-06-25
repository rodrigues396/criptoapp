import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Notfound  from '../pages/Notfound';


export default function RoutesApp(){
    return(
        <Routes>
            {/* <Route path="/criptoapp" element={<Home />} />
            <Route path="/criptoapp/detail" element={<Detail />} />
            <Route path="/*" element={<Notfound />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/*" element={<Notfound />} />
        </Routes>
    )
}