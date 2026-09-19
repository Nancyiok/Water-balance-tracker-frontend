import axiosInstance from "../httpService";
import { sessionStorageInstance } from "./token.service";
import ACCESS_TOKEN_LIFE_TIME from "../../constants/sessionLifeTime";

const { put, post, delete: del } = axiosInstance;

const passVerification = async () => {
  const accessToken = sessionStorageInstance?.get()?.accessToken;
  const payload = {
    token: accessToken,
  };

  return await put("/verifications", payload);
};

const login = async (email, password) => {
  const result = await post("/sessions", {
    email,
    password,
    lifeTime: ACCESS_TOKEN_LIFE_TIME,
  });
  sessionStorageInstance.set(result.data.session);
  return result;
};

const signUp = async (email, password, role) => {
  return await post("/users", {
    email,
    password,
    role,
    tokenLifeTime: ACCESS_TOKEN_LIFE_TIME,
  });
};

const logout = async () => {
  const resultOfDeletion = await del("/sessions");
  sessionStorageInstance.remove();
  return resultOfDeletion;
};

const refreshSession = async () => {
  const { refreshToken } = sessionStorageInstance.get();
  const refreshSessionResult = await put("/sessions", {
    refreshToken,
  });
  sessionStorageInstance.set(refreshSessionResult.data);
  return refreshSessionResult.data.accessToken;
};

export { signUp, login, logout, refreshSession, passVerification };
