import { Component } from "react";

class Hbreak extends Component {
    // create a beautiful <hr /> break
    constructor(props) {
        super(props);
        this.state = {
            border: props.border !== undefined,
            height: props.height !== undefined ? props.height : 1,
        }
    }

    render() {
        if (this.props.border) {
            return (
                <div
                    style={ {
                        marginTop: "0.2rem",
                        borderTop: "1px solid rgba(var(--semi-grey-1), 1)",
                        marginBottom: (this.state.height - 0.2) + "rem"
                    } }
                />
            )
        } else {
            return (
                <div
                    style={ {
                        marginTop: this.state.height + "rem",
                    } }
                />

            )
        }
    }


}

export { Hbreak };



