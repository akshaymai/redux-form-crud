import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { editStrems, fetchStrmes } from "../actions";
class EditStream extends React.Component {
  componentDidMount() {
    this.props.fetchStrmes(this.props.match.params.id);
  }
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
        {/* <input {...input} autoComplete="off" /> */}

        <input
          {...input}
          // type={type}
          // placeholder={placeholder}
          autoComplete="off"
          className={error && touched ? "sdf me" : "sdf"}
        />
        {touched && error && <span style={{ color: "red" }}>{error}</span>}
        <br />
      </>
    );
  }

  fromSubmit = (item) => {
    this.props.editStrems(this.props.match.params.id, item);
  };

  render() {
    console.log("sdfb wsedfb sdfbdfgbn", this.props.strmes);

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.props.handleSubmit(this.fromSubmit)}>
            <Field name="title" component={this.renderInput} lable="Title" />
            <Field
              // value={this.props.strmes.discription}
              // type="text"
              name="discription"
              // placeholder="enter discription"
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
})(EditStream);

const mapStateToProps = (state, ownProps) => {
  return {
    strmes: state.strmes[ownProps.match.params.id],
    initialValues: state.strmes[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { editStrems, fetchStrmes })(formWrape);
