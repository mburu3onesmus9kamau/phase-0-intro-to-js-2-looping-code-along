function writeCards(arrayOfNames ,events){
let thankYouArray=[]
    for(let i=0; i<arrayOfNames.length;i++){
        let messages =`thank you, ${arrayOfNames[i]},for the wonderful ${event}gift!`
        thankYouArray.push(messages)
    }
    return thankYouArray(messages)
}
function countDown(initialNumber){
    while(initialNumber>0){
        console.log(initialNumber);
        initialNumber=initialNumber-1
    }
    console.log (initialNumber)
}
