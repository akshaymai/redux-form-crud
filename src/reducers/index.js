import { combineReducers } from "redux";
import { reducer as Formreducer } from "redux-form";
import authReducer from "./authReducer";
import strmeReducer from "./stremsReducers";
export default combineReducers({
  auth: authReducer,
  form: Formreducer,
  strmes: strmeReducer,
});
