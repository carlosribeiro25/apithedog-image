 async function buscarCachorro() {
      try {
        const resposta = await fetch('https://api.thedogapi.com/v1/images/search');
        const dados = await resposta.json();
        const urlImagem = dados[0].url;

        const container = document.getElementById('imagem-container');
        container.innerHTML = `<img src="${urlImagem}" alt="Cachorro fofinho" width="300">`;

      } catch (erro) {
        console.error('Erro ao buscar a imagem:', erro);
      }
    }

    // Buscar uma imagem automaticamente ao carregar a página
    buscarCachorro();