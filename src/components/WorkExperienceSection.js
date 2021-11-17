import { Component } from 'react';
import { Space, Typography } from '@douyinfe/semi-ui';
import WorkExpItem from './WorkExpItem';
import { Hbreak } from "./Hbreak";
import WorkExperience from '../data/WorkExperienceData';
import Publication from "../data/PublicationData";
import SocialWork from "../data/SocialWorkData"
import SocialItem from "./SocialItem";
import PublicationItem from "./PublicationItem";

// TODO: *Section can be decouple
class WorkExperienceSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workExp: WorkExperience,
            wrapperId: props.id !== undefined ? props.id : 'work-experience-section',
        };
    }

    render() {
        const resumeItem = this.state.workExp.map((item) => <WorkExpItem key={ item.id } item={ item }/>);
        const { Title } = Typography;
        return (
            <div id={ this.state.wrapperId } className="work-experience-section-wrapper">
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
            socialWorks: SocialWork,
            wrapperId: props.id !== undefined ? props.id : 'social-work-section',
        }
    }

    render() {
        const { Title } = Typography;
        const socialItem = this.state.socialWorks.map((item) => <SocialItem key={ item.id } item={ item }/>);
        return (
            <div id={ this.state.wrapperId } className="social-work-section-wrapper">
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
            publications: Publication,
            wrapperId: props.id !== undefined ? props.id : 'publication-section',
        }
    }

    render() {
        const publications = this.state.publications.map((item) => <PublicationItem key={ item.id } item={ item }/>);
        const { Title } = Typography;
        return (
            <div id={ this.state.wrapperId } className="publication-section-wrapper">
                <Title heading={ 3 }>Publications</Title>
                <Hbreak border/>
                <Space vertical spacing={ "loose" } align={ "start" }>
                    { publications }
                </Space>
                <div className="publication-section-content">{ this.props.children }</div>
            </div>
        );
    }
}


export { WorkExperienceSection, PublicationSection, SocialWorkSection };
