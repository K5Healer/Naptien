// jquery ui datepicker
$('.datepicker-YMD').datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0"
});

$('.datepicker-DMY').datepicker( {
    dateFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true,
    yearRange: "-100:+0"
});