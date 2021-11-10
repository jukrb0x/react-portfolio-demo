import { Button, Skeleton, TextArea, Input } from '@douyinfe/semi-ui';
import { Component } from 'react';
import axios from 'axios';
class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      respText: String,
      url: 'localhost:8080/stupid_demo_war_exploded/xmu'
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

  axiosGetTest() {
    // it should accept url as a parameter and return the response
    const reqUrl = `//${this.state.url}`;
    axios
      .get(reqUrl)
      .then((res) => {
        this.setState({
          respText: res.data
        });
      })
      .catch((err) => {
        this.setState({
          respText: err
        });
      });
  }

  handleChange(value, e) {
    console.log(this.state);
    this.setState({
      url: value
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
            <Input
              placeholder="request url"
              addonBefore="http://"
              defaultValue={this.state.url}
              autofocus
              showClear
              onChange={this.handleChange.bind(this)}
            />
            <Button onClick={() => this.axiosGetTest()}>axios get</Button>
            <TextArea value={this.state?.respText} />
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
