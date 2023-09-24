import Home from "./pages/home/Home.jsx";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { productInputs, userInputs } from "./formSource.js";
import "./style/dark.scss";
import { useContext } from "react";
import DarkThemeContext from "./context/darkTheme/darkThemeContext.jsx";
import DataState from "./context/Data/DataState.jsx";

const App = ()=> {
  
  let {darkTheme} = useContext(DarkThemeContext);

  return (
    <DataState>
  
    <div className={ darkTheme==="white" ? "app" : "app dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<List page={"users"}/>} />
              <Route path=":userid" element={<Single/>} />
              <Route path="new" element={<New inputArr={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List page={"products"}/>} />
              <Route path=":productid" element={<Single/>} />
              <Route path="new" element={<New inputArr={productInputs} title="Add New Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
     
     
    </DataState>
  );
}

export default App;
