import { Component, Inject } from '@nestjs/common';
import { changeUserAddressDto, changeUserRoleDto } from '../dto/users.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../../../entity/user.entity';
import { AccountService } from '../../../../account/services';

@Component()
export class UsersListService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private accountService: AccountService,
  ) {}
  async findAll() {
    try {
      const data = await this.accountService.findAllUsers();
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(`Can't change user address ===> ${err}`);
    }
  }

  async changeUserRole(dto: changeUserRoleDto) {
    try {
      const user = await this.accountService.findById(dto.user);
      user.roles = dto.role;
      await this.userRepository.save(user);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
