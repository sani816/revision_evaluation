function runSequential(tasks,delay){
    return new Promise((resolve,reject)=>{
        let results=[]
        let index=0

        function executeNext(){
            if(index>=tasks.length){
                resolve(results)
                return
            }

            const task=tasks[index]
            index++

            task()
            .then(result=>{
                results.push(result)
                setTimeout(executeNext,delay)
            })
            .catch(error=>{
                reject(error)
            })
        }
        executeNext()
    })
}

async function task1(){
    return "task 1 result"
}
async function task2(){
    return "task 2 result"
}


const tasks=[task1,task2]
const delay=1000

runSequential(tasks,delay)
.then(results=>console.log("result",results))
