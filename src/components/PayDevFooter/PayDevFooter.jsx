import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Footer() {
    return (
        <>
            <footer className="footer footer-style-3 footer-style-5" id="footer">
                <Container className="container">
                    <Row className="row">
                        <div className="col-md-6 col-sm-12 mb-30"><a href="/"><img alt="PayDev" src="src/assets/bufflogo.png" width="150" height="115" margin-top="-20px"/></a>
                            <div className="mt-10 mb-20">
                                <p className="text-md neutral-600 mb-10">Augusta, GA 30907</p>
                                <p className="text-md neutral-600 mb-10">Hours: 9:00 - 6:00, Mon - Sat </p>
                                <p className="text-md neutral-600 mb-10">706.834.0329 </p>
                            </div>
                        </div>
                        <Col className="col-md-6 col-sm-12">
                            <Row className="row">
                                <Col className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">About</h5>
                                    <ul className="menu-footer">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Careers</a></li>
                                        {/*<li><a href="#">Press media</a></li>
                                        <li><a href="#">History</a></li>*/}
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </Col>
                                <Col className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Services</h5>
                                    <ul className="menu-footer">
                                        <li><a href="#">Logo/Creative Design</a></li>
                                        <li><a href="#">Business Branding</a></li>
                                        <li><a href="#">Website Design</a></li>
                                        <li><a href="#">Web Development</a></li>
                                        <li> <a href="#">Social Media Marketing</a></li>
                                        <li> <a href="#">SEO</a></li>
                                    </ul>
                                </Col>
                                <Col className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Resources</h5>
                                    <ul className="menu-footer">
                                        <li><a href="#">Community</a></li>
                                        <li><a href="#">Our Blog</a></li>
                                        <li><a href="#">Forums</a></li>
                                        <li><a href="#">Meetups</a></li>
                                        <li> <a href="#">Marketplace</a></li>
                                    </ul>
                                </Col>
                                <Col className="col-lg-3 col-md-6 mb-30">
                                    <h5 className="neutral-0 mb-10 text-18-semibold neutral-0">Support</h5>
                                    <ul className="menu-footer">
                                        <li><a href="#">Forum Support</a></li>
                                        <li><a href="#">Help  FAQ</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="footer-bottom mt-0">
                        <Row className="row align-items-end">
                            <div className="col-lg-6 mb-20">
                                <h5 className="text-18-semibold neutral-0 pl-10">Join our newsletter</h5>
                                <p className="text-sm neutral-600 mb-20 pl-10">No ads. No trails. No commitments</p>
                                <div className="form-newsletter form-newsletter-2">
                                    <form>
                                        <input className="form-control" type="text" placeholder="email address" />
                                        <Button className="btn btn-brand-4-medium">Subscribe
                                            <i className="bi bi-arrow-right ps-2" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end text-center">
                                <div className="row align-items-end">
                                    <div className="col-md-6 mb-20">
                                        <div className="text-center text-md-start">
                                            <div className="text-start d-inline-block">
                                                <p className="text-lg title-follow neutral-0">Follow us
                                                </p><div className="box-socials-footer"><a className="icon-socials icon-facebook" href="#"><i className="bi bi-facebook" /></a><a className="icon-socials icon-instagram" href="#"><i className="bi bi-instagram" /></a><a className="icon-socials icon-github" href="#"><i className="bi bi-github" /></a><a className="icon-socials icon-behance" href="#"><i className="bi bi-behance" /></a></div>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <p className="text-sm neutral-600">Copyright © 2024 Payne Development LLC. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </footer>


        </>
    )
}
