import { IconLikeHeart, IconTerminal } from '@douyinfe/semi-icons';
import { Component } from 'react';
import personalInformation from '../data/PersonalData';
import { Space } from "@douyinfe/semi-ui";

class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: personalInformation
        };
    }


    render() {
        return (
            <div className="foot-wrapper">
                <div
                    style={ {
                        display: 'flex',
                        alignItems: 'center'
                    } }
                >
                    <IconTerminal size="large" style={ { marginRight: '8px' } }/>
                    <div className={"foot-copyright"}>
                    <span>Copyright &copy; 2021 { this.state.info.firstName } { this.state.info.lastName }.&nbsp;</span>
                    <span>All Rights Reserved.</span></div>
                </div>
                <div>
                    <Space spacing={ "small" }>
                        <span>Build with&nbsp;</span>
                        <IconLikeHeart style={ { color: "rgba(var(--semi-red-5), 1)" } }/>
                        <span>&nbsp;in Amoy</span>
                    </Space>
                </div>
            </div>
        );
    }
}

export default Foot;
