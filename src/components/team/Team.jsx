export default function Team() {
    return (
        <div className="team-holder theme-padding">
            <div className="container">
                <div className="main-heading-holder">
                    <div className="main-heading sytle-2">
                        <h2>Meet Your Team</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium
                            <br />
                            doloremque laudantium, totam rem aperiam
                        </p>
                    </div>
                </div>
                <div id="team-slider">
                    <div className="container">
                        <div className="col-md-3">
                            <div className="team-column style-2">
                                <img src="images/img-1-1.jpg" alt="" />
                                <div className="player-name">
                                    <div className="desination-2">Defender</div>
                                    <h5>Charles Wheeler</h5>
                                    <span className="player-number">12</span>
                                </div>
                                <div className="overlay">
                                    <div className="team-detail-hover position-center-x">
                                        <p>
                                            Lacus vulputate torquent mollis
                                            venenatis quisque suspendisse
                                            fermentum primis,
                                        </p>
                                        <ul className="social-icons style-4 style-5">
                                            <li>
                                                <a
                                                    className="facebook"
                                                    href="#"
                                                    tabIndex={0}
                                                >
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="twitter"
                                                    href="#"
                                                    tabIndex={0}
                                                >
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="youtube"
                                                    href="#"
                                                    tabIndex={0}
                                                >
                                                    <i className="fa fa-youtube-play" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="pinterest"
                                                    href="#"
                                                    tabIndex={0}
                                                >
                                                    <i className="fa fa-pinterest-p" />
                                                </a>
                                            </li>
                                        </ul>
                                        <a
                                            className="btn blue-btn"
                                            href=" /soccer/team-detail.html"
                                            tabIndex={0}
                                        >
                                            View Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-column style-2">
                                <img src="images/img-1-2.jpg" alt="" />
                                <div className="player-name">
                                    <div className="desination-2">Defender</div>
                                    <h5>Charles Wheeler</h5>
                                    <span className="player-number">12</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-column style-2">
                                <img src="images/img-1-3.jpg" alt="" />
                                <div className="player-name">
                                    <div className="desination-2">Defender</div>
                                    <h5>Charles Wheeler</h5>
                                    <span className="player-number">12</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team-column style-2">
                                <img src="images/img-1-4.jpg" alt="" />
                                <div className="player-name">
                                    <div className="desination-2">Defender</div>
                                    <h5>Charles Wheeler</h5>
                                    <span className="player-number">12</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
