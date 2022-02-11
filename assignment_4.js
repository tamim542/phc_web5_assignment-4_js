    //problem-1

function anaToVori(ana){
    if(typeof ana!='number')
    {
        return 'invalid input please give a number ';
    }
    if(ana<0){
        return 'invalid input please give a positive number ';
    }

    let vori=ana/16;
    return vori;
}

let num=21;
let result=anaToVori(num);
console.log(result);





    //problem-2

function pandaCost(singara,somocha,jilapi){

if(singara<0 || somocha<0 || jilapi<0)
    {
        return 'invalid input please give positive number ';
    }

    let item1=singara*7;
    let item2=somocha*10;
    let item3=jilapi*15;
    const total= item1+item2+item3;

    return total;
}

let singaraNum=3, somochaNum=4, jilapiNum=5;
var result1=pandaCost(singaraNum,somochaNum,jilapiNum);
console.log(result1);





    //problem-3

function  picnicBudget(number){

    if(typeof number!='number')
    {
        return 'invalid input please give a number ';
    }
    if(number<0){
        return 'invalid input please give a positive number';
    }


    if(number>200){
       let num1=number-200;
       let resultThreeK=num1*3000;
       let resultFourK=100*4000;
       let resultFiveK=100*5000;
      const total=resultThreeK+resultFourK+resultFiveK;
       return total;
    }
    else if(number>100){
        let num1=number-100;
        
        let resultFourK=num1*4000;
        let resultFiveK=100*5000;
        const total=resultFourK+resultFiveK;
        return total;
    }
    else{
        let num1=number*5000;
        const total=num1;
        return total;
    }
}

let totalNumber=10;
var resultPicnicBudge=picnicBudget(totalNumber);
console.log(resultPicnicBudge);





    //problem-4

function oddFriend(friendName){

  if(typeof friendName=='string'){
      return 'take a arrary input ';
  }
  if(typeof friendName=='number'){
    return 'take a arrary input ';
    }

   
    var c=friendName.length;
    for(let i=0;i<c;i++){
       let a= friendName[i].length;
        if(a%2!=0){
          let name=friendName[i];
          return name;
        }
    }

    return "there is no odd name.";
 
  
}

var nam=["naim","rashed","jahid","hasan","tamim","mahabob"];
var oddName=oddFriend(nam);
console.log(oddName);