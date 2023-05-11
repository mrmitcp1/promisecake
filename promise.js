const onMyBirthDay = (isKayoSick)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (!isKayoSick){
                resolve(3);
            }else {
                reject(new Error('i am sad'))
            }
        },2000)
    })
}
onMyBirthDay(true)
.then((result)=>{
    console.log(`i have ${result} cakes`)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('join party')
})
onMyBirthDay(false)
    .then((result)=>{
        console.log(`i have ${result} cakes`)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('join party')
    })

