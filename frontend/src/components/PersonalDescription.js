import { Component } from 'react';
import { Typography } from "@douyinfe/semi-ui";

export default class PersonalDescription extends Component {
    render() {
        const { Paragraph } = Typography;
        return (
            <Paragraph className="personal-description">
                I am a full-stack software engineering based in Amoy.
            </Paragraph>
        );
    }
}