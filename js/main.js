
const formEL = document.getElementById("formID");
const tableEl = document.getElementById("tableID");

document.addEventListener("DOMContentLoaded", loadData);

formEL.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameInput = document.getElementById("firstname").value;
    let countryInput = document.getElementById("country").value;
    let genderInput = document.querySelector('input[name="gender"]:checked').value;
    let infoInput = document.getElementById("info").value;

    let newPerson = document.createElement("tr");

    
    newPerson.innerHTML = `
        <td>${nameInput}</td>
        <td>${genderInput}</td>
        <td>${countryInput}</td>
        <td>${infoInput}</td>
    `;

    tableEl.querySelector("tbody").appendChild(newPerson);
    saveTableData();

});

function saveTableData() {
    let rows = tableEl.querySelectorAll("tbody tr");
    let tableData = [];

    rows.forEach(row => {
        let person = {
            name: row.cells[0].innerHTML,
            gender: row.cells[1].innerHTML,
            country: row.cells[2].innerHTML,
            info: row.cells[3].innerHTML
        }

        tableData.push(person);
    })

    localStorage.setItem("tableData", JSON.stringify(tableData));

  

    loadData();
}


function loadData() {
    let tableData = JSON.parse(localStorage.getItem("tableData"));
      // Rensa tabellen innan nya rader läggs till
      tableEl.querySelector("tbody").innerHTML = "";

    if (tableData) {
        tableData.forEach(person => {
            let newPerson = document.createElement("tr");

            newPerson.innerHTML = `
                <td>${person.name}</td>
                <td>${person.gender}</td>
                <td>${person.country}</td>
                <td>${person.info}</td>
                `;

                tableEl.querySelector("tbody").appendChild(newPerson);
        }
    )};
}