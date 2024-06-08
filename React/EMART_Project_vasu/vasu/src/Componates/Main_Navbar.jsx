// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import asset44 from '../assets/asset 44.svg'
import asset45 from '../assets/asset 45.svg'
import asset1 from '../assets/asset 1.webp'
import asset2 from '../assets/asset 2.webp'
import asset3 from '../assets/asset 3.webp'
import asset4 from '../assets/asset 4.png'
import asset5 from '../assets/asset 5.png'
import asset6 from '../assets/asset 6.png'
import React, { useState } from 'react';
import asset22 from '../assets/asset 22.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import asset43 from '../assets/asset 43.svg'
import asset8 from '../assets/asset 8.svg'
import asset47 from '../assets/asset 47.svg'
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";



function OffcanvasExample() {

const {user , loginWithRedirect} = useAuth0();


console.log("Current",user);
    const result = useSelector((state) => state.reducer);
    console.warn("HeaderData called", result);

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);


    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);
    const handleClose5 = () => setShow5(false);


    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);
    const handleShow5 = () => setShow5(true);

    return (
        <>
            {['xl'].map((expand) => (
                <Navbar key={expand} expand={expand} className=" mb-3">
                    <Container fluid >
                        <Navbar.Brand href="#">
                            <NavLink className to="/">
                                <img className='w-32 ' src="https:/emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" alt="" />
                            </NavLink>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='hidden'>

                                    <img className='w-28' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/emart-011.webp" alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>


                                <Nav className="justify-center flex-grow-1 pe-3 xl:relative">
                                    <div className='xl:mt-3 xl:left-[460px] xl:absolute '>
                                        <img className='hover:rotate-180' src={asset22} alt="" />
                                    </div>
                                    {/* Demo */}
                                    <NavDropdown className=''
                                        onMouseOver={handleShow1} onMouseLeave={handleClose1}
                                        title="Demo"

                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        show={show1}
                                    >



                                        <NavDropdown.Item Item href="#action1" className=' xl:w-[1500px] xl:mt-[20px] xl:pt-[20px]  xl:container xl:p-32'>
                                            <NavDropdown.Item href="#action2" className='grid xl:grid-cols-4 lg:grid-cols-1 '>
                                                <NavDropdown.Item href="#action3" className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                    <img className='w-[300px] h-[200px] ' src={asset1} alt="" />
                                                    <p className='hover:translate-x-2 duration-300'>newproduct on the market</p>
                                                    <NavLink className to="/shop_Now">shop Now</NavLink>

                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action4" >
                                                    <li className='hover:translate-x-2 duration-300 text-slate-500 inline-block'>Fashion Hub</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Big Fashion</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Fashion Store</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Handicraft</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>interior</li>
                                                </NavDropdown.Item>

                                                <NavDropdown.Item href="#action5">
                                                    <li className='hover:translate-x-2 duration-300 text-slate-500'>Plant Gearden</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Kid Toys</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Elecronic Gadget</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bathroom</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bicycle</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Shoes</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Bags</li>
                                                </NavDropdown.Item>


                                                <NavDropdown.Item href="#action6">
                                                    <li className='hover:translate-x-2 duration-300 text-slate-500'>Soap</li>
                                                    <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Skin Care</li>
                                                    <div className='flex'>
                                                        <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Woman Fashion</li>
                                                        <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                                    </div>
                                                    <div className='flex'>
                                                        <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Hiking Heaven</li>
                                                        <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                                    </div>
                                                    <div className='flex'>
                                                        <li className='hover:translate-x-2 duration-300 mt-3 text-slate-500'>Exotic Fragrances</li>
                                                        <div className='h-5  w-12  bg-red-700 text-white rounded-2xl ms-4 mt-3'><p className='translate-x-2 -translate-y-1'>new</p></div>
                                                    </div>

                                                </NavDropdown.Item>
                                            </NavDropdown.Item>
                                            <hr className='mt-9' />
                                        </NavDropdown.Item>

                                    </NavDropdown>


                                    {/* Product */}
                                    <NavDropdown
                                        onMouseOver={handleShow2} onMouseLeave={handleClose2}
                                        title="Product"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        show={show2}
                                    >
                                        {/* <hr className=' xl:-translate-x-[590px] d-xl-block d-md-none d-sm-none  d-lg-none' /> */}
                                        <div className='xl:w-[1500px] xl:mt-[20px] xl:pt-[20px]  xl:-translate-x-[550px] xl:container xl:p-32'>
                                            <div className='grid xl:grid-cols-5 lg:grid-cols-1'>
                                                <div className='ms-3 d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                    <img className='w-[250px]' src={asset2} alt="" />
                                                    <p className='text-lg mt-2'>Each product has a number for easy identification</p>
                                                </div>
                                                <div className='ms-3 d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                    <img className='w-[250px]' src={asset3} alt="" />
                                                    <p className='text-lg mt-2'>it's just a product of your fevered imagination! </p>
                                                </div>


                                                <div>
                                                    <div className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                        <img className='xl:w-20' src={asset4} alt="" />
                                                    </div>
                                                    <div className='xl:ms-0 max-xl:p-0 pr-[60px]'>
                                                        <NavDropdown.Item href="#action7" className='font-bold py-[8px] text-[19px] '> Prodect Style </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action8" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'> <NavLink to="Product_Style_One">Product Style One</NavLink> </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action9" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'>Product Two</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action10" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'>Product Three</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action11" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'> <NavLink to="Product_Style_Four">Product Style Four</NavLink></NavDropdown.Item>
                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                        <img className='xl:w-20' src={asset5} alt="" />
                                                    </div>
                                                    <div className='xl:ms-0 max-xl:p-0 pr-[60px]'>
                                                        <NavDropdown.Item href="#action20" className='font-bold py-[8px] text-[19px] '> Prodect gallery </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action21" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'>Vertical Carousel </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action22" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'> <NavLink to="/Carusal">Carusal</NavLink></NavDropdown.Item>
                                                        <NavDropdown.Item href="#action23" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'>Horizontal Style</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action24" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'><NavLink to='/Grid_Style'>Grid_Style</NavLink></NavDropdown.Item>
                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                        <img className='xl:w-20' src={asset6} alt="" />
                                                    </div>
                                                    <div className='xl:ms-0 max-xl:p-0 pr-[60px]'>
                                                        <NavDropdown.Item href="#action20" className='font-bold py-[8px] text-[19px] '> Simple Product </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action21" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'> Variable Product </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action22" className='text-muted py-[8px] text-[18px] animated-text hover:translate-x-3 duration-500'>Product Two</NavDropdown.Item>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='translate-y-8 -translate-x-[580px]' />
                                    </NavDropdown>


                                    {/* Shop */}
                                    <NavDropdown
                                        onMouseOver={handleShow3} onMouseLeave={handleClose3}
                                        title="Shop"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        show={show3}

                                    >
                                        <hr className=' xl:-translate-x-[680px] d-xl-block d-md-none d-sm-none  d-lg-none' />
                                        <div className='xl:w-[1500px] xl:mt-[20px] xl:pt-[20px]  xl:-translate-x-[660px] xl:container xl:p-32'>

                                            <div className='grid xl:grid-cols-4 lg:grid-cols-1 '>
                                                <div>
                                                    <NavDropdown.Item href="#action33" className='font-bold py-[8px] text-[19px] '> Listing Layouts </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action34" className='text-muted py-[8px] text-[18px] animated-text'>  4 Column</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action35" className='text-muted py-[8px] text-[18px] animated-text'><NavLink to='/Four_sildbar'>Four_sildbar</NavLink> </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action36" className='text-muted py-[8px] text-[18px] animated-text'>   5 Column </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action37" className='text-muted py-[8px] text-[18px] animated-text'>   5 Column + Side bar</NavDropdown.Item>

                                                    <div className='mt-[20px]'>

                                                        <NavDropdown.Item href="#action38" className='font-bold py-[8px] text-[19px] '> Shop Pages </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action39" className='text-muted py-[8px] text-[18px] animated-text'><NavLink to='/WishList'>WishList</NavLink></NavDropdown.Item>
                                                        <NavDropdown.Item href="#action40" className='text-muted py-[8px] text-[18px] animated-text'> <NavLink to='/Cart'>Cart</NavLink></NavDropdown.Item>
                                                        <NavDropdown.Item href="#action41" className='text-muted py-[8px] text-[18px] animated-text'> <NavLink to='/ChekOut'>ChekOut</NavLink></NavDropdown.Item>
                                                    </div>
                                                </div>

                                                <div>
                                                    <NavDropdown.Item href="#action42" className='font-bold py-[8px] text-[19px]'> Sidebar Widgets </NavDropdown.Item>
                                                    <NavDropdown.Item href="#action43" className='text-muted py-[8px] text-[18px] animated-text'>  Product Filter at Top</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action44" className='text-muted py-[8px] text-[18px] animated-text'>  Product Filter at Left</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action45" className='text-muted py-[8px] text-[18px] animated-text'> Product Filter at Right</NavDropdown.Item>
                                                </div>

                                                <div>
                                                    <NavDropdown.Item href="#action46" className='font-bold py-[8px] text-[19px]'> Shop Box styles</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action47" className='text-muted py-[8px] text-[18px] animated-text'>  Shop Style One</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action48" className='text-muted py-[8px] text-[18px] animated-text'>  Shop Style Two</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action49" className='text-muted py-[8px] text-[18px] animated-text'> Shop Style Three</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action51" className='text-muted py-[8px] text-[18px] animated-text'> Shop Style Four</NavDropdown.Item>
                                                </div>

                                                <div className='relative  d-xl-block d-md-none d-sm-none  d-lg-none'>
                                                    <img src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2023/03/New-Project.webp" alt="" />
                                                    <div className='absolute text-3xl text-white top-48 left-12'>on the weekend</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='translate-y-8 -translate-x-[680px]' />

                                    </NavDropdown>


                                    {/* Blog */}
                                    <NavDropdown
                                        onMouseOver={handleShow4} onMouseLeave={handleClose4}
                                        title="Blog"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        show={show4}

                                    >
                                        <div>
                                            <div className='pl-[20px] pr-[130px] py-3 border-1 border-gray-300 max-md:p-0 max-md:border-0'>
                                                <NavDropdown.Item href="#action52" className='text-muted py-[8px] text-[18px] animated-text'><NavLink to='/DefualtBlog'>DefualtBlog</NavLink> </NavDropdown.Item>
                                                <NavDropdown.Item href="#action53" className='text-muted py-[8px] text-[18px] animated-text'> Bolg One </NavDropdown.Item>
                                                <NavDropdown.Item href="#action54" className='text-muted py-[8px] text-[18px] animated-text'>Bolg Two</NavDropdown.Item>
                                                <NavDropdown.Item href="#action55" className='text-muted py-[8px] text-[18px] animated-text'>
                                                    <NavLink to='/BlogThree'>
                                                        Blog Three
                                                    </NavLink>
                                                </NavDropdown.Item>
                                            </div>
                                        </div>
                                    </NavDropdown>


                                    {/* Contact */}
                                    <NavDropdown
                                        onMouseOver={handleShow5} onMouseLeave={handleClose5}
                                        title="Contact"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        show={show5}

                                    >
                                        <div>
                                            <NavDropdown.Item href="#action56" className='text-muted py-[8px] text-[18px] animated-text'> Contact One </NavDropdown.Item>
                                            <NavDropdown.Item href="#action57" className='text-muted py-[8px] text-[18px] animated-text'>  <NavLink className to="/ContactTwo">Contact Two</NavLink></NavDropdown.Item>

                                        </div>
                                    </NavDropdown>

                                </Nav>

                                <section className='d-flex '>
                                    <img className='p-2' src={asset44} lt="" />

                                        <button onClick={(e) => loginWithRedirect()}>
                                        <img className='p-2' src={asset45} lt="" />
                                        </button>
                                   


                                    <NavLink className to='/WishList'>
                                        <img className='p-2' src={asset8} lt="" />
                                        {/* <span className="absolute right-[-5px] top-[-10px] text-white">{result}</span> */}
                                    </NavLink>
                                    <div>

                                        <NavLink className to='/Cart'>
                                            <img className='p-2 mt-1' src={asset47} lt="" />
                                            {/* <span className="absolute right-[-5px] top-[-10px] text-white">{result}</span> */}
                                            {/* <span className="absolute right-[-5px] top-[-10px] text-white">{result}</span> */}

                                        </NavLink>
                                    </div>
                                </section>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;