$.ajax({
  url: "horaServidor.php",
  dataType: "html",
  type: "get",
  beforeSend: () => {
    alert("Obteniendo la hora del servidor...");
  },
  success: (data) => {
    $('#r').text(data);
  },
  error: (error) => {
    alert('Error');
    $('#r').text("Error " + error.status);
  },
});
