export default function TopSection() {
    return (
        <div className="full-slider">
            <div id="carousel-example-generic" className="carousel slide">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li
                        data-target="#carousel-example-generic"
                        data-slide-to={0}
                        className="active"
                    />
                    <li
                        data-target="#carousel-example-generic"
                        data-slide-to={1}
                    />
                    <li
                        data-target="#carousel-example-generic"
                        data-slide-to={2}
                    />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner" role="listbox">
                    {/* First slide */}
                    <div
                        className="item active deepskyblue"
                        data-ride="carousel"
                        data-interval={5000}
                    >
                        <div className="carousel-caption">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div
                                    className="slider-contant"
                                    data-animation="animated fadeInRight"
                                >
                                    <h3>
                                        If you Don’t Practice
                                        <br />
                                        You{" "}
                                        <span className="color-yellow">
                                            Don’t Derserve
                                        </span>
                                        <br />
                                        to win!
                                    </h3>
                                    <p>
                                        If you use this site regularly and would
                                        like to help keep the site on the
                                        Internet,
                                        <br />
                                        please consider donating a small sum to
                                        help pay..
                                    </p>
                                    <button className="btn btn-primary btn-lg">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.item */}
                    {/* Second slide */}
                    <div
                        className="item skyblue"
                        data-ride="carousel"
                        data-interval={5000}
                    >
                        <div className="carousel-caption">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div
                                    className="slider-contant"
                                    data-animation="animated fadeInRight"
                                >
                                    <h3>
                                        If you Don’t Practice
                                        <br />
                                        You{" "}
                                        <span className="color-yellow">
                                            Don’t Derserve
                                        </span>
                                        <br />
                                        to win!
                                    </h3>
                                    <p>
                                        You can make a case for several
                                        potential winners of
                                        <br />
                                        the expanded European Championships.
                                    </p>
                                    <button className="btn btn-primary btn-lg">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.item */}
                    {/* Third slide */}
                    <div
                        className="item darkerskyblue"
                        data-ride="carousel"
                        data-interval={5000}
                    >
                        <div className="carousel-caption">
                            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12" />
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div
                                    className="slider-contant"
                                    data-animation="animated fadeInRight"
                                >
                                    <h3>
                                        If you Don’t Practice
                                        <br />
                                        You{" "}
                                        <span className="color-yellow">
                                            Don’t Derserve
                                        </span>
                                        <br />
                                        to win!
                                    </h3>
                                    <p>
                                        You can make a case for several
                                        potential winners of
                                        <br />
                                        the expanded European Championships.
                                    </p>
                                    <button className="btn btn-primary btn-lg">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.item */}
                </div>
                {/* /.carousel-inner */}
                {/* Controls */}
                <a
                    className="left carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="glyphicon glyphicon-chevron-left"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="right carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="glyphicon glyphicon-chevron-right"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* /.carousel */}
        </div>
    );
}
