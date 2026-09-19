import { errorToast } from "../../utils/notifier";
import { refreshSession } from "../auth/auth.service";
import ROUTES_PATH from "../../routes/routes.constants";
import { HTTP_STATUS, ERROR_MESSAGES } from "./constants";
const responseInterceptor = (instance) => {
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    async (error) => {
      const originalRequest = error.config;
      let errorMessage = ERROR_MESSAGES.default;
      if (error.response) {
        errorMessage = error.response.data.error.message;
        if (
          error.response.status === HTTP_STATUS.unauthorized &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          try {
            const newAccessToken = await refreshSession();
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          } catch (err) {
            window.location.replace(ROUTES_PATH.sessionExpired);
            return Promise.reject(err);
          }
        }
      } else if (error.request) {
        errorMessage = error.message;
      } else {
        console.log("Error", error.message);
      }
      errorToast(errorMessage);
      return Promise.reject(error);
    }
  );
};

export default responseInterceptor;
