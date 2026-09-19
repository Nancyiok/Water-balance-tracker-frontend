class StorageTokenService {
  constructor(key) {
    this.key = key;
  }

  set(data) {
    if (!data) return;
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  get() {
    const dataFromStorage = JSON.parse(localStorage.getItem(this.key));
    if (!dataFromStorage) {
      return null;
    }
    return dataFromStorage;
  }

  remove() {
    localStorage.removeItem(this.key);
  }
}

export default StorageTokenService;
