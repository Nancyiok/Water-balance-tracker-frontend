import axiosInstance from "../httpService";
import { jwtDecode } from "jwt-decode";
import { sessionStorageInstance } from "../auth/token.service";
const { get, put } = axiosInstance;

const decodeToken = (token) => {
  if (!token) return;
  return jwtDecode(token);
};

const getUserId = () => {
  const { accessToken } = sessionStorageInstance.get() || {};
  const result = decodeToken(accessToken ?? null);
  return result?.data.userId;
};

const getUserRole = () => {
  const { accessToken } = sessionStorageInstance.get() || {};
  const result = decodeToken(accessToken ?? null);
  return result?.data.role;
};

const getUserInfoProfile = async () => {
  const userId = getUserId();
  const info = await get(`/users/${userId}`);
  return info.data;
};

const changeUserImg = async (imgId) => {
  const resultOfChange = await put("/users/me/avatar", {
    originalImageId: imgId,
    thumbnailImageId: imgId,
  });
};

const changeUserProfile = async (profileData) => {
  const changeProfile = await put("/users/me", {
    ...profileData,
  });
};

export {
  getUserInfoProfile,
  changeUserImg,
  changeUserProfile,
  getUserRole,
  getUserId,
};
