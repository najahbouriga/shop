import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

class Cart extends Component {
    render() {
        return (
            <div>
                i m a cat component
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);
