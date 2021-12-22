import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStrems } from "../actions";
class CreateStream extends React.Component {
  renderInput({
    input,
    lable,
    type,
    placeholder,
    meta: { touched, error, warning },
  }) {
    return (
      <>
        <label>{lable}</label>
        <input
          {...input}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className={error && touched ? "sdf me" : "sdf"}
        />
        {touched && error && <span style={{ color: "red" }}>{error}</span>}
        <br />
      </>
    );
  }

  fromSubmit = (item) => {
    this.props.createStrems(item);
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.props.handleSubmit(this.fromSubmit)}>
            <Field
              type="text"
              placeholder="enter title"
              name="title"
              component={this.renderInput}
              lable="Title"
            />
            <Field
              type="text"
              name="discription"
              placeholder="enter discription"
              component={this.renderInput}
              lable="Discription"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 25) {
    errors.title = "Must be 15 characters or less";
  }

  if (!values.discription) {
    errors.discription = "Required";
  } else if (values.discription.length > 25) {
    errors.discription = "Must be 15 characters or less";
  }
  return errors;
};

const formWrape = reduxForm({
  form: "createStreame",
  validate: validate,
})(CreateStream);

export default connect(null, { createStrems })(formWrape);
