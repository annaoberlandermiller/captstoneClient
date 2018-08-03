export class Vendor {
    Id: number;
    Code: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    Phone: string;
    Email: string;
    Preapproved: boolean;
    Active: boolean;

    constructor() {
    this.Id = 0;
    this.Preapproved = false;
    this.Active = false;
    }
}