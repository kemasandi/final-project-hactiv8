import React from 'react';
import { Footer, Container, Content, Columns, Column, Notification} from 'bloomer';


const FooterWa = (props) => {
    return (
        <div>
            <Footer>
                <Container>
                    <Content>
                        <Columns isCentered>
                            <Column isSize='1/4'>
                            <h6>WHATSAPP</h6>
                            <ul>
                                <li>Features</li>
                                <li>Security</li>
                                <li>Download</li>
                                <li>WhatsApp Web</li>
                                <li>Business</li>
                            </ul>
                            </Column>
                            <Column isSize='1/4'>
                            <h6>COMPANY</h6>
                            <ul>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Brand Center</li>
                                <li>Get in touch</li>
                                <li>Blog</li>
                            </ul>
                            </Column>
                            <Column isSize='1/4'>
                            <h6>DOWNLOAD</h6>
                            <ul>
                                <li>Mac/PC</li>
                                <li>Android</li>
                                <li>iPhone</li>
                                <li>Windows Phone</li>
                                <li>Nokia</li>
                            </ul>
                            </Column>
                            <Column isSize='1/4'>
                            <h6>HELP</h6>
                            <ul>
                                <li>FAQ</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                            </ul>
                            </Column>
                        </Columns>
                    </Content>
                </Container>
                </Footer>
                <Footer  className="footer-secondary">
                    <Columns isSize='small'>
                        <Container>
                            <Column isSize='1/4'>
                                <p>2018 © WhatsApp Inc.</p>
                            </Column>
                            <Column isSize='1/4'>
                                <a target="_blank">Privacy & Terms</a>    
                            </Column>
                        </Container>
                    </Columns>
                </Footer>
        </div>
    );
};

export default FooterWa;