import { Component } from "react";
import ProfileSection from "../../components/ProfileSection";
import { PublicationSection, WorkExperienceSection, SocialWorkSection } from "../../components/WorkExperienceSection";
import { Anchor, Typography } from "@douyinfe/semi-ui";
import PersonalInfo from "../../data/PersonalData";
import PersonalDescription from "../../components/PersonalDescription";
import { Hbreak } from "../../components/Hbreak";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `${ PersonalInfo.firstName } ${ PersonalInfo.lastName }`
        }
    }

    componentDidMount() {
        document.title = "Home - Jinbiao's Resume";
    }

    render() {
        const { Title } = Typography;
        const getContainer = () => {
            return document.querySelector('window');
        }
        return (
            <div className={ "home-content-wrapper" }>
                <ProfileSection/>
                <div className={ "home-content" }>
                    <div className="home-content-header-wrapper">
                        <div className={ "home-content-header" }>
                            <Title heading={ 1 }>Hi! 👋</Title>
                            <Title heading={ 4 } type={ "tertiary" }>I am { this.state.name }, this is my
                                resume.</Title>
                            <PersonalDescription/>
                        </div>
                    </div>
                    <div className={ "home-content-resume" }>
                        <WorkExperienceSection/>
                        <Hbreak/>
                        <SocialWorkSection/>
                        <Hbreak/>
                        <PublicationSection/>
                    </div>
                </div>
                <div className={"float-anchor"}>
                    <Anchor
                        getContainer={ getContainer }
                        offsetTop={ 100 }
                        targetOffset={ 100 }
                    >
                        <Anchor.Link href="#work-experience-section" title="Work Experience"/>
                        <Anchor.Link href="#social-work-section" title="Social Practice"/>
                        <Anchor.Link href="#publication-section" title="Publications"/>
                    </Anchor>
                </div>
            </div>
        );
    }
}