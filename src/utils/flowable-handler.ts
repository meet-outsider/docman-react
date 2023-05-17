import axios, { AxiosResponse } from 'axios';

class FlowableHandler {
  private baseURL: string;
  private username: string;
  private password: string;

  constructor(baseURL: string, username: string, password: string) {
    this.baseURL = baseURL;
    this.username = username;
    this.password = password;
  }

  private getAuthorizationHeader(): string {
    const auth = `${this.username}:${this.password}`;
    const base64Auth = btoa(auth);
    return `Basic ${base64Auth}`;
  }

  private async makeRequest<T>(
    method: string,
    path: string,
    params?: any,
  ): Promise<T> {
    const fullURL = this.baseURL + path;
    const headers = {
      Authorization: this.getAuthorizationHeader(),
    };
    try {
      const response: AxiosResponse<T> = await axios.request({
        method,
        url: fullURL,
        params,
        headers,
      });

      return response.data;
    } catch (error) {
      throw new Error('请求失败'); // 处理错误
    }
  }
  public async request(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
  ): Promise<any> {
    return this.makeRequest<any>(method, url, data);
  }
}

export const flowableHandler = new FlowableHandler(
  import.meta.env.VITE_FLOWABLE_API,
  import.meta.env.VITE_FLOWABLE_USERNAME,
  import.meta.env.VITE_FLOWABLE_PASSWORD,
);
