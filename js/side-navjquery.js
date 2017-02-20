$(document).ready(function () {
            $('.dLabel').on('click', function (e) {
                e.preventDefault();
                var btn = $(this);
                var nav = btn.closest('.dropdown');
                nav.find('.dropdown-menu').slideToggle();
            });
        }