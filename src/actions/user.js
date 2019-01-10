import axios from "../utils/axiosServer";
import { history } from "../_helpers/history";

export const userInit = () => dispatch => {
  const data = { isLoading: true };
  dispatch({ type: "USER_INIT", data });
};

export const auth = (username, password, his) => dispatch => {
  dispatch({ type: "USER_INIT" });

  const url = "/auth";
  axios
    .post(url, { username: "abc@gmail.com", password: "ABC" })
    .then(response => {
      console.log("api", response);
      dispatch({ type: "USER_SUCCESS", response: response.data });
      localStorage.setItem("token", response.data.token);
      his.push("/dashboard");
    })
    .catch(err => {
      console.log("api err", err);
      dispatch({ type: "USER_FAILURE", response: err });
    });
};

export const createUser = (user, his) => dispatch => {
  dispatch({ type: "CREATE_USER_INIT" });
  const url = "/createuser";
  axios
    .post(url, user)
    .then(response => {
      console.log("api", response);
      dispatch({ type: "CREATE_USER_SUCCESS", response: response.data });
      localStorage.setItem("token", response.data.token);
      his.push("/dashboard");
    })
    .catch(err => {
      console.log("api err", err);
      dispatch({ type: "CREATE_USER_FAILURE", response: err });
    });
};

export const createOrganization = (organization, his) => {
  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": localStorage.getItem("token")
  };
  return dispatch => {
    const url = "/organization/create";
    axios
      .post(url, organization, { headers })
      .then(response => {
        console.log("api", response);
        dispatch({
          type: "CREATE_ORGANIZATION_SUCCESS",
          response: response.data
        });
      })
      .catch(err => {
        console.log("api err", err);
        dispatch({ type: "CREATE_ORGANIZATION_FAILURE", response: err });
      });
  };
};

export const fetchProfileInfo = () => dispatch => {
  const url = "/user/me";
  axios
    .get(url)
    .then(response => {
      console.log("api", response);
      dispatch({
        type: "USER_PROFILE_INFO",
        response: response.data
      });
    })
    .catch(err => {
      console.log("api err", err);
      dispatch({ type: "USER_PROFILE_FAILURE", response: err });
    });
};

// export const login = (username, password) => (dispatch)=>{
//     return dispatch => {
//         dispatch({ type: "USER_INIT" });
//         var reqData={};
//         reqData.username=username;
//         reqData.password=password;

//         axios.post("/auth", reqData)
//             .then((response) => {
//                 console.log("Res",response);
//                 dispatch({ type: "USER_SUCCESS", response: response.data });
//             }).catch((err) => {
//                 console.log(err);
//                 dispatch({ type: "USER_FAILURE", error: (err) });
//             });

//     };
// }
