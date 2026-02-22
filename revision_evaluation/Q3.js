function mySetInterval(callback,delay){
    let timerid=null
    let isRunning=true


    function loop(){
        if(!isRunning) return
        callback()
        timerid=setTimeout(loop,delay)
    }

    timerid=setTimeout(loop,delay)


    return{
        id:timerid,
        clear:()=>{
            isRunning=false
            clearTimeout(timerid)
        }
    }
}

function myClearInterval(intervalObj){
    intervalObj.clear()
}

const interval=mySetInterval(()=>{
    console.log("executing callback every",1000,"ms")

},1000)

console.log("interval started with id",interval.id)


setTimeout(()=>{
    myClearInterval(interval)
    console.log("interval cleared")
},5000)