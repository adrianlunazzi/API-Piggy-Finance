import { BaseRepository } from "../../../../Domain/base/repository.base";
import { Repository } from "typeorm";

export class MysqlGenericRepository<T> implements BaseRepository<T>{
    private repository: Repository<T>;
    constructor(repository: Repository<T>){this.repository = repository}

    getAll(): Promise<T[]> {
        return this.repository.find();
    }

    getByParam(param:any): Promise<T[]> {
        return this.repository.find(param);
    }
   
    getAllwithRelations(): Promise<T[]> {
        return this.repository.find();
    }

    get(id:any): Promise<T> {
        return this.repository.findOne(id)
    }

    create(item: T): Promise<T> {
        return this.repository.save(item);
    }

    update(id: any, item: any) {
        return this.repository.update(id, item);
    }

    delete(id: string) {
        return this.repository.delete(id);
    }
}