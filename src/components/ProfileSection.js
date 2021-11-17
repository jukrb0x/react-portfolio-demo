import {
    Typography,
    Avatar,
    Space
} from '@douyinfe/semi-ui';
import { Component } from 'react';
import personalInfo from '../data/PersonalData';
import { IconApartment, IconFlag, IconLanguage, IconLink, IconMail, IconUserCardPhone } from '@douyinfe/semi-icons';

export default class ProfileSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: personalInfo
        };
        // FIXME: combine firstName and lastName to a new state?
    }

    render() {
        const { Title, Text } = Typography;
        const { firstName, lastName, tel, email, location, affiliation, website, language } = this.state.info;
        return (
            <div className={ 'profile-card-wrapper' }>
                <div className="profile-card-content">
                    <div className={ 'profile-card-avatar-wrapper' }>
                        <Avatar
                            // TODO: the size of Avatar should be changed with media query
                            // "media query not in css"
                            className={ "profile-avatar" }
                            alt={ 'avatar' }
                            size={ 'extra-large' }
                            src={ 'https://avatars.githubusercontent.com/u/15688641?v=4' }
                        />
                        <Title className="title" heading={ 3 }>
                            { firstName } { lastName }
                        </Title>
                        <Text className="subtitle">
                            <i>Full-stack Engineer</i>
                        </Text>
                    </div>
                    <div className={ 'profile-card-details-wrapper' }>
                        <Space vertical align={ "start" } spacing={ "tight" }>
                            {/* TODO: decouple this */ }
                            <div className="affiliation">
                                <Space>
                                    <IconApartment
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        { affiliation }
                                    </Text>
                                </Space>
                            </div>
                            <div className="location">
                                <Space>
                                    <IconFlag
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        { location }
                                    </Text>
                                </Space>
                            </div>
                            <div className="website">
                                <Space>
                                    <IconLink
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        <a href={ website } target={ '_blank' } rel="noreferrer">
                                            { website }
                                        </a>
                                    </Text>
                                </Space>
                            </div>
                            <div className="email">
                                <Space>
                                    <IconMail
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        { email }
                                    </Text>
                                </Space>
                            </div>
                            <div className="tel">
                                <Space>
                                    <IconUserCardPhone
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        { tel }
                                    </Text>
                                </Space>
                            </div>
                            <div className="lang">
                                <Space>
                                    <IconLanguage
                                        style={ {
                                            color: 'var(--semi-color-text-1)',
                                        } }
                                    />
                                    <Text strong type={ 'secondary' }>
                                        { language }
                                    </Text>
                                </Space>
                            </div>
                        </Space>
                    </div>
                </div>
            </div>
        );
    }
}
