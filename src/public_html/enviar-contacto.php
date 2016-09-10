<HTML>
<HEAD>
  <TITLE>Redireccionado</TITLE> 
  <!-- bootstrap core javascript -->
 	<script src="bootstrap/dist/js/bootstrap.min.js"></script>
 	  <!-- Bootstrap Core CSS -->
    <link href="bootstrap/dist/css/bootstrap-custom.min.css" rel="stylesheet">

 	
  <SCRIPT LANGUAGE="JavaScript">
  function redireccionar() {
    var timer = setTimeout(function() {
            window.location='http://grupoacera.com'
        }, 3000);
    // setTimeout("location.href=index.html", 3000);//Aqui debes poner a que pagina quieres redireccionar
  }
  </SCRIPT>
</HEAD>
<BODY onLoad="redireccionar()">
<?php
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$empresa = $_POST['empresa'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",
 de la empresa " . $empresa . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'contacto@grupoacera.com';
$asunto = 'El cliente ' . $nombre . ' desea ponerse en contacto.';

mail($para, $asunto, utf8_decode($mensaje), $header);
// echo "Tu email ha sido enviado de forma exitosa!, espera 3 segundos";


?>

<div class="alert alert-success">
	Su mensaje se ha recibido correctamente!, en unos segundos le redireccionaremos.	
</div>

</BODY>
</HTML>