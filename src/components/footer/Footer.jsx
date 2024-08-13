import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="full">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img
                                            src="images/footer-logo.png"
                                            alt="#"
                                        />
                                    </Link>
                                </div>
                                <p>
                                    Most of our events have hard and easy route
                                    choices as we are always keen to encourage
                                    new riders.
                                </p>
                                <ul className="social-icons style-4 pull-left">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="full">
                            <div className="footer-widget">
                                <h3>Menu</h3>
                                <ul className="footer-menu">
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">Latest News</Link>
                                    </li>

                                    <li>
                                        <Link to="/blog">Our Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="full">
                            <div className="footer-widget">
                                <h3>Contact us</h3>
                                <ul className="address-list">
                                    <li>
                                        <i className="fa fa-map-marker" /> Lorem
                                        Ipsum is simply dummy text of the
                                        printing..
                                    </li>
                                    <li>
                                        <i className="fa fa-phone" /> 123 456
                                        7890
                                    </li>
                                    <li>
                                        <i
                                            style={{
                                                fontSize: 20,
                                                top: 5,
                                            }}
                                            className="fa fa-envelope"
                                        />{" "}
                                        demo@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="full">
                            <div className="contact-footer">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120615.72236587871!2d73.07890527988283!3d19.140910987164396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1527759905404"
                                    width={600}
                                    height={350}
                                    frameBorder={0}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright © 2018 GameInfo.All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
