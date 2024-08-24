document.addEventListener('DOMContentLoaded', function() {
    var stars = 800;
    var $stars = document.querySelector('.stars');
    var r = 800;
    
    for (var i = 0; i < stars; i++) {
        var $star = document.createElement('div');
        $star.classList.add('star');
        $stars.appendChild($star);
    }
    
    document.querySelectorAll('.star').forEach(function(cur) {
        var s = 0.2 + (Math.random() * 1);
        var curR = r + (Math.random() * 300);
        cur.style.transformOrigin = "0 0 " + curR + "px";
        cur.style.transform = "translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")";
    });
});
