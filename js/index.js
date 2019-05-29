let flag = 0;

function setVisibility() {
    if (flag == 0) {
        $('.view-more').show();
        $('#view-projects').text('VIEW LESS');
        flag = 1;
    } else {
        $('.view-more').hide();
        $('#view-projects').text('VIEW MORE');
        flag = 0;
    }
}