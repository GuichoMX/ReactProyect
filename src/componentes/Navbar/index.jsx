import { Link } from "react-router-dom";
import "./index.css"

const Menu = () => (
    <body>
        {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */}

        <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center justify-content-around">

                <h1 class="logo"><a href="mainAdmin.html">Mi negocio</a></h1>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto"><Link to="/">Página pricipal</Link></a></li>
                        <li><a class="nav-link scrollto"><Link to="/tareas">Tasks</Link></a></li>
                        <li><a class="nav-link scrollto"><Link to="/properties">Properties</Link></a></li>
                        <li><a class="nav-link scrollto"><Link to="/users">Users</Link></a></li>
                        <li><a class="nav-link scrollto" href="#contacto"><Link to="/acercade">Acerca de</Link></a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>


    </body>
)

export default Menu;