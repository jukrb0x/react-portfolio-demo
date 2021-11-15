import { IconBytedanceLogo } from '@douyinfe/semi-icons';
import { Component } from 'react';
import personalInformation from '../data/personalInfo';

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
        <span
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
          <span>
            Copyright © 2021 {this.state.info.firstName} {this.state.info.lastName}. All Rights
            Reserved.
          </span>
        </span>
        <span>
          <span> right </span>
        </span>
      </div>
    );
  }
}

export default Foot;
