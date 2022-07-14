//1.Write one example explaining how you can write a callback function 

function myDisplayer(some) {
   return some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);
  
//2.Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on



for(var i = 0; i <= 10; i++){
    print(i);
}


function print(i){
    setTimeout(function(){
        console.log(i)
    },i*2000);
}



//3.Explain callback hell.

//Callback hell is a phenomenon that afflicts a JavaScript developer
//when he tries to execute multiple asynchronous operations one after the other.
//By nesting callbacks in such a way,
//we easily end up with error-prone, hard to read,
//and hard to maintain code.


//4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 



function foo(condition){
    const apiResp=new Promise(function(resolved,reject){
      if(condition==="yes"){
        resolved(" Resolved");
      }
      else {
        reject("rejected");
      }
    })
    return apiResp;
  }
  foo('')
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  })


//5..Create examples to explain promises function



function marks(mark){
    const apiResp=new Promise(function(response,reject){
      if(mark>70){
        response("you will get pocket money")
      }
      else{
        reject("you will not get the pocket money.")
      }
    })
    return apiResp;
  }
  marks(78)
  .then(function(data){
    console.log(data);
  })
  .catch(function(err){
    console.log(err);
  });



//6.Create examples to explain callback hell function.


let order = (call_Steps) => {
    setTimeout(() => {    
      call_Steps();
    }, 1000);
  };
  let production = () => {
    setTimeout(() => {
      console.log("step 1");
      setTimeout(() => {
        console.log("step 2");
        setTimeout(() => {
          console.log("step 3");
          setTimeout(() => {
            console.log("step 4");
            setTimeout(() => {
              console.log("step 5");
              setTimeout(() => {
                console.log("step 6");
                setTimeout(() => {
                  console.log("step 7");
                  setTimeout(() => {
                    console.log("step 8");
                    setTimeout(() => {
                      console.log("step 9");
                      setTimeout(() => {
                        console.log("step 10");
                        setTimeout(() => {
                          console.log("A call backhell");
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  order(production);


  //7.


  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
         myResolve("myResolve"); 
        }, 3000);
    setTimeout(function(){
        myReject("Rejected");
    },3000);
  });
  
  myPromise.then(function(value) {
return value;
  });


//8.Create examples to explain async await function.
console.log("1st");

const Data_infor = async() => {
    var y = await ("2nd");
    console.log(y);
  }
  Data_infor();
  
  
  console.log("3nd");



//9.Create examples to explain promise.all function


var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
  setTimeout(reject,100,"error");
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values);
});