<!DOCTYPE html>
<html>
<head>
  <title>validacion</title>
  <script src="./js/validar.js"></script>
</head>
<body>
  <form name='f1' onsubmit="return validar();">
      <label for="usuario">Usuario</label>  
    <input type='text' name='usuario' id='usuario' value="" />
    <div id="validar_usuario" style="color:red;"></div>
    <label for="clave">Clave: (longitud>=8 caracteres)</label>  
    <input type='text' name='clave' id='clave' value="" />
    <div id="validar_clave" style="color:red;"></div>
      <input type='submit'  value='Enviar'></td>
  </form>
</body>
</html>
