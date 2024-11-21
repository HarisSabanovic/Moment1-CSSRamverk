const formEL = document.getElementById("formID");
const tableEl = document.getElementById("tableID");

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});



loadData();

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
    let bulmaData = [];

    rows.forEach(row => {
        let person = {
            name: row.cells[0].innerHTML,
            gender: row.cells[1].innerHTML,
            country: row.cells[2].innerHTML,
            info: row.cells[3].innerHTML
        }

        bulmaData.push(person);
    })

    localStorage.setItem("bulmaData", JSON.stringify(bulmaData));


}


function loadData() {
    let bulmaData = JSON.parse(localStorage.getItem("bulmaData"));

    console.log(bulmaData);

    if (bulmaData) {
        tableEl.querySelector("tbody").innerHTML = "";
        
        bulmaData.forEach(person => {
            let newPerson = document.createElement("tr");

            newPerson.innerHTML = `
                <td>${person.name}</td>
                <td>${person.gender}</td>
                <td>${person.country}</td>
                <td>${person.info}</td>
                `;

                tableEl.querySelector("tbody").appendChild(newPerson);
        })
    }
}