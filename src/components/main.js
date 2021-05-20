import React from 'react';
import { Row, Col, Card, CardDeck, Image, Navbar, Nav } from 'react-bootstrap';
import Flag from '../images/flag.jpeg'
import Logo from '../images/homejam_logo.png'
import Bag from '../images/shopping-bag.svg'

class MainComp extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar_top">
                    <Navbar variant="dark">
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt="logo" class="mainLogo" />
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link className="navLinks" href="#home">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                                </svg>Search</Nav.Link>
                            <Nav.Link className="navLinks" href="#">Help</Nav.Link>
                            <Nav.Link className="navLinks" href="#">Account</Nav.Link>
                            <Nav.Link href="#">
                                <img className="shoping_Bag" src={Bag} alt="bag" />
                            </Nav.Link>

                        </Nav>

                    </Navbar>

                </div>
                <div>
                    <div className="banner">
                        <div className="banner_Block"></div>
                        <div class="banner-Content_row">
                            <div class="banner_Text_Block">
                                <div class="banner_text">
                                    <h1 class="title">Cari Cari</h1>
                                    <p class="content">Live from their sofa to yours.Get closer to your favorite <br /> artists,and never miss out.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Row>
                        <Col className="circle">
                            <div className="circleOutline">
                                <div className="circle_Block">
                                    <svg className="circle_Svg" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z">
                                        </path>
                                    </svg>
                                    <span >0</span>
                                    <span >Label</span>
                                </div>

                            </div>
                        </Col>
                        <Col className="circle">
                            <div className="circleOutline">
                                <div className="circle_Block">
                                    <svg className="circle_Svg" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z">
                                        </path>
                                    </svg>
                                    <span >0</span>
                                    <span >Label</span>
                                </div>

                            </div>
                        </Col>
                        <Col className="circle">
                            <div className="circleOutline" >
                                <div className="circle_Block">
                                    <svg className="circle_Svg" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z">
                                        </path>
                                    </svg>
                                    <span >0</span>
                                    <span >Label</span>
                                </div>

                            </div>
                        </Col>
                        <Col className="circle">
                            <div className="circleOutline" >
                                <div className="circle_Block">
                                    <svg className="circle_Svg" stroke-width="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z">
                                        </path>
                                    </svg>
                                    <span >0</span>
                                    <span >Label</span>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="">
                    <div className="">
                        <h4>Upcoming Shows</h4>
                    </div>
                    <hr />
                    <div>
                        <CardDeck>

                            <Card className="show_Cards">
                                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                                <Card.Body>
                                    <div className="actor_Catg"><p>Folk</p></div>
                                    <h6>Benny Dayal</h6>
                                    <Card.Link href="#">More Info</Card.Link>
                                </Card.Body>
                            </Card>

                            <Card className="show_Cards">
                                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                                <Card.Body>
                                    <div className="actor_Catg" ><p>Bollywood</p></div>
                                    <h6>Vijay Yesudas</h6>
                                    <Card.Link href="#">More Info</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="show_Cards">
                                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                                <Card.Body>
                                    <div className="actor_Catg"><p>Folk</p></div>
                                    <h6>Andrea Jeremiah</h6>
                                    <Card.Link href="#">More Info</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="show_Cards">
                                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                                <Card.Body>
                                    <div className="actor_Catg"><p>Folk</p></div>
                                    <h6>Shilpa Rao</h6>
                                    <Card.Link href="#">More Info </Card.Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
                <div className="review_container">
                    <div>
                        <h4>Reviews</h4>
                    </div>
                    <hr />
                    <CardDeck>
                        <Card className="review_Comment_Cards">
                            <div className="review_Card_Header">
                                <Image src="https://picsum.photos/60/60" roundedCircle />
                                <div className="review_Title_Block">
                                    <p id="reviewCard_name">Shilpa Rao</p>
                                    <div className="flag_block">
                                        <Image className="country_Flag" src={Flag} thumbnail />
                                        <p id="reviewCard_city">PALO ALTO. CA</p>
                                    </div>
                                </div>
                            </div>
                            <Card.Body>
                                <div className="comments"><p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                            </Card.Body>
                        </Card>
                        <Card className="review_Comment_Cards">
                            <div className="review_Card_Header">
                                <Image src="https://picsum.photos/60/60" roundedCircle />
                                <div className="review_Title_Block">
                                    <p id="reviewCard_name">Shilpa Rao</p>
                                    <div className="flag_block">
                                        <Image className="country_Flag" src={Flag} thumbnail />
                                        <p id="reviewCard_city">PALO ALTO. CA</p>
                                    </div>
                                </div>
                            </div>
                            <Card.Body>
                                <div className="comments"><p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                            </Card.Body>
                        </Card>
                        <Card className="review_Comment_Cards">
                            <div className="review_Card_Header">
                                <Image src="https://picsum.photos/60/60" roundedCircle />
                                <div className="review_Title_Block">
                                    <p id="reviewCard_name">Shilpa Rao</p>
                                    <div className="flag_block">
                                        <Image className="country_Flag" src={Flag} thumbnail />
                                        <p id="reviewCard_city">PALO ALTO. CA</p>
                                    </div>
                                </div>
                            </div>
                            <Card.Body>
                                <div className="comments"><p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default MainComp;