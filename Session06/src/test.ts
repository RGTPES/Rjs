abstract class User{
    getName():void
{
    console.log("User");
}
}
class Employee extends User {
    getName(): void {
        console.log("Employee");
    }
}