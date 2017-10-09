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
var msg = "おめでとう\nみんなに報告しますか？";
if( window.confirm( msg ) ) {
    var D = 550,
        A = 450,
        C = screen.height,
        B = screen.width,
        H = Math.round((B / 2) - (D / 2)),
        G = 0,
        F = document,
        E;
    if (C > A) {
        G = Math.round((C / 2) - (A / 2))
    }
    window.twttr.shareWin = window.open('https://mastodon.cloud/share?text=雲鯖完全制覇しました。 https://cicada-sss.github.io/cloud_seiha/', 'left=' + H + ',top=' + G + ',width=' + D + ',height=' + A + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
// 「いいえ」を選択した場合
} else {
}
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