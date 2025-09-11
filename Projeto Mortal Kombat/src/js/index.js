const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;

  
    imagemPersonagemGrande.classList.add('fade-animation');

    
    setTimeout(() => {
      imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.webp`;

      
      setTimeout(() => {
        imagemPersonagemGrande.classList.remove('fade-animation');
      }, 100);
    }, 300);

    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
  });

  
});
