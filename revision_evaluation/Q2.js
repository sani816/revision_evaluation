function rateLimiter(limit,intervel){
    let count=0
    let lastReset=Date.now()
    return function (fn){
        return function(...args){
            const now=Date.now()


            if(now-lastReset>=intervel){
                count=0
                lastReset=now
            }
            if(count<limit){
                count++
                return fn.apply(this,args)
            }else{
                console.log("rate limit exceeded, call blocked")
                return null
            }
        }
    }
}

function exampleFunction(){
    console.log("fucntion called")
}
const limitedFuction=rateLimiter(2,3000)(exampleFunction)

limitedFuction()
limitedFuction()
limitedFuction()