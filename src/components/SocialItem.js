import { Component } from "react";
import { Space, Typography } from "@douyinfe/semi-ui";

export default class SocialItem extends Component {
    render() {
        const { Title, Text } = Typography;
        const { title, description, datetime } = this.props.item;
        return (
            <div className="social-item-wrapper">
                <div className="social-item-title">
                    <Space align={ "end" }>
                        <span><Title heading={ 4 }>{ title }</Title></span>
                        <span><Text type={ "tertiary" }>({ datetime })</Text></span>
                    </Space>
                </div>
                <div className="social-item-body">
                    { description }
                </div>
            </div>
        );
    }
}