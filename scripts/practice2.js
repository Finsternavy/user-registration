let c = 0;
let count = $("#counter");

function increaseCounter(){
    c++;
    count.text(c);
}

function init(){
    // settings
    $("#div-info2").hide();

    $("#btn-counter").on('click', increaseCounter);

    $("#link-info1").on('mouseover', function(){
        $("#div-info1").show();
        $("#div-info2").hide();
    });

    $("#link-info2").on('mouseover', function(){
        $("#div-info2").show();
        $("#div-info1").hide();
        $(this).css('color', 'red'); // change the color when hover (cannot change back this way)
    });

    $("#link-info2").on('click', showInfo2);

    $("#btn-counter").on('mouseover', function(){
        console.log("The user attempts a click");
    })
}

window.onload=init;