import React, { Component } from 'react';

import Button from '../button';

import history from '../../history';

import { ROOT_URL } from '../../config';
import RequireAdmin from '../auth/requireAmin';

class NewsletterLatest extends Component {

    handleEdit = () => {
        history.push(`/newsletter/edit/${this.props._id}`);
    }
        
    render() {
        const { title, imageUrl, body } = this.props;
        return (
            
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={imageUrl}/>
                {/* <img className='newsletter-latest__image' src={`${ROOT_URL}/${imageUrl}`}/> */}
                <RequireAdmin>
                    <Button className='newsletter-latest__button' icon='fas fa-pencil-alt'
                        callback={() => this.handleEdit()} 
                    />
                </RequireAdmin>
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;