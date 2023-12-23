import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';
import ContactMap from '../components/YandexMap'; // Импортируйте ContactMap

function LoginScreen({ location, history }) {
    return (
        <div>
            <section>
                <h2>О нас</h2>
                <p>
                    Добро пожаловать в мир электронной коммерции! Мы предоставляем гаджеты
                    по отличным ценам!
                </p>
                <p>
                    Всегда рады видеть Вас в нашем офисе по адресу: <u>набережная реки
                        Фонтанки, 114К, Санкт-Петербург</u>.</p>
                <p>
                    Время работы ПН-ВС: <u>11:00-21:00</u>.
                </p>
            </section>
            <section>
                <h2></h2>
                <ContactMap />
            </section>
        </div>
    );
}

export default LoginScreen;
