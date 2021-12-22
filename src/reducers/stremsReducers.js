import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "READ_ALL_STRME":
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case "DELTE_STRME":
      return _.omit(state, action.payload);

    case "EDIT_STRME":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STRM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STRME":
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
