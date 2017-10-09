var data = "";

setInterval(function() {
    var a = Math.floor(Math.random() * 101);
    console.log(a);
    if (a == 0) {
        data = "あ<br>" + data;
    }
    $("#timeline").html(data);
    $("#timeline").show();
    if ( data.indexOf('雲<br>鯖<br>完<br>全<br>制<br>覇<br>') != -1) {
alert("おめでとう");
data = "";
}
}, 100);

function toot1() {
    var val = $('#toot [name=toot]').val();
    console.log(val);
    data = val + "<br>" + data;
    $("#timeline").html(data);
    $("#timeline").show();
    $('#toot [name=toot]').val("");
}