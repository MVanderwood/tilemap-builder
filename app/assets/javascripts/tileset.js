(function() {
    function selectTile(element) {
        var selectedTile = document.getElementsByClassName('selected')[0];
        if (selectedTile !== undefined) {
            selectedTile.classList = 'tileset-tile';
        }
        element.classList += ' selected';
    }
    window.selectTile = selectTile;
})();
