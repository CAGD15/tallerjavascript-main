var selectedRow = null;

function onFormSubmit(e) {
  if (validarFormulario() == true) {
    event.preventDefault();

    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
      insertNewRecord2(formData);
    } else {
      updateRecord(formData);
    }
    resetForm();
  } else {
    console.log("error");
  }
}

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["codigo"] = document.getElementById("codigo").value;
  formData["nombre"] = document.getElementById("nombre").value;
  formData["tipo_proyecto"] = document.getElementById("tipo_proyecto").value;
  formData["fecha_ini"] = document.getElementById("fecha_ini").value;
  formData["fecha_fin"] = document.getElementById("fecha_fin").value;
  formData["responsable"] = document.getElementById("responsable").value;
  formData["presupuesto"] = document.getElementById("presupuesto").value;
  formData["tipo_persona"] = document.getElementById("tipo_persona").value;
  formData["tipo_persona2"] = document.getElementById("tipo_persona2").value;
  formData["tipo_profesor"] = document.getElementById("tipo_profesor").value;
  formData["semestreEstudiante"] =
    document.getElementById("semestreEstudiante").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.nombre;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.responsable;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.fecha_ini;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.fecha_fin;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = restarFechas(data.fecha_ini, data.fecha_fin);
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button> <button onClick="openModal('modal')">Vista Rapida</button>`;
}

function insertNewRecord2(data) {
  var table = document
    .getElementById("storeList2")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.codigo;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.nombre;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.tipo_proyecto;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.fecha_ini;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.fecha_fin;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.responsable;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.presupuesto;
  cell8 = newRow.insertCell(7);
  (cell8.innerHTML = data.tipo_persona), data.tipo_persona2;
  cell9 = newRow.insertCell(8);
  (cell9.innerHTML = data.tipo_profesor), data.semestreEstudiante;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
  document.getElementById("responsable").value = selectedRow.cells[1].innerHTML;
  document.getElementById("fecha_ini").value = selectedRow.cells[2].innerHTML;
  document.getElementById("fecha_fin").value = selectedRow.cells[3].innerHTML;
  document.getElementById("presupuesto").value = selectedRow.cells[4].innerHTML;
}

function onEdit2(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("codigo").value = selectedRow.cells[0].innerHTML;
  document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
  document.getElementById("tipo_proyecto").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("fecha_ini").value = selectedRow.cells[3].innerHTML;
  document.getElementById("fecha_fin").value = selectedRow.cells[4].innerHTML;
  document.getElementById("responsable").value = selectedRow.cells[5].innerHTML;
  document.getElementById("presupuesto").value = selectedRow.cells[6].innerHTML;
  document.getElementById("tipo_persona").value =
    selectedRow.cells[7].innerHTML;
  document.getElementById("tipo_profesor").value =
    selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.nombre;
  selectedRow.cells[1].innerHTML = formData.responsable;
  selectedRow.cells[2].innerHTML = formData.fecha_ini;
  selectedRow.cells[3].innerHTML = formData.fecha_fin;
  selectedRow.cells[4].innerHTML = formData.presupuesto;
}

function updateRecord2(formData) {
  selectedRow.cells[0].innerHTML = formData.codigo;
  selectedRow.cells[1].innerHTML = formData.nombre;
  selectedRow.cells[2].innerHTML = formData.tipo_proyecto;
  selectedRow.cells[3].innerHTML = formData.fecha_ini;
  selectedRow.cells[4].innerHTML = formData.fecha_fin;
  selectedRow.cells[5].innerHTML = formData.responsable;
  selectedRow.cells[6].innerHTML = formData.presupuesto;
  selectedRow.cells[7].innerHTML = formData.tipo_persona;
  selectedRow.cells[8].innerHTML = formData.tipo_profesor;
}

//Delete the data
function onDelete(td) {
  if (confirm("Esta seguro que quiere eliminar esto?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    document.getElementById("storeList2").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("nombre").value = "";
  document.getElementById("responsable").value = "";
  document.getElementById("fecha_ini").value = "";
  document.getElementById("fecha_fin").value = "";
  selectedRow = null;
}

// funcion para restar fechas
function restarFechas(fecha_ini, fecha_fin) {
  var fechaInicial = new Date(fecha_ini);
  var fechaFinal = new Date(fecha_fin);
  var diferencia = fechaFinal - fechaInicial;
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return dias;
}

//Vista rapida que llama al enevto onVista para mostrar todos los datos restantes de la fila

// abrir cerrar modals
window.openModal = function (modalId) {
  document.getElementById(modalId).style.display = "block";
  document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
};

window.closeModal = function (modalId) {
  document.getElementById(modalId).style.display = "none";
  document
    .getElementsByTagName("body")[0]
    .classList.remove("overflow-y-hidden");
};

// Close all modals when press ESC
document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-y-hidden");
    let modals = document.getElementsByClassName("modal");
    Array.prototype.slice.call(modals).forEach((i) => {
      i.style.display = "none";
    });
  }
};
