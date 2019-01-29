import React from 'react';
import { Section, Content, Columns, Column, Title } from 'bloomer';
import mainImg from '../../../assets/images/home-phone.png';
import featureRightImg from '../../../assets/images/home-feature-right.png'
import Header from '../../Header';
import Footer from '../../Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="home">
                <Section className="main-desc">
                    <Content>
                        <Columns>
                            <Column isSize={7}>
                            <Title tag='h1' className="has-text-weight-light">
                                Simple. Secure. Reliable messaging.
                            </Title>
                            <p>
                                With WhatsApp, you'll get fast, simple, secure messaging and calling 
                                for free*, available on phones all over the world.
                            </p>
                            <span>
                            * Data charges may apply. Contact your provider for details.
                            </span>
                            <ul>
                                <li>Android</li>
                                <li>iPhone</li>
                                <li>Mac or Windows PC</li>
                                <li>Windows Phone</li>
                            </ul>
                            </Column>
                            <Column isSize={5}>
                            <img src={mainImg}></img>
                            </Column>
                        </Columns>
                    </Content>
                </Section>
                <Section className="feature">
                    <Content>
                        <Columns>
                            <Column isSize='1/2' className="feature-left">
                            <Title tag='h3' className="has-text-weight-light">
                                WhatsApp Business App
                            </Title>
                            <p>
                                WhatsApp Business is an Android app which is free to download, 
                                and was built with the small business owner in mind. With the app, 
                                businesses can interact with customers easily by using tools 
                                to automate, sort, and quickly respond to messages.
                                If you're a large business, learn more about the WhatsApp Business API.
                            </p>
                            <div className="feature-left-img"></div>
                            </Column>
                            <Column isSize='1/2' className="feature-right">
                            <div className="feature-left-img">
                                <img src={featureRightImg}></img>
                            </div>
                            <p className="p-first">
                                END-TO-END ENCRYPTION
                            </p>
                            <Title tag='h3' className="has-text-weight-light">
                                Security by Default
                            </Title>
                            <p className="p-last"> 
                                Some of your most personal moments are shared on WhatsApp, 
                                which is why we built end-to-end encryption into the latest 
                                versions of our app. When end-to-end encrypted, your messages
                                and calls are secured so only you and the person you're 
                                communicating with can read or listen to them, and nobody
                                in between, not even WhatsApp.
                            </p>
                            </Column>
                        </Columns>
                    </Content>
                </Section>
                <div className="button-home">
                    <span>EXPLORE FEATURES</span> 
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;