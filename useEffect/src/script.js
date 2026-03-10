let myPromise = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve("Here is resolve")
    }else{
        reject("here is reject")
    }
})

myPromise
.then((result)=> console.log(result))
.catch((erorr)=> console.log(erorr))

