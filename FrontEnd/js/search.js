/*
//Search Function
var $rows = $('#libraryTable tr');
$('#searchAll').keyup(function() {

    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});*/

function runSearchFilter(searchParam){
    var element = document.getElementById('tr0');
    var i = 1;
    while(element!=null)
    {
        if (element.innerText.indexOf(searchParam) == -1)
        {
            element.style.display = 'none';
        }
        else
        {
            element.style.display = 'block';
        }
        var name = 'tr'+i.toString();
        element = document.getElementById(name);
        i++;
    }
}