 const input=[1,2,3,4,5]
// const newArray=[]
// for(let i=0;i<input.length;i++)
// {
// newArray.push(input[i]*2);
// }
// console.log(input);
// console.log(newArray);
console.log(input)
function transform(i){
    return i*2;
}
const ans= input.map(transform);
console.log(ans);
//filtering
//what if I tell u,given an input array, give me back all they even values from it 
const ans2 =ans.filter((n)=>
{
    if(n%3==0){
        return false;
    }
    else{
        return true;
    }
})
//const ans =arr.filter(filterLogic);
console.log(ans2)

