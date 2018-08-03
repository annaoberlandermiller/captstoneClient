import { User } from '@user/user';
import { PRLI } from '@prli/prli';

export class PR {
    Id: number;
    UserId: number;
    User: User;
    RequestDescription: string;
    RequestJustification: string;
    ReasonForRejection: string;
    Status: string;
    Total: number;
    DeliveryMode: string;
    Active: boolean;
    PurchaseRequestLineItems: PRLI[];
    
 
    constructor() {
        this.Id = 0;
        this.UserId = 0;
        this.Total = 0;
        this.Status = "";
        this.ReasonForRejection = "";
        this.Active = true;
    }

}