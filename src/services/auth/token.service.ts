import StorageTokenService from "./token.storage";

const sessionStorageInstance = new StorageTokenService("session");

export { sessionStorageInstance };
