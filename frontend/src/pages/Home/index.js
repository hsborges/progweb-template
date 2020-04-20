import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alert, Navbar, NavDropdown, Brand, Nav, Form, FormControl, Button, Image } from 'react-bootstrap/'
import logoImg from '../../assets/img/logo-white.png'
import bg from '../../assets/img/food-background.jpg'
import { BrowserRouter as Router } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import './styles.css'




export default function Home() {
    {
        return (
            <>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logoImg} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button id="search" variant="flat">
                                <FaSearch size={20} color="#FF0000" fontWeight="bolder" />
                            </Button>

                            <Nav.Link href="#home" >Início</Nav.Link>
                            <NavDropdown title="Receitas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" variant="dark">Asiática</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Brasileira</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Mexicana</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Pratos rápidas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Low Carb</NavDropdown.Item>
                            </NavDropdown>

                            <Button id="login" variant="flat">
                                Login
                            </Button>
                            <Button id="login" variant="flat">
                                Cadastro
                            </Button>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <br />
                <div>
                    <h1 class="title" >Encontre, salve, faça.</h1>

                </div>

            </>
        )
    }
}

        // <div>

        //     <meta charset="utf-8" />
        //     <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
        //     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        //     <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        //     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        //     <link href="../assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />


        //     <body class="sidebar-collapse">

        //         <title>CookBook</title>
        //         <nav class="navbar navbar-color-on-scroll  fixed-top navbar-expand-lg bg-dark" color-on-scroll="100" id="sectionsNav">
        //             <div class="container">
        //                 <div class="navbar-translate">
        //                     <a class="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">
        //                         <img src="../../assets/img/logo-white.png" alt="..." />
        //                     </a>
        //                     <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        //                         <span class="sr-only">Toggle navigation</span>
        //                         <span class="navbar-toggler-icon"></span>
        //                         <span class="navbar-toggler-icon"></span>
        //                         <span class="navbar-toggler-icon"></span>
        //                     </button>
        //                 </div>
        //                 <div class="collapse navbar-collapse">
        //                     <ul class="navbar-nav ml-auto">
        //                         <form class="form-inline ml-auto">
        //                             <div class="form-group has-white">
        //                                 <input type="text" class="form-control" placeholder="Search" />
        //                             </div>
        //                             <button type="submit" class="btn btn-white btn-raised btn-fab btn-round">
        //                                 <i class="material-icons">search</i>
        //                             </button>
        //                         </form>
        //                         {/* <li class="nav-item"> */}
        //                         {/* <a href="#" class="nav-link"> */}
        //                         <button variant="contained" color="primary" class="btn btn-white btn-link">Início</button>
        //                         {/* </a> */}
        //                         {/* </li> */}

        //                         <li class="dropdown nav-item">
        //                             <a href="javascript:;" class="dropdown-toggle nav-link" data-toggle="dropdown">Receitas</a>
        //                             <div class="dropdown-menu">
        //                                 <h6 class="dropdown-header">Dropdown header</h6>
        //                                 <a href="javascript:;" class="dropdown-item">Action</a>
        //                                 <a href="javascript:;" class="dropdown-item">Another action</a>
        //                                 <a href="javascript:;" class="dropdown-item">Something else here</a>
        //                                 <div class="dropdown-divider"></div>
        //                                 <a href="javascript:;" class="dropdown-item">Separated link</a>
        //                                 <div class="dropdown-divider"></div>
        //                                 <a href="javascript:;" class="dropdown-item">One more separated link</a>
        //                             </div>
        //                         </li>

        //                         <li class="nav-item">
        //                             <a href="#" class="nav-link">
        //                                 <button class="btn btn-danger btn-round">Login</button>
        //                             </a>
        //                         </li>
        //                         <li class="nav-item">
        //                             <a href="#" class="nav-link">
        //                                 <button class="btn btn-danger btn-round">Cadastrar</button>
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        //         {/* <div class="page-header header-filter" data-parallax="true" style="background-image: url('../../assets/img/food-background.jpg')"> */}
        //         <div class="container">
        //             <div class="row">
        //                 <div class="col-md-8 ml-auto mr-auto">
        //                     <div class="brand text-center">
        //                         <h1>Encontre, salve e faça.</h1>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* </div> */}


        //         <div class="main main-raised">
        //             <div class="container">
        //                 <div class="section text-center">
        //                     <h3 class="title">Receitas mais bem avaliadas</h3>
        //                 </div>
        //                 <div class="card-deck">
        //                     <div class="card">
        //                         <img src="../../assets/img/pizza.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Pizza deliciosa</h5>
        //                             <p class="card-text">Pizza estilo italiana, sem frescura e com muito queijo.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/sushi.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Sushi brasileiro</h5>
        //                             <p class="card-text">Sem mimimi, recheio feito  com muita coisa.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/hamburguer.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Onion crispy burguer</h5>
        //                             <p class="card-text">Hamburguer caseiro com cebola crispy no pão brioche amanteigado.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/sushi.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Sushi brasileiro</h5>
        //                             <p class="card-text">Sem mimimi, recheio feito  com muita coisa.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="section text-center">
        //                     <h3 class="title">Receitas adicionadas recentemente</h3>
        //                 </div>
        //                 <div class="card-deck">
        //                     <div class="card">
        //                         <img src="../../assets/img/pizza.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Pizza deliciosa</h5>
        //                             <p class="card-text">Pizza estilo italiana, sem frescura e com muito queijo.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/sushi.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Sushi brasileiro</h5>
        //                             <p class="card-text">Sem mimimi, recheio feito  com muita coisa.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button variant="contained" color="red" class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/hamburguer.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Onion crispy burguer</h5>
        //                             <p class="card-text">Hamburguer caseiro com cebola crispy no pão brioche amanteigado.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                     <div class="card">
        //                         <img src="../../assets/img/sushi.jpg" class="card-img-top" alt="..." />
        //                         <div class="card-body">
        //                             <h5 class="card-title">Sushi brasileiro</h5>
        //                             <p class="card-text">Sem mimimi, recheio feito  com muita coisa.</p>
        //                         </div>
        //                         <div class="card-footer">
        //                             <button class="btn btn-danger btn-round btn-block">Ver mais</button>
        //                         </div>
        //                     </div>
        //                 </div>


        //                 <div class="section text-center">
        //                     <h3 class="title">Termos populares</h3>
        //                 </div>
        //                 <div class="container">
        //                     <div class="row">
        //                         <div class="col">
        //                             <button type="button" class="btn btn-danger btn-block btn-round">Comida japonesa</button>
        //                         </div>
        //                         <div class="col">
        //                             <button type="button" class="btn btn-danger btn-block btn-round">Comida brasileira</button>
        //                         </div>
        //                     </div>
        //                     <div class="row">
        //                         <div class="col">
        //                             <button type="button" class="btn btn-danger btn-block btn-round">Pizza caseira</button>
        //                         </div>
        //                         <div class="col">
        //                             <button type="button" class="btn btn-danger btn-block btn-round">Receita de bolo</button>
        //                         </div>
        //                         <div class="col">
        //                             <button type="button" class="btn btn-danger btn-block btn-round">Cachorro quente</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="section text-center">
        //                 </div>

        //             </div>
        //         </div>


        //         <footer class="footer footer-default">
        //             <div class="container">
        //                 <nav class="float-left">
        //                     <ul>
        //                         <li>
        //                             <a>
        //                                 CookBook
        //     </a>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //                 <div class="copyright float-right">
        //                     &copy;
        // <script>
        //                         document.write(new Date().getFullYear())
        // </script>, made with <i class="material-icons">favorite</i> by
        // <a href="" target="blank">GLLL</a>
        //                 </div>
        //             </div>
        //         </footer >

        //         <script src="../../assets/js/core/jquery.min.js" type="text/javascript"></script>
        //         <script src="../../assets/js/core/popper.min.js" type="text/javascript"></script>
        //         <script src="../../assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
        //         <script src="../../assets/js/plugins/moment.min.js"></script>
        //         <script src="../../assets/js/material-kit.js?v=2.0.7" type="text/javascript"></script>
        //     </body >

        // </div>
