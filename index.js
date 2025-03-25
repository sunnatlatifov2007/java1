// functions
// let age = prompt("Are you 18?")
// function checkage(age) {
//     if (age >= 18) {
//         alert("You can enter!")
//     }else{
//         alert("You cannot enter!")
//     }
// }

// if(!isNaN(age) && age!== ""){
//     checkage(Number(age));
// }else{
//     alert("Stupid!")
// }

// function calc(a, b, commands) {
//     switch(commands){
//         case "+":
//            console.log(a + b);
//         break;
//         case "-":
//             console.log(a - b);
//             break;
//         case "*":
//             console.log(a * b);
//             break;
//         case "%":
//             console.log(a % b);
//             break;
//          case "**":   
//             console.log(a ** b);
//             break;
//          case "/":
//             console.log(a / b);
//             break;
//     }
// }


// let a = Number(prompt("Enter a number (a):"))

// let b = Number(prompt("Enter another number (b):"))
// let commands = prompt("choose a command: +, *, **, %, /, -");

// calc(a, b, commands)


// function searchLongestName(name1, name2, name3) {
//     if (name1.length > name2.length && name1.length > name3.length) {
//         return name1;
//     } else if (name2.length >= name1.length && name2.length >= name3.length) {
//         return name2;
//     } else {
//         return name3;
//     }
// }


// let longestName = searchLongestName("Alex", "George", "Michael");
// console.log("Самое длинное имя:", longestName);

// declaration
// function name(params) {
    
// }
// // expression
// let name2 = function name(params) {
    
// }
// // arrow function
// let name3 = () => {

// }

const companies = [
     { id: 1, name: "Компания А", industry: "IT", employees: 150, revenue: 200000 },
     { id: 2, name: "Компания Б", industry: "Финансы", employees: 300, revenue: 500000 },
     { id: 3, name: "Компания В", industry: "Производство", employees: 500, revenue: 750000 },
     { id: 4, name: "Компания Г", industry: "Ритейл", employees: 50, revenue: 100000 },
     { id: 5, name: "Компания Д", industry: "IT", employees: 200, revenue: 300000 },
     { id: 6, name: "Компания Е", industry: "Логистика", employees: 100, revenue: 150000 }
    ];
      
    function countEmployess(companies) {
        let total = 0;

        for(let i = 0; i < companies.length; i++){
            total += companies[i].employees;
        }
        return total;
    }
    const totalemployees = countEmployess(companies)
    console.log(totalemployees);


    function finditcompanies (companies){
        return companies.filter(company => company.industry === "IT");
    }
    const itcompanies = finditcompanies(companies);
    console.log(itcompanies);
    
   
    companies.sort((a, b) => b.revenue - a.revenue);
    console.log(companies);
    
     
    
