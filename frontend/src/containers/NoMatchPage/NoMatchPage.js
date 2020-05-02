import React, {Component} from "react";

class NoMatchPage extends Component {
    // componentWillMount() {
    //     const {staticContext} = this.props;
    //     if (staticContext) {
    //         staticContext.is404 = true;
    //     }
    // }

    render() {
        console.log(this.props);
        return (
            <div>404 Ops!</div>
        );
    }
}

export default NoMatchPage;