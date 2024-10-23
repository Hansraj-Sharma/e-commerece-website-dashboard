import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Layout from "./components/layout";
import Orders from "./components/orders";
import Products from "./components/products";
import Categories from "./components/categories";
import CreateCategory from "./components/createCategory";
import Customers from "./components/customers";
import CustomersInfo from "./components/customersInfo";
import Reports from "./components/reports";
import Coupons from "./components/coupons";
import KnowledgeBase from "./components/knowledgeBase";
import Article from "./components/article";
import Processing from "./components/processing";
import Successfull from "./components/exportSuccessfull";
import SuccessfullPage from "./pages/successfullPage";
import AddProducts from "./components/addProducts";
import AddCustomer from "./components/addCustomer";
import CreateCoupon from "./components/createCoupon";

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
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/customersInfo' element={<CustomersInfo />}></Route>
          <Route path='/reports' element={<Reports />}></Route>
          <Route path='/coupons' element={<Coupons />}></Route>
          <Route path='/knowledgeBase' element={<KnowledgeBase />}></Route>
          <Route path='/successfullPage' element={<SuccessfullPage />}></Route>
          <Route path='/article' element={<Article />}></Route>
          <Route path='/addCustomer' element={<AddCustomer />}></Route>
          <Route path='/addProducts' element={<AddProducts />}></Route>
          <Route path='/createCoupon' element={<CreateCoupon />}></Route>
          <Route path='*' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
