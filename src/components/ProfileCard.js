import { Button, Skeleton, TextArea } from '@douyinfe/semi-ui';
import { Component } from 'react';
import axios from 'axios';
class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: String
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

  axiosGet() {
    axios
      .get('//localhost:8080/stupid_demo_war_exploded/xmu')
      .then((res) => {
        // console.log(res);
        this.setState({
          text: res.data
        });
        console.log(this.state.text);
      })
      .catch((err) => {
        console.log(err);
      });
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
            <h1>SWE306 test</h1>
            <p>abaaba</p>
            <Button onClick={() => this.axiosGet()}>axios get</Button>
            <TextArea value={this.state.text} />
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
