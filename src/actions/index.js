import strems from "../apis/strems";
import history from "../history";
export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStrems = (formValue) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await strems.post("/streams", { ...formValue, userId });
  dispatch({ type: "CREATE_STRME", payload: response.data });
  history.push("/");
};

export const getallStrmes = () => async (dispatch) => {
  const response = await strems.get("/streams");
  dispatch({ type: "READ_ALL_STRME", payload: response.data });
};
export const fetchStrmes = (id) => async (dispatch) => {
  const response = await strems.get(`/streams/${id}`);
  dispatch({ type: "FETCH_STRME", payload: response.data });
};
export const editStrems = (id, formValue) => async (dispatch) => {
  const response = await strems.put(`/streams/${id}`, formValue);
  dispatch({ type: "EDIT_STRME", payload: response.data });
  history.push("/");
};
export const deleteStrems = (id) => async (dispatch) => {
  await strems.delete(`/streams/${id}`);
  dispatch({ type: "DELTE_STRME", payload: id });
  history.push("/");
};
