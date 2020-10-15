import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from "./newsletterNewForm";

class NewNewsletter extends Component {

  onSubmit = fields => {

    const { title, body, image } = fields;

    var formData = new FormData();
    formData.append('title', title);
    console.log('formData.title:', formData.title)
    console.log('.title:', title)

    formData.append('body', body);
    console.log('formData.body:', formData.body)
    console.log('.body:', body)

    formData.append('image', image);
    console.log('formData.image:', formData.image)
    console.log('.image:', image)

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