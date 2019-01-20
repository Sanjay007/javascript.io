import axios from "../utils/axiosServer";

export const getDashboard = () => dispatch => {
  dispatch({ type: "DASHBOARD_INIT", loading: true });

  const url = "/dashboard";
  axios
    .get(url)
    .then(response => {
      console.log("api", response);
    })
    .catch(err => {
      console.log("api err", err);
      dispatch({ type: "USER_FAILURE", response: err });
    });
};
