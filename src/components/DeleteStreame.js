import React from "react";
import Model from "./Model";
import history from "../history";
import { connect } from "react-redux";
import { deleteStrems, fetchStrmes } from "../actions/index";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class DeleteStream extends React.Component {
  componentDidMount() {
    this.props.fetchStrmes(this.props.match.params.id);
  }
  handleFooter = () => (
    <>
      <button
        onClick={() => this.props.deleteStrems(this.props.match.params.id)}
      >
        Delete
      </button>
      <Link to="/">
        <button>Cancle</button>
      </Link>
    </>
  );

  renderContent = () => {
    if (!this.props.strmes) {
      return "Are you sure to delete the strema?";
    } else {
      return `Are you sure to delete the strema?${this.props.strmes.title}`;
    }
  };

  render() {
    return (
      <div>
        <h1>delete streame</h1>
        <Model
          title="Delete Strema"
          content={this.renderContent()}
          footer={this.handleFooter()}
          handle={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStatetoprops = (state, ownProps) => {
  return { strmes: state.strmes[ownProps.match.params.id] };
};
export default connect(mapStatetoprops, { deleteStrems, fetchStrmes })(
  DeleteStream
);
