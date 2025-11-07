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
