let uploadINput = document.createElement("#upload");
let btnAdd = document.createElement("#addImage");
let glaeria = document.createElement(".galeria");
let carrossel = document.createElement(".carrossel");

let imagens = [];
btnAdd.addEventListener("click", ()=>{
    let imageURL = uploadINput.value.trim();
    if(imageURL=== "")return;// se a imagem for vazia, não faz nada
    imagens.push(imageURL);
    atualizarGaleria();//recarrega a galeria
    atualizarCarrossel();//recarrega carrossel
    uploadINput.value = "";//limpa o input
});

//atualizar Galeria
function atualizarGaleria(){
    glaeria.innerHTML = "";//limpa a galeria
    imagens.forEach(
        (imagem, index) =>{
            let div = document.createElement("div");
            div.classList.add("imagemContainer");
            let img = document.createElement("img");
            img.src = imagem;
            let btnRemove = document.createElement("button");   
            btnRemove.innerText = "X";
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click", ()=>{
                imagens.splice(index,1);
                atualoizarGaleria();//recursão

            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            glaeria.appendChild(div);
        }
    )
}

//atualizar Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML = "";//limpa o carrossel
    imagens.forEach(imagem =>{
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%";
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length * 100}%`;//ajusta a largura do carrossel
    inicialCarrossel();
}

function inicialCarrossel(){
    let index = 0;
    setInterval(
        ()=>{
            index = (index+1)%imagens.length;
            carrossel.style.transition = `transform ${(1+imagens.length)/imagens.length}s ease-in-out`;
            carrossel.style.transform  = `translateX(-${index*100/imagens.length}%)`;
    }, 2000);
}