import React, { useEffect }  from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    useEffect(() => {
        // Вставьте сюда код виджета "Поделиться" от Яндекса
        const script = document.createElement('script');
        script.src = 'https://yastatic.net/share2/share.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          // Очистите скрипт при размонтировании компонента, если это необходимо
          document.body.removeChild(script);
        };
      }, []);



    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; ubsershop</Col>
                </Row>

                <Row>
                   <Col className="text-center py-3"> <a href="mailto:s.strt2011@yandex.ru"> Моя почта </a> </Col>
                </Row>
            </Container>
            <div className="text-center py-3 ya-share2" data-curtain data-shape="round" data-limit="3" data-services="messenger,vkontakte,telegram,whatsapp"></div>
        </footer>
    )
}

export default Footer
