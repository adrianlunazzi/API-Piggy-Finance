export abstract class BaseRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract get(id: any): Promise<T>;
    abstract create(item: T): Promise<T>;
    abstract update(id: string, item: T): any;
    abstract delete(id: any): any;
}