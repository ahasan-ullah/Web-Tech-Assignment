const table=document.querySelector("table");
const editForm=document.getElementById("editForm");
const editFormContainer=document.getElementById("editFormContainer");

function deleteRow(row){
  row.remove();
}

function editRow(row){
  const cells = row.querySelectorAll("td");
  document.getElementById("editRowIndex").value=row.rowIndex;
  document.getElementById("editId").value=cells[0].textContent;
  document.getElementById("editName").value=cells[1].textContent;
  document.getElementById("editEmail").value=cells[2].textContent;
  document.getElementById("editDept").value=cells[3].textContent;
  document.getElementById("editDate").value=cells[4].textContent;
  document.getElementById("editGender").value=cells[5].textContent;
  document.getElementById("editType").value=cells[6].textContent;

  editFormContainer.style.display="block";
}

editForm.addEventListener("submit",function(e) {
  e.preventDefault();
  const index=document.getElementById("editRowIndex").value;
  const row=table.rows[index];
  row.cells[0].textContent=document.getElementById("editId").value;
  row.cells[1].textContent=document.getElementById("editName").value;
  row.cells[2].textContent=document.getElementById("editEmail").value;
  row.cells[3].textContent=document.getElementById("editDept").value;
  row.cells[4].textContent=document.getElementById("editDate").value;
  row.cells[5].textContent=document.getElementById("editGender").value;
  row.cells[6].textContent=document.getElementById("editType").value;
  editFormContainer.style.display="none";
});

table.addEventListener("click", function(e) {
  const target = e.target;
  //console.log(target)
  const row = target.closest("tr");
  //console.log(row);
  if (target.textContent === "Delete") {
    deleteRow(row);
  } else if (target.textContent === "Edit") {
    editRow(row);
  }
});