function createBankAccount(initialBalance=0){
    let balance=initialBalance
    let transactionHistory=[]
    return{
        deposit(amount){
            if(amount<=0){
                return "error:deposite amount must be positive"
    
            }
            balance+=amount
            transactionHistory.push(`deposited:${amount}`)
            return `deposited ${amount}. New Amount:${balance}`
        },

        withdraw(amount){
            if(amount<=0){
                return "withdraw amount must be poitive"
            }
            if(amount>balance){
                return "error:insufficient funds"
            }
            balance-=amount
            transactionHistory.push(`withdraw:${amount}`)
            return `withdraw:${amount}.new balance:${balance}`
        },
        getBalanace(){
            return `current balance:${balance}`

        },
        getTransactionHistory(){
            return transactionHistory
        }
    }
}

const account=createBankAccount(100)
console.log(account.deposit(50))
console.log(account.withdraw(30))
console.log(account.getBalanace())
console.log(account.getTransactionHistory())
console.log(account.deposit(-10))