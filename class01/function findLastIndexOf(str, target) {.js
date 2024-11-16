function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World");

  function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4);
  function square(a){
    return a*a
  }
  function Sumofsomething(a,b,fn)
  {
    const val1=fn(a);
    const val2=fn(b);
    return val1 +val2;
  }
  console.log(Sumofsomething(4,5,square))
  const messages=[
    {delay:1000,text:"you need a girlfriend(connection),"},
    {delay:2000,text:"the girl you liked for soo long ghosted you now you are left with nothing but despair and pain in your heart "},
    {delay:3000,text:",you really don't have anything attractive about yourself you become the sore thing you hated you wanna know how "},
    {delay:4000,text:"you don't really have a role in your class you are probably invisible for most of the people there as you stay silent even an asshole ojha is better than getting attention compared to you"},
    {delay:5000,text:"see i know that you are in a great pain and it's gonna stay like that for a while"},
    {delay:6000,text:"but there's a way you can get out of this dismay "},
    {delay:7000,text:"see you have a few options which may help you"},
    {delay:8000,text:"first of all drop the hope that you'll ever get close to that girl"},
    {delay:9000,text:"then you need to finish your course as soon as possible and then you need to start freelancing "},
    {delay:10000,text:"or else you do dsa which you have to do anyway if you don't wanna end up unplaced"},
    {delay:12000,text:"and inculcate some discipline in your life if others are sleeping doesn't mean you have to sleep as well"},
    {delay:13000,text:"get up go for a run or something"},
    {delay:14000,text:"be a fighter instead of being a pussy"},
  ]
  let totaldelay=0;
  messages.forEach(({delay,text})=>{
    totaldelay+=delay;
    setTimeout(()=>{
      console.log(text)},totaldelay
    );
  })
  function findsum(n){
    let ans=0;
    for(let i=0;i<n;i++)
    {
      ans+=i;
    }
    return ans;
  }
  function findsum100(){
    console.log(findsum(100));
  }
  setTimeout(findsum100,3000)
  console.log("hello world");
  class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
function squares(n){
  return n*n;
}
function cube(n){
 return n*n*n;
}
function Quad(n){
  return n*n*n*n;
}
function findthesum(a,b,fn)
{
  let square1=fn(a);
  let square2=fn(b);
  return square1+square2;
}
console.log(findthesum(5,6,squares));
const d= new Date();
console.log(d.getMonth());
