(function() {
    function TilesetTile(options) {
        this.image = options.image;
        this.symbol = options.symbol;
    }

    function selectTile(element) {
        var selectedTile = document.getElementsByClassName('selected')[0];
        if (selectedTile !== undefined) {
            selectedTile.classList = 'tileset-tile';
        }
        element.classList += ' selected';
        window.selectedTile = new TilesetTile({image: element.src});
    }

    window.selectTile = selectTile;
})();
