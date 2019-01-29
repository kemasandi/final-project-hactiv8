import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { Section, Title, Control, Input, Content, Container, Columns, Column } from 'bloomer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, login, getPeopleData } from '../../../redux/Faq/actions';
import { Link, Router, Route } from 'react-router-dom';
import DetailInfo from './DetailInfo'


class Faq extends Component {
    componentDidMount() {
        this.props.getPeopleData()
    }
    render() {
        return (
            <div>
                <Header/>
                    <Section className="faq-main-sec">
                        <Content>
                            <Title isSize={1} className="has-text-weight-light">How can we help you?</Title>
                            <Control>
                                <Input isSize='large' placeholder='Type keyword to find answers' />
                            </Control>
                            <p>You can also browse the topics below to find what you are looking for.</p>
                        </Content>
                    </Section>
                    <Section className="faq-ask">
                        <Container>
                            <Title isSize={3} className="has-text-weight-light has-text-black">Frequently Asked Questions</Title>
                            <Columns>
                                {this.props.people.map((val,key)=>{
                                    return (
                                        key < 9 ?
                                        <Column key={key} isSize={4}>
                                            <Title isSize={5} className="has-text-weight-light">
                                                <Link to={`/faq/${val.id}`} component={DetailInfo}>{val.username}</Link>
                                            </Title>
                                            <ul>
                                                <li>{val.name}</li>
                                                <li>{val.email}</li>
                                                <li>{val.phone}</li>
                                            </ul>
                                        </Column> : ""
                                    )
                                })}
                            </Columns>
                        </Container>
                    </Section>
                <Footer/>
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    number: state.faq.number,
    name: state.faq.name,
    isLogin: state.faq.isLogin,
    people: state.faq.people,
    todos: state.faq.todos
})

const mapDispatchToProps = (dispatch) => bindActionCreators ({
    increment, login, getPeopleData
}, dispatch)

export default connect(mapStatetoProps,mapDispatchToProps)(Faq);







