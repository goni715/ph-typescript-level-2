//* getter & setter function


class BankAccount2 {
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

    set deposit(amount:number){
        this._balance = this._balance + amount;
    }

    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }

    get balance(){
        return this._balance;
    }

    // getBalance(){
    //     return this._balance;
    // }
}


const goribManusherAccount2 = new BankAccount2(111, "Mr. Gorib", 20, "Saidpur");
//goribManusherAccount2.addDeposit(10); //function call করতে হচ্ছে
//const myBalance2 = goribManusherAccount.getBalance();
//console.log(myBalance2);
//output = 30

goribManusherAccount2.deposit=10;

const myBalance2 = goribManusherAccount2.balance;
console.log(myBalance2);
//output = 30

