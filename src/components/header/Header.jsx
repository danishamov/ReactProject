import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="full">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="images/logo.png" alt="#" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right_top_section">
                                {/* social icon */}
                                <ul className="social-icons pull-left">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>

                                    <li>
                                        <a className="youtube" href="#">
                                            <i className="fa fa-youtube-play" />
                                        </a>
                                    </li>
                                </ul>
                                {/* end social icon */}
                                {/* button section */}
                                <ul className="login">
                                    <li className="login-modal">
                                        <Link to="/login" className="login">
                                            <i className="fa fa-user" />
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="cart-option">
                                            <Link to="/register">
                                                <i className="fa fa-shopping-cart" />
                                                Register
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-option">
                                            <Link to="/logout">
                                                <i className="fa fa-shopping-cart" />
                                                Logout
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cart-option">
                                            <Link to="/profile">
                                                <i className="fa fa-shopping-cart" />
                                                My profile
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                                {/* end button section */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="main-menu-section">
                                    <div className="menu">
                                        <nav className="navbar navbar-inverse">
                                            <div className="navbar-header">
                                                <button
                                                    className="navbar-toggle"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    data-target=".js-navbar-collapse"
                                                >
                                                    <span className="sr-only">
                                                        Toggle navigation
                                                    </span>
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                </button>
                                                <a
                                                    className="navbar-brand"
                                                    href="#"
                                                >
                                                    Menu
                                                </a>
                                            </div>
                                            <div className="collapse navbar-collapse js-navbar-collapse">
                                                <ul className="nav navbar-nav">
                                                    <li className="active">
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about">
                                                            About
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/team">
                                                            Team
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/news">
                                                            News
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/blog">
                                                            Blog
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/shop">
                                                            Shop
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact">
                                                            Contact
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* /.nav-collapse */}
                                        </nav>
                                        <div className="search-bar">
                                            <div id="imaginary_container">
                                                <div className="input-group stylish-input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search"
                                                    />
                                                    <span className="input-group-addon">
                                                        <button type="submit">
                                                            <i
                                                                className="fa fa-search"
                                                                aria-hidden="true"
                                                            />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
