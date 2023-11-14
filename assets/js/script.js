
let students = [
    { admissionNumber: 1007, name: "Fabio Quartararo", age: 20, department: "Math", totalMarks: 85 },
    { admissionNumber: 1004, name: "Alex Espargaro", age: 22, department: "Physics", totalMarks: 75 },
    { admissionNumber: 1002, name: "Valentino Rossi", age: 21, department: "Chemistry", totalMarks: 90 },
    { admissionNumber: 1001, name: "Marq Marquez", age: 23, department: "Computer Science", totalMarks: 95 },
    { admissionNumber: 1003, name: "Jorge Martin", age: 22, department: "Chemistry", totalMarks: 70 },
    { admissionNumber: 1009, name: "Marco Bezzecchi", age: 20, department: "Math", totalMarks: 65 },
    { admissionNumber: 1005, name: "Brad Binder", age: 23, department: "Physics", totalMarks: 80 },
    { admissionNumber: 1008, name: "Jack Miller", age: 23, department: "Physics", totalMarks: 80 },
    { admissionNumber: 1006, name: "Luca Marini", age: 21, department: "Chemistry", totalMarks: 60 },
    
];
// Function to display students in the table
    studentsDetails = (data) => {
    let tableBody = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    (data || students).forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.admissionNumber}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tableBody.appendChild(row);
    });
}
 
 sortTable = () =>{
    let sortItems = document.getElementById("sortDropdown").value;

    students.sort((a, b) =>{
        if (sortItems === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortItems === "age") {
            return a.age - b.age;
        } else if (sortItems === "admission") {
            return a.admissionNumber - b.admissionNumber;
        } else if (sortItems === "totalMarks") {
            return b.totalMarks - a.totalMarks;
        }
    });
    updateTable();
}

 updateTable = () =>{
    studentsDetails();
    console.clear();
    console.table(students);
}

// Function to Search the table
searchTable = () => {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredStudents = students.filter(student =>
        Object.values(student).some(value =>
            value.toString().toLowerCase().includes(searchInput)
        )
    );
    studentsDetails(filteredStudents);
    console.log(filteredStudents);
}

// Function to filter the table
filterMarks = () => {
    let filterInput = document.getElementById("filterInput").value;
    let filteredStudents = students.filter(student => student.totalMarks >= filterInput);
    studentsDetails(filteredStudents);
    console.log(filteredStudents);
}
studentsDetails();
updateTable();
