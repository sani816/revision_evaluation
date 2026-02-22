function createCountDown(seconds,onTick,onComplete){
    let remaining=seconds
    let intervalid=null
    let paused=false
    let startTime=Date.now()
    function tick(){
        if(paused)return
        const elapsed=Math.floor((Date.now()-startTime)/1000)
        const actualReamining=Math.max(0,seconds-elapsed)
        onTick(actualReamining)
        if(actualReamining<=0){
            clearInterval(intervalid)
            onComplete()
        }
    }

    function start(){
        startTime=Date.now()-(seconds-remaining)*1000

        intervalid=setInterval(tick,1000)
        tick()
    }
    start()

    return{
        pause:()=>{
            paused=true
            clearInterval(intervalid)
        },


        resume:()=>{
    paused=false

    startTime=Date.now()-(seconds-remaining)*1000
    intervalid(setInterval(tick,1000))
        }
    }

}



const countDown=createCountDown(5,(remaining)=>{
    console.log(`remaining:${remaining}`)
},()=>{
    console.log("countdown Completed")
})
