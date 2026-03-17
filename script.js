// Lógica para alternar as abas do portfólio
function abrirAba(evt, nomeAba) {
    var i, abaConteudo, abaBtn;
    
    // Esconder todos os conteúdos das abas
    abaConteudo = document.getElementsByClassName("aba-conteudo");
    for (i = 0; i < abaConteudo.length; i++) {
        abaConteudo[i].classList.remove("active");
    }

    // Remover a classe 'active' de todos os botões
    abaBtn = document.getElementsByClassName("aba-btn");
    for (i = 0; i < abaBtn.length; i++) {
        abaBtn[i].classList.remove("active");
    }

    // Mostrar a aba atual e adicionar a classe 'active' ao botão que a abriu
    document.getElementById(nomeAba).classList.add("active");
    evt.currentTarget.classList.add("active");
}




// Lógica para abrir e fechar modais
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.showModal();
        document.body.style.overflow = "hidden";
    }
}

function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.close();
        document.body.style.overflow = "";
    }
}

// Fechar modal ao clicar fora dele (no backdrop)
document.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('dialog');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.close();
            document.body.style.overflow = "";
        }
    });
});



//modal 3


function abrirModal3(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.showModal();
        document.body.style.overflow = "hidden";
    }
}

function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.close();
        document.body.style.overflow = "";
    }
}

// Fechar modal ao clicar fora dele (no backdrop)
document.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('dialog');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.close();
            document.body.style.overflow = "";
        }
    });
});