document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de contato
    const formContato = document.querySelector('.form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Captura os valores dos campos
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação simples
            if (nome && email && mensagem) {
                alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
                formContato.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
});
