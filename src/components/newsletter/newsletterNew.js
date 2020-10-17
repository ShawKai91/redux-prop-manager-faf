import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from "./newsletterNewForm";

class NewNewsletter extends Component {

  onSubmit = fields => {

    const { title, body, image } = fields;

    var formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image);
        console.log('formData:', formData)
        console.log('fields:', fields)

    this.props.createNewNewsletter(this.props._id, formData, () => {
      this.props.history.push("/dashboard");
    })
    
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="new-newsletter">
        <NewNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={event => this.onSubmit(event)}
          formTitle='New Newsletter'
          fieldOnePlaceholder='Newsletter Title'
          fieldOneTitle='Newsletter Title'
          fieldTwoPlaceholder='Body Here'
          fieldTwoTitle='Body'
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { _id } = state.auth.user;
  return { _id }
}

NewNewsletter = connect(mapStateToProps, actions)(NewNewsletter);

export default NewNewsletter;