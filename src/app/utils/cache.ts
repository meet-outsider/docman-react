interface LocalStorage {
  get(key: string): string | null;

  set(key: string, value: string): void;

  remove(key: string): void;
}

const token = "x-token"

class LocalStorage implements LocalStorage {
  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public getToken(): string | null {
    return localStorage.getItem(token);
  }

  public setToken(value:any) {
    localStorage.setItem(token, value);
  }

  public cleanToken() {
    localStorage.removeItem(token);
  }

}

const cache = new LocalStorage();

export default cache;
