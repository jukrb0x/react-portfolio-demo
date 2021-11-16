import { Component } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import Navbar from '../layout/Navbar';
import Foot from '../layout/Foot';
import MainContent from '../layout/MainContent';

class LayoutBuilder extends Component {
    render() {
        const { Header, Footer, Content } = Layout;
        return (
            <Layout className={ "layout-wrapper" }>
                <Header>
                    <Navbar/>
                </Header>
                <Content className={"main-content-wrapper"}>
                    <MainContent/>
                </Content>
                <Footer>
                    <Foot/>
                </Footer>
            </Layout>
        );
    }
}

export default LayoutBuilder;
