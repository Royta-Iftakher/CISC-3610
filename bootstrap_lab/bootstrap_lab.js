$(document).ready(function(){
    $('#toggleButton').click(function(){
        $(this).toggleClass('btn-primary btn-success');
        $('#additionalButton').toggle();

        if ($(this).hasClass('btn-success')) {
            $(this).text('Toggled On');
        } else {
            $(this).text('Toggle Off');
        }
    });
});