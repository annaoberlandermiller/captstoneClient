export class User {
    Id: number;
    Username: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    Reviewer: boolean;
    Admin: boolean;
    Active: boolean;

    constructor() {
        this.Id = 0;
        this.Reviewer = false;
        this.Admin = false;
        this.Active = false;
    }
}