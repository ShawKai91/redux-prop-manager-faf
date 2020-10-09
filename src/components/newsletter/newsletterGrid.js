import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
                {/* + btn */}
                <NewsletterBox date={new Date()}/>
                {/* arch */}
                {/* content */}
            </div>
        )
    }
}

export default NewsletterGrid; 