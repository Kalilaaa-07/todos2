import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { catchError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUsersDto: CreateUserDto) {
    try {
      const { name, email, pasword }= createUsersDto;
      const createUsers = await this.prisma.user.create({
        data: {
          name,
          email,
          pasword
        }
      })
      return {
        success: true,
        message: "user create successfully",
        data: createUsers
      }
    } catch(Error) {

    }
  }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany()
      return{
        success: true,
        massage: "user data found succesfully",
        data: users
      }
    } catch (error) {
      return {
        succes: false,
        massage: `error when get user: ${error.message}`
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
