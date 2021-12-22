import React from "react";
import style from "./Model.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.hanle}></div>;
};
const ModelOverLay = (props) => {
  return (
    <div className={style.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const Model = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop hanle={props.handle} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModelOverLay>
          <h1>{props.title}</h1>
          <hr />
          <p>{props.content}</p>
          {props.footer}
        </ModelOverLay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};
export default Model;
