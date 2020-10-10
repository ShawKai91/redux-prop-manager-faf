import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../history';


export default function(ComposedComponent) {
    class Authentication extends Component {
        UNSAFE_componentWillMount() {
            if(!this.props.authenticated) {
                history.push('/')
            }
        }
        UNSAFE_componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                history.push('/');
            }
        }
        render() {
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        const { authenticated } = state.auth;
        return { authenticated } 
    }
    
    return connect(mapStateToProps)(Authentication)
}
