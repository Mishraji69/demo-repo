let firstname="pranav";
let age="18";
let ismarried=false;
console.log("this person's name is "+firstname+" and their age is "+age);
if(ismarried==true)
{
    console.log(firstname +"is married");
}
else
{
    console.log(firstname +" is not married");
}
const ages=[20,22,24,26,29,39,31,12]
for(let i=0;i<ages.length;i++)
{
    if(ages[i]%2==0)
    {
        console.log(ages[i]);
    }
}
const allusers=[{
    firstname:"Rajiv",
    gender:"M",
    metadata:{
        handle:4848
    }
},{
    firstname:"Pranav",
    gender:"M",
    metadata:{
        handle:2369
    }
},{
    firstname:"Divyanshi",
    gender:"F",
    metadata:{
        handle:9731
    }
}
]
for(let i=0;i<allusers.length;i++)
{
    if(allusers[i]["gender"]=="F"){
        console.log(allusers[i]["firstname"])
    }
}
function sum(num1,num2)
{
    let ans=num1+num2;
    return ans;
}
function displayresult(data)
{
    console.log("result of data is "+data)
}

displayresult(sum(3,4))
for(let i=30;i>0;i--)
{
    console.log(i)
}
function timepass()
{
    console.log("divyanshi")
}
setTimeout(timepass,3000)
