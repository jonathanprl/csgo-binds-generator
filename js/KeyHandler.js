// Generated by CoffeeScript 1.8.0
(function() {
  var ItemKey, KeyList;

  KeyList = [];

  KeyList.contains = function(ref) {
    var x;
    x = 0;
    while (x < KeyList.length) {
      if (KeyList[x].ref === ref) {
        return true;
      } else {
        x++;
      }
    }
    return false;
  };

  KeyList.list = function() {
    var y, _results;
    y = 0;
    _results = [];
    while (y < KeyList.length) {
      console.log(KeyList[y]);
      _results.push(y++);
    }
    return _results;
  };

  ItemKey = (function() {
    function ItemKey(ref, selected, primary, secondary, grenade, other) {
      this.ref = ref;
      this.selected = selected != null ? selected : false;
      this.primary = primary != null ? primary : "";
      this.secondary = secondary != null ? secondary : "";
      this.grenade = grenade != null ? grenade : [];
      this.other = other != null ? other : [];
      if (!KeyList.contains(ref)) {
        KeyList.push(this);
      }
    }

    ItemKey.prototype.getValue = function() {
      if (this.ref.firstElementChild) {
        return this.ref.firstElementChild.innerHTML;
      } else {
        return this.ref.innerHTML;
      }
    };

    ItemKey.prototype.getString = function() {
      var g, grenadeS, o, otherS, _i, _j, _len, _len1, _ref, _ref1;
      grenadeS = "";
      otherS = "";
      if (this.grenade.length > 0) {
        _ref = this.grenade;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          g = _ref[_i];
          grenadeS += " " + g.value;
        }
      }
      if (this.other.length > 0) {
        _ref1 = this.other;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          o = _ref1[_j];
          otherS += " " + o.value;
        }
      }
      return "bind " + "\"" + this.getValue() + "\" \"" + this.primary + this.secondary + grenadeS + otherS + "\"&#10;";
    };

    ItemKey.prototype.containsArr = function(arr, ref) {
      var x;
      x = 0;
      while (x < arr.length) {
        if (arr[x].id === ref.id) {
          return true;
        } else {
          x++;
        }
      }
      return false;
    };

    ItemKey.prototype.addInArray = function(arr, ref) {
      var y, _results;
      if (!this.containsArr(arr, ref)) {
        return arr.push(ref);
      } else {
        y = arr.length;
        _results = [];
        while (y--) {
          if (arr[y] === ref) {
            _results.push(arr.splice(y, 1));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };

    ItemKey.prototype.focus = function() {
      var x;
      console.log("focus");
      x = 0;
      while (x < KeyList.length) {
        console.log(KeyList[x]);
        KeyList[x].ref.classList.remove("focus");
        x++;
      }
      return this.ref.classList.add("focus");
    };

    return ItemKey;

  })();

  window.ItemKey = ItemKey;

  window.KeyList = KeyList;

}).call(this);