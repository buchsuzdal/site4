$(document).ready(function () { // Ждём загрузки страницы


    // Анимированное меню

    $("#a1")
        .mouseover(function () {
            $('.menu-under-1').css('display', 'block')
            $('.menu-under-2').css('display', 'none');
            $('.menu-under-3').css('display', 'none');
        })

    $("#a4")
        .mouseover(function () {
            $('.menu-under-1').css('display', 'none');
            $('.menu-under-2').css('display', 'block');
            $('.menu-under-3').css('display', 'none');
        })

    $("#a7")
        .mouseover(function () {
            $('.menu-under-1').css('display', 'none');
            $('.menu-under-2').css('display', 'none');
            $('.menu-under-3').css('display', 'block');
        })

    $(".nav-menu")
        .mouseleave(function () {
            setTimeout(function () {
                $('.menu-under-1').css('display', 'none');
                $('.menu-under-2').css('display', 'none');
                $('.menu-under-3').css('display', 'none');
            }, 100);
        })


    // Плавный скролл по якорям

    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var scс = $(this).attr("href"),
            dn = $(scс).offset().top;

        /*
        * scc – содержит id блока для перехода
        * dn - содержит положение блока на странице
        */

        $('html, body').animate({ scrollTop: dn }, 1000);


        switch (scс) {
            case '#history-article':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#history-article').addClass('se');
                break;
            case '#history-link':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#history-section').addClass('se');
                break;
            case '#snapshots':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#snapshot-section').addClass('se');
                break;
            case '#mobs':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#mobs-article').addClass('se');
                break;
            case '#mob-not-friendly':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#mobs-section').addClass('se');
                break;
            case '#mob-friendly':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#mob-friendly-section').addClass('se');
                break;
            case '#enchant-table-article':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#enchant-table-article').addClass('se');
                break;
            case '#enchant-table-link':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#enchant-table-section').addClass('se');
                break;
            case '#enchant-rules':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#enchant-rules-section').addClass('se');
                break;
            case '#form':
                $('section').removeClass('se');
                $('article').removeClass('se');
                $('#form-section').addClass('se');
                break;
            default:
                $('article').removeClass('se');
                $('#form-section').addClass('se');
                break;
        }
    });


    //Выделение столбца таблицы

    $('.table-title').on('click', function () {
        if (!$(this).hasClass('selected')) { // если класса нет
            $(this).addClass('selected'); // добавляем класс

            var $currentTable = $(this).closest('table');
            var index = $(this).index();
            $currentTable.find('td').removeClass('selected');
            $currentTable.find('tr').each(function () {
                $(this).find('td').eq(index).addClass('selected');
            });

        } else { // если есть
            $('td').removeClass('selected'); // убираем класс
        }
    });


    //Увеличение текста при клике на aside

    $('aside').on('click', function () {
        if (!$(this).hasClass('side-scale-plus')) { // если класса нет
            $(this).addClass('side-scale-plus'); // добавляем класс
        } else { // если есть
            $(this).removeClass('side-scale-plus'); // убираем класс
        }
    });


    //Нажатие на кнопку reset в форме

    $('.form-reset').on('click', function () {
        var $conf = confirm("Вы уверены, что хотите очистить форму?");
        if ($conf) {
            $('.input-form').addClass('red');
            $('#textarea-input').addClass('red');
            setTimeout(function () {
                $('.input-form').removeClass('red');
                $('#textarea-input').removeClass('red');
            }, 1000);
        }
        else {
            event.preventDefault();
            $('.input-form').addClass('green');
            $('#textarea-input').addClass('green');
            setTimeout(function () {
                $('.input-form').removeClass('green');
                $('#textarea-input').removeClass('green');
            }, 1000);
        }

    });


    //Нажатие на кнопку submit в форме

    $('.form-submit').on('click', function () {
        event.preventDefault();
        $('.input-form').addClass('blue');
        $('#textarea-input').addClass('blue');
        setTimeout(function () {
            $('.input-form').removeClass('blue');
            $('#textarea-input').removeClass('blue');
            alert("Данные успешно отправлены");
        }, 1000);
    });
});


