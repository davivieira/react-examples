import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderErrorMessage({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const classNameError = meta.touched && meta.error ? "error" : "";

    return (
      <div className={`field ${classNameError}`}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderErrorMessage(meta)}</div>
      </div>
    );
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please, enter a title";
  }

  if (!formValues.description) {
    errors.description = "Please, enter a description";
  }

  return errors;
};

const StreamFormWrapped = reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

export default StreamFormWrapped;
