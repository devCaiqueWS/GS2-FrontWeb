import React from 'react';
import '../style/Contato.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import bot from '../assets/bot-suporte.png';


function Contato (){
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contato">
            <Container>
                <Row>
                    <Col md={6}>
                    <div className="contato-info">
                            <h2>Informações de Contato</h2>
                            <p><strong>Email:</strong> contato@lifesync.com</p>
                            <p><strong>Telefone:</strong> (11) 1234-5678</p>

                            <div className="redes-sociais">
                                <a href="https://www.facebook.com">
                                    <FaFacebook size={32} />
                                </a>
                                <a href="https://www.instagram.com">
                                    <FaInstagram size={32} />
                                </a>
                                <a href="https://www.linkedin.com">
                                    <FaLinkedin size={32} />
                                </a>
                                
                            </div>
                            <img src={bot} alt="" />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="contato-form">
                            <h2>Fale Conosco</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Seu Nome" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Seu Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Mensagem</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Sua Mensagem" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contato;
