export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="header-top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="full">
                                <div className="logo">
                                    <a href="/">
                                        <img src="images/logo.png" alt="#" />
                                    </a>
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
                                        <a href="#" className="login">
                                            <i className="fa fa-user" />
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <div className="cart-option">
                                            <a href="#">
                                                <i className="fa fa-shopping-cart" />
                                                Register
                                            </a>
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
                                                        <a href="/">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="/about">
                                                            About
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/team">Team</a>
                                                    </li>
                                                    <li>
                                                        <a href="/news">News</a>
                                                    </li>
                                                    <li className="dropdown mega-dropdown">
                                                        <a
                                                            href="/match"
                                                            className="dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            Match
                                                            <span className="caret" />
                                                        </a>
                                                        <ul className="dropdown-menu mega-dropdown-menu">
                                                            <li className="col-sm-8">
                                                                <ul>
                                                                    <li className="dropdown-header">
                                                                        Men
                                                                        Collection
                                                                    </li>
                                                                    <div
                                                                        id="menCollection"
                                                                        className="carousel slide"
                                                                        data-ride="carousel"
                                                                    >
                                                                        <div className="carousel-inner">
                                                                            <div className="item active">
                                                                                <div className="banner-for-match">
                                                                                    <a href="#">
                                                                                        <img
                                                                                            className="img-responsive"
                                                                                            src="images/match-banner1.jpg"
                                                                                            alt="#"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            {/* End Item */}
                                                                            <div className="item">
                                                                                <div className="banner-for-match">
                                                                                    <a href="#">
                                                                                        <img
                                                                                            className="img-responsive"
                                                                                            src="images/match-banner1.jpg"
                                                                                            alt="#"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            {/* End Item */}
                                                                            <div className="item">
                                                                                <div className="banner-for-match">
                                                                                    <a href="#">
                                                                                        <img
                                                                                            className="img-responsive"
                                                                                            src="images/match-banner1.jpg"
                                                                                            alt="#"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            {/* End Item */}
                                                                        </div>
                                                                        {/* End Carousel Inner */}
                                                                        {/* Controls */}
                                                                        <a
                                                                            className="left carousel-control"
                                                                            href="#menCollection"
                                                                            role="button"
                                                                            data-slide="prev"
                                                                        >
                                                                            <span
                                                                                className="glyphicon glyphicon-chevron-left"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span className="sr-only">
                                                                                Previous
                                                                            </span>
                                                                        </a>
                                                                        <a
                                                                            className="right carousel-control"
                                                                            href="#menCollection"
                                                                            role="button"
                                                                            data-slide="next"
                                                                        >
                                                                            <span
                                                                                className="glyphicon glyphicon-chevron-right"
                                                                                aria-hidden="true"
                                                                            />
                                                                            <span className="sr-only">
                                                                                Next
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                    {/* /.carousel */}
                                                                </ul>
                                                            </li>
                                                            <li className="col-sm-4">
                                                                <ul className="menu-inner">
                                                                    <li className="dropdown-header">
                                                                        Next
                                                                        Matchs
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Contrary
                                                                            vs
                                                                            classical
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Discovered
                                                                            vs
                                                                            undoubtable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Contrary
                                                                            vs
                                                                            classical
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Discovered
                                                                            vs
                                                                            undoubtable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Contrary
                                                                            vs
                                                                            classical
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Discovered
                                                                            vs
                                                                            undoubtable
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Contrary
                                                                            vs
                                                                            classical
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            Discovered
                                                                            vs
                                                                            undoubtable
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="/blog">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="/contact">
                                                            contact
                                                        </a>
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
