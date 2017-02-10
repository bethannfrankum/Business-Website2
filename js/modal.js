$('#open').on('click', showDialog);

function showDialog() {
    $('.overlay2').fadeIn();
    $('.modal').slideDown();
    $('#btnClose').on('click', hideDialog);
    $('.overlay2').on('click', hideDialog);
}

function hideDialog() {
    $('.overlay2').fadeOut();
    $('.modal').slideUp();
    $('#btnClose').off('click', hideDialog);
    $('.overlay2').off('click', hideDialog);
}