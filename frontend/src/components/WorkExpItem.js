import { Component } from 'react';
import { Space, Typography } from "@douyinfe/semi-ui";

export default class WorkExpItem extends Component {
    render() {
        const { title, datetime, description, profession } = this.props.item;
        const { Title, Paragraph, Text } = Typography;
        return (
            <div className="resume-item-wrapper">
                <div className="resume-item-title">
                    <Title heading={ 5 }>{ title }</Title>
                </div>
                <div className={ "pro-wrapper" }>
                    <Space size={ "medium" } align={ "start" }>
                        <div className="resume-item-pro">
                            <Text type={ "secondary" } strong>
                                { profession }
                            </Text>
                        </div>
                        <div className="resume-item-time">
                            <Text type={ "tertiary" }>
                                ({ datetime })
                            </Text>
                        </div>
                    </Space>
                </div>
                <div className="resume-item-description">
                    <Paragraph>
                        { description }
                    </Paragraph>
                </div>
            </div>
        );
    }
}
