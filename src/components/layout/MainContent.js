import ProfileCard from "../ProfileCard";
import ContentCard from "../ContentCard";
import { Component } from "react";

class MainContent extends Component {
    render() {
        return (
            <div
                style={ {
                    padding: '24px',
                    backgroundColor: 'var(--semi-color-bg-0)'
                } }>
                asd
                <ProfileCard/>
                {/*/!*<ContentCard/>*/ }*/}
                {/* ...another card */ }
            </div>
        )
    }
}

export default MainContent;