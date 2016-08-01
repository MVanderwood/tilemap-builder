(function() {
    function Tileset() {
        this.tiles = [];
    }

    Tileset.prototype.findTileById = function (id) {
        for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].id === id) {
                return this.tiles[i];
            }
        }
    };

    function TilesetTile(options) {
        this.id = options.id;
        this.element = options.element;
        this.image = options.image;
        this.key = options.key;
        this.description = options.description;
        this.passable = options.passable || false;
        this.oneWay = options.oneWay || false;
        this.damaging = options.damaging || false;
    }

    TilesetTile.prototype.update = function(options) {
        this.key = options.key;
        this.description = options.description;
        this.passable = options.passable;
        this.oneWay = options.oneWay;
        this.damaging = options.damaging;
    };

    function setFormBindings() {
        var tileElements = document.getElementsByClassName('tileset-tile');
        var tileset = new Tileset;
        for (var i = 0; i < tileElements.length; i++) {
            tileElements[i].id = 'tilesetTile' + i.toString();
            tileset.tiles.push(new TilesetTile({
                id: tileElements[i].id,
                element: tileElements[i],
                image: tileElements[i].src
            }));
        }
        window.tileset = tileset;

        document.getElementById('tile-options').addEventListener('change', function() {
            window.selectedTile.update({
                key: this[0].value,
                description: this[1].value,
                passable: this[2].checked,
                oneWay: this[3].checked,
                damaging: this[4].checked
            });
        });
    }

    function pickTile(element) {
        var selectedTile = document.getElementsByClassName('selected')[0];
        if (selectedTile !== undefined) {
            selectedTile.classList = 'tileset-tile';
        }
        element.classList += ' selected';
        window.selectedTile = window.tileset.findTileById(element.id);
        formUpdate(window.selectedTile);
    }

    function formUpdate(tile) {
        var form = document.getElementById('tile-options');
        if (tile.key !== undefined) { form[0].value = tile.key; }
        else { form[0].value = ''; }
        if (tile.description !== undefined) { form[1].value = tile.description; }
        else { form[1].value = ''; }
        if (tile.passable) { form[2].checked = true; }
        else { form[2].checked = false; }
        if (tile.oneWay) { form[3].checked = true; }
        else { form[3].checked = false; }
        if (tile.damaging) { form[4].checked = true; }
        else { form[4].checked = false; }
    }

    window.setFormBindings = setFormBindings;
    window.pickTile = pickTile;
})();
