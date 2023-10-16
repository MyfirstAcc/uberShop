import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" rounded aria-label="Eleventh navbar example">
                <div className="container-fluid">

                    <LinkContainer to='/'>

                        <Navbar.Brand>UberShop</Navbar.Brand>

                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav mb-2 mb-md-0" />
                    <Navbar.Collapse id="basic-navbar-nav ">

                        <Nav className="me-auto">
                            <LinkContainer to='/catalog'>
                                <Nav.Link><i className="fa fa-bars"></i>Каталог</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Корзина</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link ><i className="fa fa-info-circle"></i>О нас</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Профиль</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link><i className="fas fa-user"></i>Войти</Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Админка' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Пользователь</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Продукты</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Заказы</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}

                           



                        </Nav>
                        <SearchBox />

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    )
}

export default Header
