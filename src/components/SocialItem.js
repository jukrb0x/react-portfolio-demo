import { Component } from "react";
import { Space, Typography } from "@douyinfe/semi-ui";

export default class SocialItem extends Component {
    render() {
        const { Title, Text, Paragraph } = Typography;
        const { title, description, datetime } = this.props.item;
        return (
            <div className="social-item-wrapper">
                <div className="social-item-title">
                    <Space align={ "end" }>
                        <span><Title heading={ 5 }>{ title }</Title></span>
                        <span><Text type={ "tertiary" }>({ datetime })</Text></span>
                    </Space>
                </div>
                <div className="social-item-body">
                    <Paragraph>
                        { description }
                    </Paragraph>
                </div>
            </div>
        );
    }
}