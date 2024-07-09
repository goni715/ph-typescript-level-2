//* access modifiers

class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected address: string;
    

    constructor(id:number, name: string, balance:number, address: string){
        this.id = id;
        this.name = name;
        this._balance= balance;
        this.address = address;
    }

    addDeposit(amount: number) {
        this._balance = this._balance + amount;
    }

    getBalance(){
        return this._balance;
    }
}


const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20, "Saidpur");
goribManusherAccount.addDeposit(10);
const myBalance = goribManusherAccount.getBalance();
console.log(myBalance);
//output = 30




class StudentAccount extends BankAccount{
    test(){
        return this.address;
    }
}


const studentAccount = new StudentAccount(112, "Marjan Hossain", 8, "Nilphamari");
const result20 = studentAccount.test();
console.log(result20);
//output = Saidpur

