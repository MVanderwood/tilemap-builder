(function() {
    var tilemap = {};

    function refreshTilemap() {
        tilemap.width = parseInt(document.getElementById('tilemapWidth').value);
        tilemap.height = parseInt(document.getElementById('tilemapHeight').value);
        tilemap.insert = document.getElementById('insert-tilemap');

        var tableRow = '<tr>';
        for (var x = 0; x < tilemap.width; x++) { tableRow += '<td class="tilemap-tile" onmouseover="window.paintTile(this)"></td>'; }
        tableRow += '</tr>';

        var table = '<table>';
        for (var y = 0; y < tilemap.height; y++) { table += tableRow; }
        table += '</table>';

        tilemap.insert.innerHTML = table;
    }

    function paintTile(element) {
        if (window.mouseDown && window.selectedTile) {
            element.innerHTML = '<img src="' + window.selectedTile.image + '" class="tilemap-tile"/>';
        }
    }

    window.paintTile = paintTile;
    window.refreshTilemap = refreshTilemap;
    window.onload = function() { refreshTilemap(); };
})();
