import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Вход</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Login</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Доставка</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Shipping</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Опалата</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Payment</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Оформление заказа</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Оформление заказа</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
