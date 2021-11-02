import { IconBytedanceLogo } from "@douyinfe/semi-icons";
import { Component } from "react";

class Foot extends Component {
    render() {
        return (
            <div
                style={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    color: 'var(--semi-color-text-2)',
                    backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                } }
            >
            <span
                style={ {
                    display: 'flex',
                    alignItems: 'center',
                } }
            >
                <IconBytedanceLogo size='large' style={ { marginRight: '8px' } }/>
                <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
              </span>
                <span>
                <span style={ { marginRight: '24px' } }>Customer Service</span>
                <span>Feedback</span>
              </span>
            </div>
        )
    }
}

export default Foot;