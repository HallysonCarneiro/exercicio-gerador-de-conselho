const botaoAtualizarConselho = document.querySelector(".atualizar-conselho");
const idConselho = document.querySelector(".id-do-conselho");
const descricaoConselho = document.querySelector(".descricao-conselho");


async function atualizarConselho (){
    try {
        const conselhos = await fetch("https://api.adviceslip.com/advice");
        
        
        if (!conselhos.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }

        const conteudoDoConselho = await conselhos.json();
        const idDoConselho = `Advice #${conteudoDoConselho.slip.id}`;
        const textoDoConselho = `"${conteudoDoConselho.slip.advice}"`;

        idConselho.innerText = idDoConselho;
        descricaoConselho.innerText = textoDoConselho;

  } catch (error) {
    console.error("Erro ao tentar buscar as informações da API", error);
  }
  
}

botaoAtualizarConselho.addEventListener("click", atualizarConselho);

atualizarConselho();
        



