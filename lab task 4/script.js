document.getElementById("studentForm").addEventListener("submit", function(event){

    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let sid = document.getElementById("sid").value.trim();
    let email = document.getElementById("email").value.trim();
    let credit = document.getElementById("credit").value;
    let department = document.getElementById("department").value;

    let error = "";

    if(fname == ""){
        error = "First Name cannot be empty.";
    }
    else if(lname == ""){
        error = "Last Name cannot be empty.";
    }
    else if(!sid.includes("-")){
        error = "Student ID must contain '-'.";
    }
    else if(!email.endsWith("@student.aiub.edu")){
        error = "Email must end with @student.aiub.edu.";
    }
    else if(credit == "" || credit < 0 || credit >= 148){
        error = "Credit must be between 0 and 147.";
    }
    else if(department == ""){
        error = "Please select a department.";
    }

    document.getElementById("error").innerHTML = error;

    if(error == ""){

        let table = document.getElementById("studentTable");

        let row = table.insertRow();

        row.insertCell(0).innerHTML = fname;
        row.insertCell(1).innerHTML = lname;
        row.insertCell(2).innerHTML = sid;
        row.insertCell(3).innerHTML = email;
        row.insertCell(4).innerHTML = credit;
        row.insertCell(5).innerHTML = department;

        document.getElementById("studentForm").reset();
    }

});