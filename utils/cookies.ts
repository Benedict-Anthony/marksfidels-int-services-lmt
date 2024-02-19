import {
  setCookie,
  deleteCookie,
  hasCookie,
  getCookie,
  getCookies,
} from "cookies-next";

export const isLoggedIn = () => {
  const cookies = getCookies();
  const isLoggedIn = cookies.csrftoken && cookies.access_token ? true : false;
  return isLoggedIn;
};
