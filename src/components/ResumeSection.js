import { Component } from 'react';
import { Space, Typography } from '@douyinfe/semi-ui';
import ResumeItem from './ResumeItem';
import { Hbreak } from "./Hbreak";
import WorkExperience from '../data/WorkExperience';
import Publications from "../data/Publications";

// TODO: *Section can be decouple
class ResumeSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workExp: WorkExperience,
        };
    }

    render() {
        const resumeItem = this.state.workExp.map((item) => <ResumeItem key={ item.id } item={ item }/>);
        const { Title } = Typography;
        return (
            <div className="resume-section-wrapper">
                <Title heading={ 3 }>Work experience</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    { resumeItem }
                </Space>
                <div className="resume-section-content">{ this.props.children }</div>
            </div>
        );
    }
}

class PublicationSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publications: Publications
        }
    }

    render() {
        const { Title } = Typography;
        return (
            <div className="publication-section-wrapper">
                <Title heading={ 3 }>Publication</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    {/*{ resumeItem }*/ }
                </Space>
                <div className="publication-section-content">{ this.props.children }</div>
            </div>
        );
    }
}

export { ResumeSection, PublicationSection };
