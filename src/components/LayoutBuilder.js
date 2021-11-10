import { Component } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import ProfileCard from './ProfileCard';
import Navbar from './layout/Navbar';
import Foot from './layout/Foot';
import Clock from './Clock';
import TodoList from '../TodoApp/TodoList';

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
          <ProfileCard />
          <Clock />
          <TodoList />
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    );
  }
}

export default LayoutBuilder;
