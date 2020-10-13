import React, { Component } from 'react';
import Icon from '../icon';

class RequestsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                <Icon icon='fas fa-exclamation-triangle'/>
            </div>
        )
    }
}

export default RequestsItem; 