(function() {
    window.mouseDown = false;

    function setTilemapMouseEvents() {
        var tilemap = document.getElementById('tilemap');

        tilemap.addEventListener('mousedown', function(e) {
            window.mouseDown = true;
            e.preventDefault();
        });

        tilemap.addEventListener('mousemove', function(e) {
            e.preventDefault();
        });

        window.addEventListener('mouseup', function() {
            window.mouseDown = false;
        });
    }
    window.setTilemapMouseEvents = setTilemapMouseEvents;
})();
