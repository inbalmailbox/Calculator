import React, { Component } from 'react';

class DisplayPanel extends Component {
    render() {
        return (

            // <span style={{ fontSize:20}} className={this.getBadgeClasses()}>{this.props.val}</span>
            <span>{this.props.val}</span>
        );
    }

    
}

export default DisplayPanel;
