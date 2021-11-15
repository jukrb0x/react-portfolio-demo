import {
    Button,
    Skeleton,
    Typography,
    TextArea,
    Input,
    Avatar,
    AvatarGroup,
    Space
} from '@douyinfe/semi-ui';
import { Component } from 'react';
import personalInformation from '../data/personalInfo';
import { IconApartment, IconLink, IconMail, IconUserCardPhone } from '@douyinfe/semi-icons';

export default class ProfileSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: personalInformation
        };
        // FIXME: combine firstName and lastName to a new state?
    }

    render() {
        const { Title, Paragraph, Text } = Typography;
        const { firstName, lastName, tel, email, location, website } = this.state.info;
        return (
            <div className={ 'profile-card-wrapper' }>
                <div className="profile-card-content">
                    <div className={ 'profile-card-avatar-wrapper' }>
                        <Avatar // TODO: decouple details
                            alt={ 'avatar' }
                            size={ 'extra-large' }
                            src={ 'https://avatars.githubusercontent.com/u/15688641?v=4' }
                        />
                        <Title className="title" heading={ 3 }>
                            { firstName } { lastName }
                        </Title>
                    </div>
                    <div className={ 'profile-card-details-wrapper' }>
                        {/* decouple this */ }
                        <div className="location">
                            <Space>
                                <IconApartment/>
                                <Text strong type={ 'secondary' }>
                                    { location }
                                </Text>
                            </Space>
                        </div>
                        <div className="website">
                            <Space>
                                <IconLink/>
                                <Text strong type={ 'secondary' }>
                                    <a href={ website } target={ '_blank' }>
                                        { website }
                                    </a>
                                </Text>
                            </Space>
                        </div>
                        <div className="email">
                            <Space>
                                <IconMail/>
                                <Text strong type={ 'secondary' }>
                                    { email }
                                </Text>
                            </Space>
                        </div>
                        <div className="tel">
                            <Space>
                                <IconUserCardPhone/>
                                <Text strong type={ 'secondary' }>
                                    { tel }
                                </Text>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
