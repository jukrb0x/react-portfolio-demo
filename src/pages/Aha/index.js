import { Component } from "react";
import axios from "axios";
import { Skeleton, Space, Tooltip, Typography } from "@douyinfe/semi-ui";
import ProfileSection from "../../components/ProfileSection";

export default class Aha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            baseUrl: "http://localhost:8080/My_Resume_Zhang_Jinbiao_war_exploded",
            getAhaApi: "/getAha",
            response: String
        }

    }

    componentDidMount() {
        document.title = "Aha! - Jinbiao's Resume"
        // TODO: sending request here
        this.requestContent();
    }

    requestContent() {
        const { baseUrl, getAhaApi } = this.state;
        const reqUrl = baseUrl + getAhaApi;
        axios.get(reqUrl).then(
            (res) => {
                this.setState({
                    response: res.data,
                    isLoading: false
                })
            }
        ).catch((err) => {
            this.setState({
                response: err.message,
                isLoading: false
            })
        })
    }

    render() {
        const { Paragraph, Title } = Typography;
        const { isLoading, response } = this.state;
        const SkeletonPlaceholder = (
            <div>
                <Skeleton.Title style={ { width: 120, marginBottom: "20px" } }/>
                <Skeleton.Paragraph rows={ 4 }/>
            </div>
        );
        return (
            <div className={ "aha-content-wrapper" }>
                <div className="aha-content-profile">
                    <ProfileSection/>
                </div>
                <Space vertical align={ "start" } className={ "aha-content" }>
                    <Tooltip
                        content={ "This page should return a short message from local Apache Tomcat Server (:8080) binding to a Java Servlet." }>
                        <div className={ "aha-content-header" }>
                            <Title heading={ 1 }>Congrats! 😎</Title>
                            <Title heading={ 4 } type={ "tertiary" }>You found this page</Title>
                        </div>
                    </Tooltip>
                    <div className={ "aha-content-body" }>
                        <Skeleton placeholder={ SkeletonPlaceholder } loading={ isLoading } active
                                  style={ { flex: 1 } }>
                            <Paragraph spacing={ "extended" }>{ response }</Paragraph>
                        </Skeleton>
                    </div>
                </Space>
            </div>
        )
    }
}