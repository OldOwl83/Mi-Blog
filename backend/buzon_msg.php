<?php

if(isset($_POST["casilla"]))
{
    if(!$archivo = fopen("mensajes/mens_recibidos.txt", "a"))
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

    mail("maurodonnamora@gmail.com", "Nuevo mensaje en ¡Hola Código!", "¡¡¡Llegó nuevo mensaje!!!");

}else
{
    exit("El formulario no fue enviado correctamente.");
}
?>
