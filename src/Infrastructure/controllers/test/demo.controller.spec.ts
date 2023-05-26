import { DemoUseCases } from "../../../Aplication/use-case/demo/demo.use-case";
import { DemoController } from "../demo.controller"
import { Test, TestingModule } from '@nestjs/testing';
import { DbModule } from '../../framework/db/db.module';
import * as request from 'supertest';

describe("Demo Controller", () => {
    let controller: DemoController
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DemoController],
            providers: [DbModule, {
                provide: DemoUseCases,
                useValue: DemoUseCases
            }],
        }).compile()
        controller = module.get<DemoController>(DemoController);
    });
    it("Should be defined", () => {
        expect(controller).toBeDefined()
    });
    describe("POST METHOD", () => {
        it("If send nombre,edad and estado should be return status 201", async () => {
            const demoDto = {
                nombre: "DemoName",
                edad: 22,
                estado: false
            }
            const response = await request("localhost:4000").post("/demo/").send(demoDto)
            expect(response.statusCode).toBe(201)
            expect(response.body).toBeInstanceOf(Object)
        });
        it("If send nombre, edad or estado NULL, should be return status 400", async () => {
            const demoDto = {
                nombre: null,
                edad: null,
                estado: null
            }
            const response = await request("localhost:4000").post("/demo/").send(demoDto)
            expect(response.statusCode).toBe(400)
        });
    })
    describe("GET METHODS", () => {
        it("Should be return status 200 & return an Array", async () => {
            const response = await request("localhost:4000").get("/demo").send()
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Array)
        });
        it("If you send a valid Id, should be return status 200 && return an Object", async () => {
            const getUsers = await request("localhost:4000").get("/demo")
            const users = getUsers.body
            let index = users.findIndex(user => user.nombre === "DemoName");
            let userId = getUsers.body[index]?.id;
            const response = await request("localhost:4000").get(`/demo/${userId}`)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Object)
        });
        it("If you send an id that doesn't exist, you should return the 404 status", async () => {
            const userId = "id-inexistente"
            const response = await request("localhost:4000").get(`/demo/${userId}`)
            expect(response.statusCode).toBe(404)
        });
    })
    describe("PUT METHOD", () => {
        const demoDto = {
            edad: 55,
            estado: true
        }
        it("If the name, age or status is changed should be return status 200", async () => {
            const getUsers = await request("localhost:4000").get("/demo")
            const users = getUsers.body
            let index = users.findIndex(user => user.nombre === "DemoName");
            let userId = getUsers.body[index]?.id;
            const response = await request("localhost:4000").put(`/demo/${userId}`).send(demoDto)
            expect(response.statusCode).toBe(200)
        });
        it("If tsend and Id that doesn't exist, should be return status 404", async () => {
            let userId: "id-inexistente"
            const response = await request("localhost:4000").put(`/demo/${userId}`).send(demoDto)
            expect(response.statusCode).toBe(404)
        });
    })
    describe("DELETE METHOD", () => {
        it("If send and Id should be return status 201", async () => {
            const getUsers = await request("localhost:4000").get("/demo")
            const users = getUsers.body
            let index = users.findIndex(user => user.nombre === "DemoName");
            let userId = getUsers.body[index]?.id;
            const response = await request("localhost:4000").delete(`/demo/${userId}`)
            expect(response.statusCode).toBe(200)
        });
        it("If send an Id that doesn't exist, should be return status 400", async () => {
            const getUsers = await request("localhost:4000").get("/demo")
            const users = getUsers.body
            let index = users.findIndex(user => user.nombre === "DemoName");
            let userId = getUsers.body[index]?.id;
            const response = await request("localhost:4000").delete(`/demo/${userId}`)
            expect(response.statusCode).toBe(404)
        });
    })
})