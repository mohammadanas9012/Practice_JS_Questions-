// let color="green";

// if(color === "red"){
//     console.log("Stop");
// }
// else if(color === "yellow"){
//     console.log(" Slow Down");
// }
// else if(color === "green") {
//     console.log("Go");
// }
// else{
//     console.log("Invalid Color");
// }



/// Good String

// let string="Bnas Kamal";

// if(string[0] === 'A' && string.length>3){
//     console.log("Good String");
// }
// else{
//     console.log("Not a good string");
// }


// let firstName = prompt("Enter your name");
// let lastName=prompt("Enter your last name");

// console.log("Welcome", firstName, " ", lastName);



// Question 1: Create a button and when it's clicked change the paragraph content;

// let btn=document.querySelector("button");
// let p=document.querySelector("p");

// btn.addEventListener("click",function(){
//     p.textContent="Hey I am here";
// })



// Question 2: Create a page with 2 images and a button and when the button is clicked swap the source 
    //          attributes of the image.

// let img1= document.querySelector("#one");
// let img2= document.querySelector("#two");

// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let src1=img1.src;
//     let src2=img2.src;

//     img1.src=src2;
//     img2.src=src1;
// })



// Question 3: Create a form with input field and a submit button. Use javascript to validate the form
//          and display an error message if the input is invalid.



//Question 4:
// const a1={
//     name : "Harry",
//     section : 1,
//     isPrincipal: false
// }

// a1['friend']= 'Shakir';
// console.log(a1);


// Question 5: 

// const dict = {
//     appreciate  : " recognize the full worth of",
//     ataraxia : "a state of freedom from emotional disturbance and anxiety",
//     yakka : "work, espically hard work"
// }
// console.log(dict.yakka);


// let umar = 19;

// let ans = umar >= 18 ? "You can drive" : "You cannot drive";
// console.log(ans);




// Chapter 3 :  Practice Set

// Question 1:
// let marks = {
//     anas: "78",
//     harry: "90",
//     farhan : "89",
//     rohit : "09"
// }

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log(" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// for(let key in marks){
//     console.log("The marks of "+ key + " are " + marks[key]);
// }

// Question 3:

// let cn= 7;
// let i;
// let x=1

// while(i!=cn){
//     console.log("Try Again");
//     i=prompt("Enter the number");
//     x++;
// }
// console.log("You entered a correct number in " + x + " Attempts" )


// Question 4 : Find the mean of 4 numbers

// const mean = (a,b,c,d)=>{
//     return (a+b+c+d)/4;
// } 
// console.log(mean(4,5,6,7));


// let name1= "Anas";
// let name2 = "Kamal";
// let name3 = name1.concat(name2, "yes");
// console.log(name3);




// Chapter 4 :

// Question : 
// const sentence = "The quick brown fox jumps over the lazy dog";
// const word = "fox";

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'}  in the sentence`);


// Question 4:

// let string3= "Please give Rs 1000";
// let amount = Number.parseInt(string3.slice("Please give Rs ".length));
// console.log(amount);



// PP3:

// let arr = [1,2,5,10,20,35,50,70];
// let n = arr.filter ((x)=>{
//     return x%10 == 0;
// });
// console.log(n);



//PP4:

// let arr = [1,2,5,10,20,35,50,70];
// let n = arr.map((x)=>{
//     return x*x;
// });
// console.log(n);



//PP 5 :

let arr = [1,2,3,4,5,6];
let n = arr.reduce((x1,x2)=>{
    return x1*x2;
});
console.log(n);

