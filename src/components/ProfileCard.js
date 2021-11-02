import { Skeleton } from "@douyinfe/semi-ui";
import { Component } from "react";

class ProfileCard extends Component {
    render() {
        let isLoading = true;
        // setTimeout(() => {
        //     isLoading = false
        // }, 3000);
        return (
            <div
                style={ { backgroundColor: 'var(--semi-color-bg-1)' } }
                className={ "profile-card" }>
                <div
                    style={ {
                        borderRadius: '10px',
                        border: '1px solid var(--semi-color-border)',
                        height: '376px',
                        padding: '32px'
                    } }
                >
                    <Skeleton placeholder={ (<Skeleton.Paragraph rows={ 2 }/>) } loading={ isLoading }>
                        <p>Hi, Bytedance dance dance.</p>
                        <p>Hi, Bytedance dance dance.</p>
                    </Skeleton>
                </div>
            </div>
        )
    }
}

export default ProfileCard;
