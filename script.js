$(document).ready(function () {

function hideLinks() {
   if ($('#my-links').css('display', 'block')) {
    ($("#my-links").display === 'none');
   };
}

$(".icon").on("click", function toggleNav() {
    console.log("hi");
        $('#my-links').css('display', 'block');
});

hideLinks();

});