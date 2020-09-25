$(function () {
    //isotope (recruit page)
    var $grid = $('.recruit_boxes').isotope({
        // options
        itemSelector: '.box',
        layoutMode: 'fitRows',
        transitionDuration: '0.6s'

    });

    $('.filters button').on('click', function () {

        var filterValue = $(this).attr('data-filter');
        console.log(filterValue)
        $grid.isotope({
            filter: filterValue
        });
    });
})