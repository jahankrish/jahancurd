let selectedRow = null;
let educationDetails = [];
//let index = -1;
let record_to_edit_index = null;

function onFormSubmit(action) {
        let formData = null;
        if(action == "ADD") {
          formData = readFormData();
          educationDetails.push(formData);
           resetForm();
        } else if(action == "UPDATE") {
          formData = readUpdateFormData();
          educationDetails[record_to_edit_index] = formData;
          resetForm();
        }
        refreshTable();
       

}

function readFormData() {
        let formData = {};
        formData["qualification"] = document.getElementById("qualification").value;
        formData["institution"] = document.getElementById("institution").value;
        formData["yearOfPassing"] = document.getElementById("yearOfPassing").value;
        formData["percentage"] = document.getElementById("percentage").value;
        return formData;
}

function readUpdateFormData() {
        let formData = {};
        formData["qualification"] = document.getElementById("edit_qualification").value;
        formData["institution"] = document.getElementById("edit_institution").value;
        formData["yearOfPassing"] = document.getElementById("edit_yearOfPassing").value;
        formData["percentage"] = document.getElementById("edit_percentage").value;
        return formData;
}

function refreshTable() {
      // clear the table body
      document.getElementById("education_details_table").innerHTML = ""; 
      // construct the table data rows 
      tableDetails = "";
      for (let i = 0; i < educationDetails.length; i++) {
            let tableDet = educationDetails[i]; 
            tableDetails += "<tr>" + 
            "<td>"+tableDet.qualification+"</td>" + 
            "<td>"+tableDet.institution+"</td>" +
            "<td>"+tableDet.yearOfPassing+"</td>" + 
            "<td>"+tableDet.percentage+"</td>" + 
            "<td><button type='button' class='btn btn-success' data-bs-toggle='modal'data-bs-target='#editModal' onclick='onEdit("+i+")'>Edit</button>"+
            "<button type='button' class='btn btn-danger' style='margin-left:10px' onclick='onDelete("+i+")'>Delete</button> </td>" + 
        "</tr>" 
      }
      // set the rows in table body
      document.getElementById("education_details_table").innerHTML = tableDetails;         
 }
 
function resetForm() {
      document.getElementById("qualification").value = "";
      document.getElementById("institution").value = "";
      document.getElementById("yearOfPassing").value = "";
      document.getElementById("percentage").value = "";
      selectedRow = null;
}

function onDelete(index) {
      if (confirm("Are you sure to delete this record ?")) {
        educationDetails.splice(index,1);
        refreshTable();

      }
}

function onEdit(index) {
  record_to_edit_index = index;
  let record_to_edit = educationDetails[index];
  document.getElementById("edit_qualification").value = record_to_edit.qualification;
  document.getElementById("edit_institution").value = record_to_edit.institution;
  document.getElementById("edit_yearOfPassing").value = record_to_edit.yearOfPassing;
  document.getElementById("edit_percentage").value = record_to_edit.percentage;
}


 






