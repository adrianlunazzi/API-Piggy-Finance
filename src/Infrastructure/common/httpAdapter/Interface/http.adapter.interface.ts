export interface IHttpAdapter {
    get(url: string): any;
    post(url: string, data: any): any;
    put(url: string, data: any): any;
    delete(url: string, data: any): any;
}