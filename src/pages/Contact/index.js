import { Component } from "react";
import { Form, Button, Typography } from "@douyinfe/semi-ui";
import ProfileSection from "../../components/ProfileSection";

export default class Contact extends Component {
    componentDidMount() {
        document.title = "Contact - Jinbiao's Resume";
    }

    handleSubmit(values) {
        console.log(values)
    }

    syncValidate(values) {
        console.log(values)
    }

    render() {
        const { Title } = Typography;
        const { Input, Checkbox } = Form;
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
                        <Form validateFields={ this.syncValidate }
                              onSubmit={ values => this.handleSubmit(values) }
                              style={ { width: 400 } }>
                            {/*FIXME*/ }
                            { ({ formState, values, formApi }) => (
                                <>
                                    <Input
                                        field="name"
                                        label="Name"
                                        style={ { width: '100%' } }
                                        trigger='blur'
                                    />

                                    <Input
                                        field="name"
                                        label="名称（Input）"
                                        style={ { width: '100%' } }
                                        trigger='blur'
                                    />

                                    <Input
                                        field="name"
                                        label="名称（Input）"
                                        style={ { width: '100%' } }
                                        trigger='blur'
                                    />

                                    <Checkbox field='agree' noLabel>I have read and agree to the terms of
                                        service</Checkbox>
                                    <div style={ {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center'
                                    } }>
                                        <Button disabled={ !values.agree } htmlType='submit'
                                                type="tertiary">Send</Button>
                                    </div>
                                </>
                            ) }
                        </Form>
                    </div>
                </div>
            </div>
        )

    }
}