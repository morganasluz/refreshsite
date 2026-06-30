//Modal de humor:
const btnIniciar = document.getElementById('btn-iniciar');
const btnFechar = document.getElementById('btn-fechar');
const modal = document.getElementById('modal-humor');
const botoesHumor = document.querySelectorAll('.btn-humor');

    // Abre o modal de forma nativa e acessível
btnIniciar.addEventListener('click', () => {
        modal.showModal();
    });

    // Fecha o modal ao clicar no botão "Fechar"
btnFechar.addEventListener('click', () => {
        modal.close();
    });

    // Captura o clique em cada uma das opções de humor
botoesHumor.forEach(botao => {
        botao.addEventListener('click', () => {
            const humorSelecionado = botao.getAttribute('data-humor');
            
            // Aqui você decide o que fazer com a resposta
            
            modal.close(); // Fecha após a escolha
        });
    });








// Feliz
botoesHumor.forEach(botao => {
    botao.addEventListener('click', () => {
        const humorSelecionado = botao.getAttribute('data-humor');
        modal.close(); 
        
        if (humorSelecionado === 'bem') {
            // MÁGICA DO REDIRECIONAMENTO: Abre a nova página criada
            window.location.href = 'bem.html';
        } else if (humorSelecionado === 'medio') {
            window.location.href = 'medio.html';
           }
        else if (humorSelecionado === 'mal') {
            window.location.href = 'mal.html';
        }
    });
});
