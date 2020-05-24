import React, { Component } from 'react';
import ReactLoading from 'react-loading';
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <ReactLoading className="react-loading" type="spinningBubbles" color="black" height={'40px'} width={'40px'} />
                <h4>loading</h4>
            </div>
        );
    }
}

export default Loading;