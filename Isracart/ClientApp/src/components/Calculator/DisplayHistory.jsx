import React, { Component } from 'react';

class DisplayHistory extends Component {
    render() {
        return (

            // <span style={{ fontSize:20}} className={this.getBadgeClasses()}>{this.props.val}</span>
            <span className="form-fields">{this.props.val}</span>
        );
    }

    
}

export default DisplayHistory;
