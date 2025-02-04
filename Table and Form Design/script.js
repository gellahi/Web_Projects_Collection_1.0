document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let age = document.getElementById('age').value;
    let course = document.getElementById('course').value;
    let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow();
    newRow.innerHTML = `<td>${fullName}</td><td>${age}</td><td>${course}</td>`;
    document.getElementById('dataForm').reset();
});