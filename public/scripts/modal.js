export default function Modal() {

    const getModal = document.querySelector('div.modal-wrapper');


    function open() {
        getModal.classList.add("active")
    }
    function close() {
        getModal.classList.remove("active")
    }

    return {
        open,
        close
    }
}