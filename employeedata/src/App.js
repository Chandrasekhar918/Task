import React from 'react';
import Home from "./components/home/home";

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Add from "./components/database/add";
import Update from "./components/database/update";
import MainDb from "./components/database/main";
import FindAll from "./components/database/findall";
import View from "./components/database/find";
function App() {
  return (
    <div className="App">
 <Home></Home>

<BrowserRouter>
<Routes>

        <Route path="/findall" element={<FindAll />}/>
        <Route path="/find/:emp_id" element={<View />}/>
        <Route path="/update/:emp_id" element={<Update />}/>
        <Route path="/add" element={<Add />}/>
</Routes>
</BrowserRouter> 
    
    
    </div>
  );
}

export default App;
