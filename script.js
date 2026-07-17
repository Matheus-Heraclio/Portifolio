const moldal1 = document.getElementById ("moldal1")
const dialog = document.getElementById ("meumoldal")
moldal1.addEventListener("click", abrirmoldal)
    function abrirmoldal(){
        dialog.showModal();
    document.body.style.overflow = "hidden";
    }

const closemodal = document.getElementById ("closemodal")
    closemodal.addEventListener("click", fecharmodal)
        function fecharmodal(){
            dialog.close();
                document.body.style.overflow = "";
        }

// Funcionalidade para o novo projeto - Landing Page Agência Dema
const moldal4 = document.getElementById("moldal4")
const dialog4 = document.getElementById("meumoldal4")

if (moldal4 && dialog4) {
    moldal4.addEventListener("click", abrirmoldal4)
    function abrirmoldal4(){
        dialog4.showModal();
        document.body.style.overflow = "hidden";
    }

    const closemodal4 = document.getElementById("closemodal4")
    if (closemodal4) {
        closemodal4.addEventListener("click", fecharmodal4)
        function fecharmodal4(){
            dialog4.close();
            document.body.style.overflow = "";
        }
    }
}
