import { Vendor } from '@vendor/vendor';

export class Product {
    Id: number;
    VendorId: number;
    Vendor: Vendor;
    PartNumber: string;
    Name: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    Active: boolean;

    constructor() {
        this.Id = 0;
        this.VendorId = 0;
        this.Active = true;

    }
}