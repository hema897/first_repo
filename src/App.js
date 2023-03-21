import { Routes,Route } from "react-router-dom";
import Home from "./routingCom/home";
import About from "./routingCom/about";
import {NavBar} from "./routingCom/link";
import { NavLinkDemo } from "./routingCom/navLink";
import {NavigateHookOrder} from "./routingCom/navigateHook-orderSummary"
import { NoMatchRoute } from "./routingCom/noMatchRoute";
import { Product } from "./routingCom/nestedRouting/product";
import { FeatureProduct } from "./routingCom/nestedRouting/featureProduct";
import { NewProduct } from "./routingCom/nestedRouting/newProduct";
import { Users } from "./routingCom/dynamicRouting/users"; 
import { UserDetails } from "./routingCom/dynamicRouting/userDetails";
import { Admin } from "./routingCom/dynamicRouting/admin";
import { SearchParams } from "./routingCom/dynamicRouting/searchParams";
function App(){
  return(
    <>
    <NavLinkDemo />
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="order-summary" element={<NavigateHookOrder />}/>
      <Route path="product" element={<Product/>}>
        <Route index element={<FeatureProduct/>}/>
        <Route path="feature" element={<FeatureProduct/>}/>
        <Route path="new" element={<NewProduct/>}/>
      </Route>

      <Route path="users" element={<Users/>} >
          <Route path="admin" element={<Admin/>} />
      </Route>
      <Route path="users/:userId" element={<UserDetails/>} />
      <Route path="*" element={<NoMatchRoute/>}/>
      <Route path="search" element={<SearchParams/>}  />
    </Routes>

    
    </>
  )
}

export default App