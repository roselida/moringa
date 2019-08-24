for (let 1=0; 1<=10; 1++) {
  Console.log(i)
}

///////////////////////////////////////////////////////
let i = 0;
while (true) {
  console.log(i)
  1++
}

///////////////////////////////////////////////////////
let age = 10;
if (age>=18) {
  console.log("adult");
}else{
  console.log("under age");
}

///////////////////////////////////////////////////////
let grade = 70;
if (grade>=60 && grade<=70) {
  console.log("A");
}else if (grade>=50 && grade <=59){
  console.log("B");
}else{
  console.log("fail");
}
///////////////////////////////////////////////////////

switch ('red') {
  case 'red':
    console.log("A");
    break;
  case 'yellow':
    console.log("B");
    break;
  default:
    console.log("none");

}

///////////////////////////////////////////////////////
let age = parseInt(prompt ('How old are you'));
if (age==18) {
  console.log('Can drive a small car');
}else if (age>18 && age<=24){
  console.log("Can drive a big car");
}else if (age>24){
  console.log("Can drive a truck");
}else{
  console.log("Should not drive");
}
///////////////////////////////////////////////////////
let age = parseInt(prompt ('How old are you'));
if (age==18) {
  alert('Can drive a small car');
}else if (age>18 && age<=24){
  alert("Can drive a big car");
}else if (age>24){
  alert("Can drive a truck");
}else{
  alert("Too young to drive");
}
///////////////////////////////////////////////////////

let age = prompt ('How old are you');

function drive(age) {
  if (age==18) {
    document.write('Can drive a small car')
  }else if (age>18 && age<=24){
    document.write('Can drive a big car')
  }else if (age>24){
    document.write('Can drive a truck')
  }else{
    document.write('Too young to drive')
  }
}

drive(age)
///////////////////////////////////////////////////////
//HTML//
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <title></title>
  </head>
  <body>
    <form class="" action="index.html" method="post">
      <input type="text" name="age" id="age">
      <input type="submit" name="" value="Verify" onclick="drive(event)">
    </form>
    <div id="log"></div>
<script type="text/javascript" src="scripts.js"></script>
  </body>
</html>
//JavaScript//
function drive(event) {
  event.preventDefault();
  let age = document.getElementById('age').value;

  if (age==18) {
    document.getElementById('log').innerHTML ='Can drive a small car';
  }else if (age>18 && age<=24){
    document.getElementById('log').innerHTML ='Can drive a big car';
  }else if (age>24){
    document.getElementById('log').innerHTML = 'Can drive a truck';
  }else{
    document.getElementById('log').innerHTML = 'Too young to drive';
  }
}

drive(age)

///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////


///////////////////////////////////////////////////////
