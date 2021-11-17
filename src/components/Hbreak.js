import { Component } from "react";

class Hbreak extends Component {
    // create a beautiful <hr /> break
    constructor(props) {
        super(props);
        this.state = {
            border: props.border !== undefined
        }
    }

    render() {
        if (this.props.border) {
            return (
                <div
                    style={ {
                        marginTop: "0.2rem",
                        borderTop: "1px solid rgba(var(--semi-grey-1), 1)",
                        marginBottom: "0.8rem"
                    } }
                />
            )
        } else {
            return (
                <div
                    style={ {
                        marginTop: "1rem",
                    } }
                />

            )
        }
    }


}

export { Hbreak };



