import { Expose, Transform } from "class-transformer";
import { Column, Entity } from "typeorm";

@Entity()
export class ReportDto{
    @Expose()
    id:number 

    // @Column({ default:false })
    // approved: boolean;

    @Expose()
    price:number;

    @Expose()
    year:number;

    @Expose()
    lng:number;

    @Expose()
    lat:number;

    @Expose() 
    make:string;

    @Expose()
    model:string;

    @Expose()
    mileage:number; 

    @Transform(({ obj }) => obj.user.id)
    @Expose()
    userId: number

    @Expose()
    approved:boolean
}