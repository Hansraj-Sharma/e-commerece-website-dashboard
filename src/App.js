import { Route, Routes } from "react-router-dom";
import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete";
import SideMenuBar from "./components/sideMenuBar";
import Layout from "./components/layout";
import Orders from "./components/orders";
import Products from "./components/products";
import Categories from "./components/categories";
import CreateCategory from "./components/createCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='/orders' element={<Orders />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/createCategory' element={<CreateCategory />}></Route>
          <Route path='*' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
