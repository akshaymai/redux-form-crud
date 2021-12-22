import React from "react";
import { div } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getallStrmes } from "../actions/index";
class ListStream extends React.Component {
  componentDidMount() {
    this.props.getallStrmes();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserID) {
      return (
        <>
          <Link to={`/streams/Edit/${stream.id}`}>
            <button>Edit</button>
          </Link>
          <Link to={`/streams/delete/${stream.id}`}>
            <button>Delete</button>
          </Link>
        </>
      );
    }
  }

  checkedIsSignedIn() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "center", marginTop: "14px" }}>
          <Link to="/streams/create" className="login-btn">
            Create Strme
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Streams</h1>
        {this.props.strems.map((item) => {
          return (
            <>
              <div
                style={{
                  borderTop: "1px solid",
                  borderBottom: "1px solid",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>

                <div>{this.renderAdmin(item)}</div>
              </div>
            </>
          );
        })}
        {this.checkedIsSignedIn()}
      </div>
    );
  }
}
const mapstatetoProps = (state) => {
  return {
    strems: Object.values(state.strmes),
    currentUserID: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapstatetoProps, { getallStrmes })(ListStream);
