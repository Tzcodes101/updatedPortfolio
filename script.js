$(document).ready(function () {

function hideLinks() {
    $('#my-links').css('display', 'none');
}

$(".icon").on("click", function toggleNav() {
    console.log("hi");
    if ($("#my-links").display === 'none') {
        $('#my-links').css('display', 'block');
    } else {
        $('#my-links').css('display', 'none')
    }
});

hideLinks();

});