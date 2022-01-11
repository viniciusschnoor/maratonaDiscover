const Modal = {
    open(){
        // // Abrir modal
        // const modalOverlay = document.querySelector('.modal-overlay')
        // // console.log(modalOverlay) --> Apenas para consultar div
        // // Adicionar classe active ao modal
        // modalOverlay.classList.add('active')
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // // Fechar modal
        // const modalOverlay = document.querySelector('.modal-overlay')
        // // Remover classe active do modal
        // modalOverlay.classList.remove('active')
        document.querySelector('.modal-overlay').classList.remove('active')
    },
}