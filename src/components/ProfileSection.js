import { Button, Skeleton, TextArea, Input } from '@douyinfe/semi-ui';
import { Component } from 'react';
import axios from 'axios';
export default class ProfileSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.fakeLoader = setTimeout(() => this.fakeLoading(), 1000);
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
            height: '200px',
            padding: '32px'
          }}
        >
          <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={this.state.isLoading}>
            <h1>SWE306 test</h1>
            <p>abaaba</p>
          </Skeleton>
        </div>
      </div>
    );
  }
}
