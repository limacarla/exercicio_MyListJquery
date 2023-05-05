$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const nomeTarefa = $('#tarefa').val();
        const novaLista = $('<li></li>');
        $(`${nomeTarefa}`).appendTo(novaLista);
        
        const prioridades = $('#priority').val();
        $(`${prioridades}`).appendTo(nomeTarefa);
        

        $(`
            <div class="container">
                ${nomeTarefa}
                ${prioridades}
            </div>`).appendTo(novaLista);

        $(novaLista).appendTo('ul');
            $('li').click(function() {

                $(this).addClass('listas')
        
        })
        $('#tarefa').val('')
        $('#priority').val('')
    })
})