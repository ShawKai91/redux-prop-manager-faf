import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from "./newsletterNewForm";

class NewNewsletter extends Component {

  onSubmit = fields => {

    const { title, body, image } = fields;

    var formData = new FormData();
    formData.append('title', title);
    console.log('title:',formData.title)
    formData.append('body', body);
    console.log('body:',formData.body)
    formData.append('image', image);
    console.log('image:',formData.image)

    this.props.createNewNewsletter(this.props._id, formData, () => {
      console.log(fields)
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