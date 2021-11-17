import { Component } from "react";
import { Typography } from "@douyinfe/semi-ui";

export default class PublicationItem extends Component {
    render() {
        const { title, reference } = this.props.item;
        const { Text, Title } = Typography;
        return (
            <div className="pub-item-wrapper">
                <div className="pub-item-title">
                    <Title heading={ 5 }>{ title } </Title>
                    <Text><span dangerouslySetInnerHTML={ { __html: reference } }/></Text>
                </div>
                <div className="pub-item-body">

                </div>
            </div>
        );
    }
}