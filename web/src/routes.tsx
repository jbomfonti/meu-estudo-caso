import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Listagem/Listagem"
import { Home2 } from "./pages/Detalhes/Detalhes"


export const AppRoutes = () => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/home2/:id' element={<Home2 />}/>

            <Route path='*' element={<Navigate to='/home'/>}/>

          </Routes>
        </BrowserRouter>
    
    )
}