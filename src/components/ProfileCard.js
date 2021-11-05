import { Skeleton } from '@douyinfe/semi-ui';
import { Component } from 'react';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.fakeLoader = setTimeout(() => this.fakeLoading(), 3000);
    console.log('fake loading is loading now');
    console.log('is loading: ', this.state.isLoading);
  }

  componentWillUnmount() {
    clearTimeout(this.fakeLoader);
  }

  fakeLoading() {
    this.setState({
      isLoading: false
    });
    console.log('fake loading done\nis loading', this.state.isLoading);
  }

  render() {
    return (
      <div style={{ backgroundColor: 'var(--semi-color-bg-1)' }} className={'profile-card'}>
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid var(--semi-color-border)',
            height: '376px',
            padding: '32px'
          }}
        >
          <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={this.state.isLoading}>
            <p>Hi, Bytedance dance dance.</p>
            <p>Hi, Bytedance dance dance.</p>
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
