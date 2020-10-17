import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from './types';

import axios from 'axios';
import { ROOT_URL } from '../config';

export function fetchNewsletters() {
    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holidays Fam',
                body: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: 'ng industry. Lo yoooooo dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}
/* export function fetchNewsletters() {
    return function(dispatch) {
        const token = localStorage.getItem('token');
        const headers = {headers: {authorization: token}}
        axios.get(`${ROOT_URL}/newsletters`, headers)
            .then(response => {
                dispatch({
                    type: SET_NEWSLETTERS,
                    payload: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
} */


export function fetchNewsletterWithId(id) {
    return {
        type: FETCH_NEWSLETTER_ID,
        payload: id
    }
}

export function createNewNewsletter(userId, formData, success) {
    const token = localStorage.getItem('token');
    return function() {
        axios.post(`${ROOT_URL}/newsletters/new`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token,
                userId: userId
            }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function editNewsletter(itemId, formData, success) {
    const token = localStorage.getItem('token');
    const id = itemId;
    return function() {
        axios.post(`${ROOT_URL}/newsletters/edit/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: token
            }
        })
            .then(response => {
                console.log(response.data);
                success();
            })
            .catch(err => {
                console.log(err);
            }) 
    }
}