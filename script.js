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
    const abaAtual = document.getElementById(nomeAba);
    if (!abaAtual) return;

    abaAtual.classList.add("active");
    evt.currentTarget.classList.add("active");

    // Forçar visibilidade dos itens que podem ter sido escondidos pelo ScrollReveal
    const itensAba = abaAtual.querySelectorAll('.certificado-item, .box');
    itensAba.forEach(item => {
        item.style.opacity = "1";
        item.style.visibility = "visible";
        item.style.transform = "none";
    });
}

// Lógica para abrir e fechar modais de projetos
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        if (typeof modal.showModal === 'function') {
            modal.showModal();
        } else {
            modal.setAttribute('open', '');
        }
        document.body.style.overflow = "hidden";
    }
}

function fecharModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        if (typeof modal.close === 'function') {
            modal.close();
        } else {
            modal.removeAttribute('open');
        }
        document.body.style.overflow = "";
    }
}

// Lógica para o Modal de Certificados (Lightbox)
function abrirCertificado(elemento) {
    const modal = document.getElementById("modal-certificado");
    const imgModal = document.getElementById("img-certificado");
    const imgClicada = elemento.getElementsByTagName("img")[0];
    
    modal.style.display = "block";
    imgModal.src = imgClicada.src;
    document.body.style.overflow = "hidden"; // Trava o scroll
}

function fecharCertificado() {
    const modal = document.getElementById("modal-certificado");
    modal.style.display = "none";
    document.body.style.overflow = ""; // Destrava o scroll
}

function closeOpenDialogs() {
    const openDialogs = document.querySelectorAll('dialog[open]');
    openDialogs.forEach(dialog => dialog.close());
    document.body.style.overflow = "";
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeOpenDialogs();
        fecharCertificado();
    }
});

document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
        if (!document.querySelector('dialog[open]')) {
            document.body.style.overflow = "";
        }
    });
});

// Fechar modais ao clicar fora deles
document.addEventListener('click', (event) => {
    // Para modais de projetos (dialog)
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
        if (event.target === dialog) {
            dialog.close();
            document.body.style.overflow = "";
        }
    });

    // Para modal de certificado (lightbox)
    const modalCert = document.getElementById("modal-certificado");
    if (event.target === modalCert) {
        fecharCertificado();
    }
});

// Configurações do ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 100,
    reset: true // Define como true se quiser que a animação repita toda vez que rolar
});

// Animações para a seção Início
sr.reveal('.ola', { delay: 50, origin: 'left' });
sr.reveal('.nome', { delay: 150, origin: 'left' });
sr.reveal('.front', { delay: 250, origin: 'left' });
sr.reveal('.botoes-inicio', { delay: 350, origin: 'bottom' });
sr.reveal('.scroll-indicator', { delay: 450, origin: 'bottom' });

// Animações para a seção Sobre Mim
sr.reveal('.foto', { delay: 300, origin: 'left' });
sr.reveal('.textosobre', { delay: 500, origin: 'right' });

// Animações para as Estatísticas (efeito cascata)
sr.reveal('.estatistica-item', { interval: 200, origin: 'bottom' });

// Animações para o Portfólio
sr.reveal('.abas-container', { delay: 300, origin: 'top' });
sr.reveal('.projeto-card', { interval: 200, origin: 'bottom' });
// sr.reveal('.certificado-item', { interval: 200, origin: 'bottom' });
// sr.reveal('.box', { interval: 100, origin: 'scale', distance: '0px' });

// Animações para Contatos
sr.reveal('.contatos h2', { delay: 300 });
sr.reveal('.icon-box', { interval: 200, origin: 'bottom' });
