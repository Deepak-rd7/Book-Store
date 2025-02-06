import React from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from "react-router-dom";

function Header(){
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand"><LibraryBooksIcon/>Book Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <Link class="nav-link" to={"/addbook"}>Add Books</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/"}>Books</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to={"/about"}>About</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </div>
}

export default Header;