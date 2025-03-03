

const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];
const comments = [];
let i = 0;

let comentar = (event) => {
    event.preventDefault();
    if (inputComment.value.trim() === "") {
        alert("Por favor, escribe un comentario");
        return;
    }
    const fecha = new Date();
    const hoy = fecha.toLocaleString();
    const comment = {
        id: i++,
        date: hoy,
        comment: inputComment.value,
        user: "Pepe"
    };
    comments.push(comment);
    printComment(comments);
    inputComment.value = "";
};

let printComment = (array) => {
    boxComments.innerHTML = "";
    array.forEach((item) => {
        const { date, comment, user } = item;
        boxComments.innerHTML += `
            <li>
                ${comment} 
                🤝 User: ${user} 
                📆 Fecha: ${date.split(' ')[0]} 
                🕰️ Hora: ${date.split(' ')[1]}
                <button class="eliminar" data-id="${item.id}">Eliminar</button>
            </li>
        `;
    });
    const eliminarBtns = document.querySelectorAll(".eliminar");
    eliminarBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            comments.forEach((comment, index) => {
                if (comment.id == id) {
                    comments.splice(index, 1);
                }
            });
            printComment(comments);
        });
    });
};

btnComment.addEventListener("click", comentar);
