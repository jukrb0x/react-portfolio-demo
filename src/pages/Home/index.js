import { Component } from "react";
import ProfileSection from "../../components/ProfileSection";
import ResumeSection from "../../components/ResumeSection";

export default class Home extends Component {
    render() {
        return (
            <>
                <ProfileSection/>
                <ResumeSection/>
            </>
        );
    }
}