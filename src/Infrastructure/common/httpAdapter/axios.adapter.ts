import { HttpException, Injectable } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";
import { IHttpAdapter } from "./Interface/http.adapter.interface";

@Injectable()
export class AxiosAdapter implements IHttpAdapter {
    private axios: AxiosInstance = axios;

    async get(url: string) {
        try {
            const { data } = await this.axios.get(url)
            return data
        } catch (error) {
            throw new HttpException(error, 404, { cause: new Error(error) })
        }
    }

    async post(url: string, dto: any) {
        try {
            const { data } = await this.axios.post(url, dto)
            return data
        } catch (error) {
            throw new HttpException(error, 400, { cause: new Error(error) })
        }
    }
    async put(url: string, dto: any) {
        try {
            const { data } = await this.axios.post(url, dto)
            return data
        } catch (error) {
            throw new HttpException(error, 404, { cause: new Error(error) })
        }
    }
    async delete(url: string, dto: any) {
        try {
            const { data } = await this.axios.post(url, dto)
            return data
        } catch (error) {
            throw new HttpException(error, 404, { cause: new Error(error) })
        }
    }
}