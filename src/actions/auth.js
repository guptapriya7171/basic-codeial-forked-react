import { LOGIN_START } from "./actionTypes";
import { APIUrl } from "./helpers/urls";
import { getFormBody } from "./helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START
  };
}

export function login(email, password) {
  return (dispatch) => {
    const url = APIUrl.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-ww-form-urlencoded"
      },
      body: getFormBody({ email, password })
    });
  };
}
