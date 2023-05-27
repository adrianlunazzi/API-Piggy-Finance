import { Demo, User } from '../entities';
import { BaseRepository } from './repository.base';

export abstract class BaseDataServices {
  abstract demo: BaseRepository<Demo>;
  abstract user: BaseRepository<User>;
}
