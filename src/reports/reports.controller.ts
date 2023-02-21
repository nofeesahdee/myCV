import { 
    Controller, 
    Post,
    Body,
    UseGuards,
    Patch,
    Param,
    Get,
    Query,
 } from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ReportDto } from './dtos/report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(
        private reportsService: ReportsService,
    ){}

    @Get()
    getEstimate(@Query() query:GetEstimateDto){
        return this.reportsService.createEstimate(query)
    }

    @Post('/')
    @UseGuards(AuthGuard)
    @Serialize(ReportDto)
    async createReport(@Body() body:CreateReportDto, @CurrentUser() user:User){
        return this.reportsService.create(body, user)
    }

    @Patch('/:id')
    @UseGuards(AdminGuard)
    approveReport(@Param('id') id: string, @Body() body: ApproveReportDto){
        return this.reportsService.changeApproval(id, body.approved)
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

  

    // @Delete('/:id')
    // removeUser(@Param('id') id: string){
    //     return this.usersService.remove(parseInt(id))
    // }

   
}
