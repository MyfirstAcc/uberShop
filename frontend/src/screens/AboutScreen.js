import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <p class="h-card">
                <img class="u-photo" src="https://example.org/photo.png" alt="" />
                <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
                <a class="u-email" href="mailto:jbloggs@example.com">jbloggs@example.com</a>,
                <span class="p-street-address">17 Austerstræti</span>
                <span class="p-locality">Reykjavík</span>
                <span class="p-country-name">Iceland</span>
            </p>
        </FormContainer>
    )
}

export default LoginScreen