class BankAccount{
  constractor(fullName,balance,idNumber){
    this.fullName = fullName;
    this.balance = balance;
    this.idNumber = idNumber;

  }

  getName(){
    return this.fullName;
  }
  getBalance(){
    return this.balance;
  }
  getId(){
    return this.idNumber;
  }
  setName(name){
    this.fullName = name;
  }
  deposit(amount){
    if(amount<0){
      //illegalArgumentException
    }
    this.balance+=amount;
  }
  withdraw(amount){
    if(amount>this.balance || amount<0){
      //illegalArgumentException
    }
    this.balance-=amount;
  }
  setID(idx){
    this.idNumber=idx;
  }
  toString(){
    var output="Full name: "+this.fullName+", Balance: "+this.balance+", Id number: "+this.idNumber;
    return output;
  }
}


class Bank{
  constructor(){
    this.listAccounts = [];
    this.currentID = 0;
  }
  addAccount(account){
    account.id = this.assignId();
    this.listAccounts.push(account);
  }
  assignId(){
    this.idNumber+=1;
    return this.idNumber;
  }
  deleteAccountById(idx){
    for(var index = 0; index<listAccounts.length; index++){
      if(listAccounts[index]){
        if(listAccounts[index]===idx){
          delete listAccounts[index];
          return true;
        }
      }
    }
    return false;
  }
  getAccountById(idx){
    for(var index = 0; index<listAccounts.length; index++){
      if(listAccounts[index]){
        if(listAccounts[index].getId()===idx){
          return listAccounts[index];

        }
      }
    }
    return null;
  }
  getAccount_ById_ByName(idx,name){
    for(var index = 0; index<listAccounts.length; index++){
      if(listAccounts[index]){
        if(listAccounts[index].id===idx && listAccounts[index].getName()===name){
          return listAccounts[index];

        }
      }
    }
    return null;
  }

}
toString(){
  var output="";
  for(var index=0; index<listAccounts.length; index++){
    output+=listAccounts[index]+"<br>";
  }
  return outout;
}

var listAccount = new Bank();
//FRONT END LOGIC

$(document).ready(function(){
  $("#formID").submit(function(event){
    event.preventDefault();
    var inputFullName = $("#fullnameID").val();
    var inputBalance = parseFloat($("#balanceID").val());
    var inputID = parseInt($("#keyID").val());
    console.log(inputFullName,inputBalance,inputID);
    var account = new BankAccount(inputFullName,inputBalance ,inputID);
    listAccount.addAccount(account);
    console.log(listAccounts)
  });
  $("#formID2").submit(function(){

  })

});
console.log(listAccount);
