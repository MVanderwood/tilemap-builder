// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .


var tilemap = {};

function refreshTilemap() {
    tilemap.width = parseInt(document.getElementById('tilemapWidth').value);
    tilemap.height = parseInt(document.getElementById('tilemapHeight').value);
    tilemap.insert = document.getElementById('insert-tilemap');

    var tableRow = '<tr>';
    for (var x = 0; x < tilemap.width; x++) { tableRow += '<td class="tile"></td>'; }
    tableRow += '</tr>';

    var table = '<table>';
    for (var y = 0; y < tilemap.height; y++) { table += tableRow; }
    table += '</table>';

    tilemap.insert.innerHTML = table;
}

window.onload = function() { refreshTilemap(); };
