import { Component } from 'react';
import { Space } from '@douyinfe/semi-ui';
import resumeData from '../data/ResumeData';
import ResumeItem from './ResumeItem';

export default class ResumeSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resumes: resumeData
        };
    }

    render() {
        const resumeItem = this.state.resumes.map((item) => <ResumeItem key={ item.id } item={ item }/>);
        return (
            <div className="resume-section-wrapper">
                {/*TODO Hello above*/ }
                <Space vertical spacing={ "loose" } align={ "start" }>
                    Resume section title
                    {/* TODO: use semi token to do with dark mode */ }
                    { resumeItem }
                </Space>
                <div className="resume-section-content">{ this.props.children }</div>
            </div>
        );
    }
}
