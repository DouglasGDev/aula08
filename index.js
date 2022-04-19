$.support.cors = true;

$(document).ready(
    function () {
        $('#conteudo').load("page01.html");
    }
)

$('#pg1').click(

    function () {
        $('#conteudo').load("page01.html");
        alert("Clique página 1");
        console.log("log do console");
    }
)

$('#pg2').click(

    function () {
        alert("Clique da página 2");
        console.log("log do console");
    }
)
