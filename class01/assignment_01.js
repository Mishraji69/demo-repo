function findIndexof(str,target)
{
    console.log("original string:",str)
    console.log("index",str.lastIndexOf(target))
}
findIndexof("hello krypton","krypton");
//slice 
function getSlice(str,start,end)
{
    console.log("original string:",str)
    console.log("index",str.slice(start,end))
}
getSlice("labon ko labon se churao kya ho tum mujhe toh bagtao , kho bhi do khud ko tum baho main meri bahon meain meri bahon main meri bahon main, teri kahyalo main behki si baato main ye jo mehak sondhli si hai teri jasbston behki si bssto msin ye jo mehak sondhli si hai , haya ko zara bhool jaaaa meri hi tarah pesh aaaa ,kh0bhi do  khud ko tumm ankhon main meri ankho main meri ankho main meri ankho main" ,0,50)
//internal working of slice  
function cutit(str, startIndex, endIndex)
{
    let newstr=""
    for(let i=0;i<str.length;i++)
    {
        if(startIndex<=i&&i<endIndex)
            newstr=newstr+str[i];
    }
    return  newstr
}
const value ="pranav mishra"
ans=value.slice(4,7)
console.log(ans)
console.log(cutit(value,2,5))
//concat
const initialarray= [1,2,3,4,5,6,7];
const secondarray=[8,9,10,11,12,13];
const finalarray= initialarray.concat(secondarray);
console.log(finalarray)

//for each 
const newarray=[1,2,3,4]

function logthing (str)
{
    console.log(str)
}

initialarray.forEach(logthing)
logthing(1)
logthing(2)
logthing(3)

/*const dog={
    namee :"doggie",
    legcount:2,
    speaks:"bhow bhow",
};
 const cat={
    namee:"cat",
    legcount:2,
    speaks:"meow meow",
}
function printstr(animal)
{
    console.log("animal"+" "+animal["namee"]+" "+animal["speaks"])
    console.log("animal"+" "+animal["namee"]+" "+animal["speaks"])
}*/
class Animal{
    constructor(name, legcount, speak)
    {
        this.name=name
        this.legcount=legcount;
        this.speak=speak;
    }
    spaek(){
        console.log("hi there"+this.speaks);
    }
}
//printstr(dog)
//printstr(cat)
let  dog=new Animal("dog"+4+"bhow bhow");
dog.speak()
const user={
    name:"harkirat",
    male:"male"    
}
user["name"];
const finalString= JSON.stringify(user);





