<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DETRAN</title>
 
</head>
<body>
<h1>Sistemas de Multas</h1>
Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> Km/h
<input type="button" value="Verificar" onclick="calcular()">
<div id="res">

    
</div>

<script>
    function calcular(){
        var txtv = window.document.getElementById(' input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number(txtv.value);
        res.innerHTML = `Sua velocidade atual é de ${vel}`
    }
</script>
   
</body>
</html>