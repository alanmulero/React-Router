import {BrowserRouter, Route, Routes} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecalho />
            <Routes>
            <Route path={'/'} element={<Inicio />}></Route>
            <Route path={'Favoritos'} element={<Favoritos />}></Route>
            </Routes>
            <Rodape />

        </BrowserRouter>

    )
}

export default AppRoutes;