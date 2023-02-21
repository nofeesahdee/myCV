import { 
    Controller, 
    Post,
    Body,
    UseGuards,
 } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportDto } from './dtos/report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(
        private reportsService: ReportsService,
        // private authService: AuthService
    ){}

    // @Get('/whoami')
    // whoAmI(@Session() session: any){
    //     return this.usersService.findOne(session.userId)
    // }

    // @Post('/report')
    // createReport(@Session() session: any){
    //     session.userId = null
    // }

    @Post('/')
    @UseGuards(AuthGuard)
    @Serialize(ReportDto)
    async createReport(@Body() body:CreateReportDto, @CurrentUser() user:User){
        return this.reportsService.create(body, user)
    }

    // @Post('/signin')
    // async signin(@Body() body:CreateUserDto, @Session() session: any){
    //     const user = await this.authService.signin(body.email, body.password)  
    //     session.userId = user.id
    //     return user  
    // }

    // @Get('/:id')
    // async findUser(@Param('id') id: string){
    //     const user = await this.usersService.findOne(parseInt(id))

    //     if(!user){
    //         throw new NotFoundException('user not found')
    //     }

    //     return user
    // }

    // @Get()
    // findAllUser(@Query('email') email:string){
    //     return this.usersService.find(email)
    // }

    // @Delete('/:id')
    // removeUser(@Param('id') id: string){
    //     return this.usersService.remove(parseInt(id))
    // }

    // @Patch()
    // updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
    //     return this.usersService.update(parseInt(id), body)
    // }
}
