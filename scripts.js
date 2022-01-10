const Modal = {
    open(){
        // Abrir modal
        const modalOverlay = document.querySelector('.modal-overlay')
        // console.log(modalOverlay) --> Apenas para consultar div
        // Adicionar classe active ao modal
        modalOverlay.setAttribute('class', 'modal-overlay active')
    },
    close(){
        // Fechar modal
        // Remover classe active do modal
    },
}