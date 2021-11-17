import { Component } from "react";
import { Form, Button, Typography, Toast } from "@douyinfe/semi-ui";
import ProfileSection from "../../components/ProfileSection";

export default class Contact extends Component {
    // FIXME: handle formApi
    constructor(props) {
        super(props);
        this.syncValidate = this.syncValidate.bind(this);
    }

    componentDidMount() {
        document.title = "Contact - Jinbiao's Resume";
    }

    syncValidate(values) {
        console.log(values)
        const errors = {};

        function isValidEmail(address) {
            // regular syntax from
            // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
            // eslint-disable-next-line
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(address);

        }

        if (!values.name) {
            errors.name = "Let me know who you are";
        }

        if (isValidEmail(values.email) === false) {
            errors.email = "Invalid email address";
        }
        if (!values.message || values.message.length < 3) {
            errors.message = "Message must be at least 3 characters long";
        }
        if (!errors.email && !errors.message && !errors.name) {
            this.handleSubmit(values); // this is a bad idea
        }
        return errors;
    }

    handleSubmit(values) {
        // TODO: axios post to backend
        Toast.info('Your message is submitted!');
    }


    render() {
        const { Title } = Typography;
        const { Input, TextArea } = Form;
        return (
            <div className={ "contact-content-wrapper" }>
                <div className="contact-content-profile">
                    <ProfileSection/>
                </div>
                <div className="contact-content">
                    <div className={ "contact-content-header" }>
                        <Title heading={ 1 }>Contact</Title>
                        <Title heading={ 4 } type={ "tertiary" }>Say something to me!</Title>
                    </div>
                    <div className="contact-content-body">
                        <Form labelPosition='inset'
                              validateFields={ this.syncValidate }
                              onSubmit={ values => this.handleSubmit(values) }
                        >
                            {
                                ({ formState, values, formApi }) => (
                                    <>
                                        <Input
                                            rules={ [{ required: true, message: 'Please input your name!' }] }
                                            field="name"
                                            label="Name"
                                            style={ { width: '100%' } }
                                            trigger='blur'
                                        />

                                        <Input
                                            rules={ [{ required: true, message: 'Please input your email!' }] }
                                            field="email"
                                            label="E-mail"
                                            style={ { width: '100%' } }
                                            trigger='blur'
                                        />

                                        <TextArea
                                            field="message"
                                            rules={ [{ required: true, message: 'You got to say something!' }] }
                                            placeholder={ "Say something here!" }
                                            style={ { width: '100%' } }
                                            trigger='blur'
                                        />

                                        <div style={ {
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center'
                                        } }>
                                            <Button htmlType='submit'
                                                    type="tertiary">Send</Button>
                                        </div>
                                    </>
                                )
                            }
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}