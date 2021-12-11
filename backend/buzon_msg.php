<?php

if(isset($_POST["casilla"]))
{
    if(!$archivo = fopen("../../mensajes/mens_recibidos.txt", "a"))
    {
        exit("Error en la apertura del archivo de mensajes.");
    }

    foreach($_POST as $valor)
        $valor = addslashes(strip_tags($valor));

    $fecha = date(DATE_RSS);

    $buffer_escritura = "\n-----------------------------------------------------------------\n\nFecha:\t\t\t" . $fecha . "\nNombre:\t\t" . $_POST['nombre'] . "\nCasilla:\t\t\t" . $_POST['casilla'] . "\nMensaje:\n\t\t\t\t" . $_POST['mensaje'];

    if(!fwrite($archivo, $buffer_escritura))
    {
        exit("Error en el registro del mensaje.");
    }

    fclose($archivo);

    echo "<h3>Buzón de mensajes</h3><p>El mensaje fue enviado correctamente. Muchas gracias por tu interés. Pronto recibirás una respuesta.</p>";


    mail("mi_mail@mi_mail.com", "Nuevo mensaje en Hello Code!", "¡¡¡Llegó nuevo mensaje!!!", "From: mi_mail@mi_mail.com\r\nContent-type: text/html; charset=UTF-8");

}else
{
    exit("El formulario no fue enviado correctamente.");
}
?>
