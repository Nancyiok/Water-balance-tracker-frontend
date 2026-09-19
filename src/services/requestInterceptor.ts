import { sessionStorageInstance } from "./auth/token.service";
const requestInterceptor = (instance) => {
  instance.interceptors.request.use((config) => {
    const accessToken = sessionStorageInstance?.get()?.accessToken;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });
  return instance;
};

export default requestInterceptor;
