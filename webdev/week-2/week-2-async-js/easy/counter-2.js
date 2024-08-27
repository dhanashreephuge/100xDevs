let counter=0;
function IncCounter(){
console.log(counter)
counter+=1;
setTimeout(IncCounter,1000)
}
IncCounter();
