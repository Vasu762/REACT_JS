import Home from "./Componates/Home"
import Main_Navbar from "./Componates/Main_Navbar"
import Shop_Now from './Componates/Shop_Now'
import Product_Style_One from "./Componates/Product_Style_One"
import Product_Style_Four from "./Componates/Product_Style_Four"
import Carusal from "./Componates/Carusal"
import Grid_Style from "./Componates/Grid_Style"
import ContactTwo from "./Componates/ContactTwo"
import BlogThree from "./Componates/BlogThree"
import DefualtBlog from "./Componates/DefualtBlog"
import WishList from "./Componates/WishList"
import Cart from "./Componates/Cart"
import ChekOut from "./Componates/ChekOut"
import Four_sildbar from './Componates/Four_sildbar'
// import BlogOne from "./Componates/BlogOne"
// import ContactOne from "./Componates/ContactOne"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Navbar';
// import Example from "./Componates/Dropdown";
import Footer from "./Componates/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';







function App() {


    return (
        <>
            {/* <Navbar /> */}
            {/* <Main_Navbar /> */}
            {/* <Home /> */}
            {/* <Shop_Now />  */}
            {/* <Product_Style_One /> */}
            {/* <Product_Style_Four /> */}
            {/* <Carusal/> */}
            {/* <Grid_Style /> */}
            {/* <ContactTwo /> */}
            {/* <BlogThree /> */}
            {/* <DefualtBlog/> */}
            {/* <WishList />   */}
            {/* <Cart/> */}
            {/* <ChekOut/> */}
            {/* <Four_sildbar/>  */}
            {/* <ContactOne /> */}
            {/* <BlogOne /> */}
            {/* <Example/>   */}

            <BrowserRouter>
                <Main_Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop_Now' element={<Shop_Now />} />
                    <Route path='/Product_Style_One' element={<Product_Style_One />} />
                    <Route path='/Product_Style_Four' element={<Product_Style_Four />} />
                    <Route path='/Carusal' element={<Carusal />} />
                    <Route path='/Grid_Style' element={<Grid_Style />} />
                    <Route path='/ContactTwo' element={<ContactTwo />} />
                    <Route path='/BlogThree' element={<BlogThree />} />
                    <Route path='/DefualtBlog' element={<DefualtBlog />} />
                    <Route path='/WishList' element={<WishList />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/ChekOut' element={<ChekOut />} />
                    <Route path='/Four_sildbar' element={<Four_sildbar />} />
                    {/* <Route path='/SignInSignUp' element={<SignInSignUp />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
