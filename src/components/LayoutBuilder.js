import { Component } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import ProfileSection from './ProfileSection';
import Navbar from './layout/Navbar';
import Foot from './layout/Foot';
import ResumeSection from './ResumeSection';

class LayoutBuilder extends Component {
  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <Layout
        style={{
          display: 'flex',
          border: '1px solid var(--semi-color-border)',
          height: '100%'
        }}
      >
        <Header>
          <Navbar />
        </Header>
        <Content
          style={
            { padding: '30px' } // align...
          }
        >
          <ProfileSection />
          <ResumeSection />
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    );
  }
}

export default LayoutBuilder;
