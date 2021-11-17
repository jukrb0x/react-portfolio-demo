import { Component } from "react";
import ProfileSection from "../../components/ProfileSection";
import { PublicationSection, ResumeSection } from "../../components/ResumeSection";
import { Typography } from "@douyinfe/semi-ui";
import personalInfo from "../../data/PersonalData";
import PersonalDescription from "../../components/PersonalDescription";
import { Hbreak } from "../../components/Hbreak";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `${ personalInfo.firstName } ${ personalInfo.lastName }`
        }
    }

    componentDidMount() {
        document.title = "Home - Jinbiao's Resume";
    }

    render() {
        const { Title } = Typography;
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
                        <ResumeSection/>
                        <Hbreak/>
                        <PublicationSection/>
                    </div>

                </div>
            </div>
        );
    }
}