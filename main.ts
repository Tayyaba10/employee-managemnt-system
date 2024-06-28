import inquirer from "inquirer";

//define type
interface Employee {
    employeeId : number,
    employeeName: string,
    salary: number,
}

//variable initializing
let collectionOfEmployee : Employee [] = []

async function startEmployeeManagementSystem () {
    console.log("******** Welcome To Employee Management System********");
    console.log( "\n");
    

let selectedOption = await inquirer.prompt([
    {
        name : "userSelectedOption",
        type : "list" ,
        message : "Please select an option",
        choices : [
            "Add Employee",
            "Delete Employee",
            "Veiw Employee",
            "Update Employee",
            "Exit"
         ]

    }
 ])
  switch (selectedOption.userSelectedOption) {
    case "Add Employee":
        addEmployee ();
        break;
     case "Delete Employee":
        deleteEmployee();
         break;
     case "veiw Employee":
        viewAllEmployee();
        break;
     case "Update Employee":
         
        break; 
  
    default:
        process.exit()
    
  }
}

async function addEmployee() {
    console.log("\n");
    let employeeDetail = await inquirer.prompt([
        {
            name : "employeeName",
            type : "input" ,
            message : "Please enter employee name :"
        },
        {
            name : "employeeId",
            type : "number",
            message : "Please enter 4 digit employee id :"
        },
        {
            name : "salary",
            type : "number",
            message : "Please enter employee salary :"
        }
    ])
    collectionOfEmployee.push({
        employeeName : employeeDetail.employeeName,
        employeeId : employeeDetail.employeeId,
        salary : employeeDetail.salary,
    })

    console.log("\n");
    console.log("******** Added Sucessfully ********");
    console.log("\n");
    console.log(collectionOfEmployee[collectionOfEmployee.length - 1]);
    startEmployeeManagementSystem();
    
}

function viewAllEmployee() {
    console.log("********Veiw all of your employees********");
    console.log("\n");
    for (let index = 0; index < collectionOfEmployee.length; index++) {
        console.log(collectionOfEmployee[index]);
        console.log("\n");
        
    }
    startEmployeeManagementSystem();
    
}

async function deleteEmployee() {
    let employeeDetail = await inquirer.prompt([
        {
            name : "employee id ",
            type : "number",
            message : "Please enter employee id :"
        }
    ])
 collectionOfEmployee = collectionOfEmployee.filter(
    (x) => x.employeeId != employeeDetail.employeeId
 );
 console.log("******** Employee Delete Sucessfully ! ********");
 console.log('\n');
 startEmployeeManagementSystem();
 
}
startEmployeeManagementSystem();








