import { Component } from 'react';
import { Space, Typography } from '@douyinfe/semi-ui';
import ResumeItem from './ResumeItem';
import { Hbreak } from "./Hbreak";
import WorkExperience from '../data/WorkExperience';
import Publication from "../data/PublicationData";
import SocialWork from "../data/SocialWorkData"
import SocialItem from "./SocialItem";

// TODO: *Section can be decouple
class WorkExperienceSection extends Component {
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
                <Title heading={ 3 }>Work Experience</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    { resumeItem }
                </Space>
                {/*FIXME: this is an experiment*/ }
                {/*<div className="resume-section-content">{ this.props.children }</div>*/ }
            </div>
        );
    }
}

class SocialWorkSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socialWorks: SocialWork
        }
    }

    render() {
        const { Title } = Typography;
        const socialItem = this.state.socialWorks.map((item) => <SocialItem key={ item.id } item={ item }/>);
        return (
            <div className="socialwork-section-wrapper">
                <Title heading={ 3 }>Social Practice</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    { socialItem }
                </Space>
                <div className="socialwork-section-content">{ this.props.children }</div>
            </div>

        )
    }

}

class PublicationSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publications: Publication
        }
    }

    render() {
        const { Title } = Typography;
        return (
            <div className="publication-section-wrapper">
                <Title heading={ 3 }>Publications</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    {/*{ resumeItem }*/ }
                </Space>
                <div className="publication-section-content">{ this.props.children }</div>
            </div>
        );
    }
}


export { WorkExperienceSection, PublicationSection, SocialWorkSection };
