// BOTAR O ESC PRA FECHAR A MODAL É AQUI NESSA MAIN

import Modal from './modal.js';

const modal = Modal();

//Mapear os textos da modal
const modalTitle = document.querySelector(".modal h2")

const modalText = document.querySelector(".modal p")


//Pegar todos os botões com a classe mark-as-read
const checkButtons = document.querySelectorAll(".actions a.mark-as-read")

checkButtons.forEach(button => {
    //Adicionar a escuta a cada botão que ele achar
    button.addEventListener("click", handleClick)
})

//Pega todos os botões excluir (igual o de cima mas em uma linha só)
const deleteButtons = document.querySelectorAll(".actions .delete").forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

const getCancelButton = document.querySelector("#cancelButton").addEventListener("click", event => {
    event.preventDefault();
    modal.close();
})

const getYesButton = document.getElementById("yesButton")
getYesButton.addEventListener("click", event => {
    // event.preventDefault();
    // modal.open();
})


function handleClick(event, check = true) {

    event.preventDefault();
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id;

    const questionId = event.currentTarget.dataset.id;


    const getForm = document.querySelector(".modal form");

    let finalHTML = `/question/${roomId}/${questionId}/${slug}`
    getForm.setAttribute("action", finalHTML)


    modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir pergunta";
    modalText.innerHTML = check ? "Tem certeza que deseja marcar como lido?" : "Tem certeza que você deseja excluir esta pergunta?"

    getYesButton.innerHTML = check ? "Marcar como lido" : "Sim, excluir";
    check ? getYesButton.classList.remove("red-button") : getYesButton.classList.add("red-button")


    modal.open();
}