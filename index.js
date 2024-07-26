#! /usr/bin/env node
//Class creation
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    // publically credit 
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit successgggully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("Credit unsuccessful");
        }
    }
    // publically debit  
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit successfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("Debit unsuccessful");
        }
    }
}
// Customer details 
class Customer {
    person;
    age;
    gender;
    mobile_number;
    bank_account;
    constructor(person, age, gender, mobile_number, bank_account) {
        // this property utilization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bank_account = bank_account;
    }
    // publically user access 
    display() {
        console.log("Name: " + this.person.firstname + "  " + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile_No: " + this.mobile_number);
        console.log("Amount in Bank: " + this.bank_account.accountbalance);
    }
}
const a1 = new Bankaccount(72300);
const c1 = new Customer({ firstname: "Hamza", lastname: "Ahmed" }, 20, "Male", 7231782345, a1);
c1.display();
c1.bank_account.debit(723);
const a2 = new Bankaccount(72300);
const c2 = new Customer({ firstname: "Hamza", lastname: "Ahmed" }, 22, "Male", 7623782345, a2);
c2.display();
c2.bank_account.debit(725);
export {};
