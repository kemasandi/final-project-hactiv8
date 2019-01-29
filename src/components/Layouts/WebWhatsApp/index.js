import React from 'react'
import { Section, Content, Columns, Column, Title, Field, Control, Checkbox } from 'bloomer';
import logoHeader from '../../../assets/images/icon-header.svg'
import barcode from '../../../assets/images/barcode.png';
import { Link } from 'react-router-dom'

const WebWhatsApp = () => {
    return (
        <div className="web-whatsapp">
            <Section className="top-section">
                <div>
                    <Link to="/"><img src={logoHeader}/></Link>
                </div>
            </Section>
            <Section className="main-desc">
                <Content>
                    <Columns>
                        <Column isSize={8}>
                            <Title isSize={3}>To use WhatsApp on your computer:</Title>
                            <ul>
                                <li>Open WhatsApp on your phone</li>
                                <li>Tap Menu or Setting and select WhatsApp Web</li>
                                <li>Point your phone to this screen to capture the code</li>
                            </ul>
                            <a>Need help to get started?</a>
                        </Column>
                        <Column isSize={4}>
                            <img src={barcode}></img>
                            <Field>
                                <Control>
                                    <Checkbox> Keep me signed in </Checkbox>
                                </Control>
                            </Field>
                        </Column>
                    </Columns>
                </Content>
                <Content>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/o_Fg7_MBzX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Content>
            </Section>

        </div>
    )
}

export default WebWhatsApp