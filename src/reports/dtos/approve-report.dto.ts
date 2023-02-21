import { Column } from "typeorm";


export class ApproveReportDto{
    @Column({ default:false })
    approved: boolean;
}