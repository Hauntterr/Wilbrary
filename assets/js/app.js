// Função para verificar se o user está autenticado

function checkAuthentication() {
    //Verifique se o user está autenticado comparando com um valor no localStorage
    const IsAuthenticated = localStorage.getItem('authenticated');

    // Se isAuthenticated for verdadeiro, o user está autenticado
    return IsAuthenticated === 'true';
}

// Verificar a autenticação antes de permitir o acesso á dashboard
window.addEventListener('DOMContentLoaded', () => {
    if (!checkAuthentication()) {
        //Se o user não estiver autenticado, redirecione para a página login
        window.location.href = 'login.html';
    }
});

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}