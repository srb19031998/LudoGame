let user1_random=document.getElementById('random1') as HTMLHeadingElement
let user1_total=document.getElementById('total1') as HTMLHeadingElement
let winner=document.getElementById('winner') as HTMLHeadingElement

let user1_total_val:number[]=[]
function gussing_user1(){
    let random=Math.floor(Math.random()*6+1) 
    user1_total_val.push(random)
    console.log(user1_total_val)
   let final= user1_total_val.reduce((a,b)=>{return a+b})
    user1_total.innerHTML=`my number:${final}`
    user1_random.innerHTML=`my number:${random}`
    if(final>=50)
{
    winner.innerHTML="user1"
}}
