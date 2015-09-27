//----------------------------------------------------------------
// shopping cart
//

function userStorage(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.items = [];

    // load items from local storage when initializing
    this.loadItems();

    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
}

// load items from local storage

userStorage.prototype.loadItems = function () {
    var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
    if (items != null && JSON != null) {
        try {
            var items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.name != null && item.superpower != null && item.rich != null && item.genius != null && item.quantity != null) {
                    item = new cartItem(item.name, item.superpower, item.rich, item.genius, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
}

// save items to local storage
userStorage.prototype.saveItems = function () {
    if (localStorage != null && JSON != null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
}

// adds an item to the cart
userStorage.prototype.addItem = function (name, superpower, rich, genius, quantity) {
  quantity = this.toNumber(quantity);

        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.name == name) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                item.superpower = superpower;
                item.rich = rich;
                item.genius = genius;
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }

        // new item, add now
        if (!found) {
            var item = new cartItem(name, superpower, rich, genius, quantity);
            this.items.push(item);
        }

        // save changes
        this.saveItems();
}


// get the quantity of each type
userStorage.prototype.getFilterCount = function (name) {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    var item = this.items[i];
    if (name == 'superpower'  && item.superpower == true) {
      total += this.toNumber(item.quantity);
    }
    if (name == 'rich'  && item.rich == true) {
      total += this.toNumber(item.quantity);
    }
    if (name == 'genius'  && item.genius == true) {
      total += this.toNumber(item.quantity);
    }
  }
  return total;
}
// get the total quantity for all items currently in the cart
userStorage.prototype.getTotalCount = function (name) {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        if (name == null || item.name == name) {
            count += this.toNumber(item.quantity);
        }
    }
    return count;
}

// utility methods
userStorage.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
}


//----------------------------------------------------------------
// items in the storage
function cartItem(name, superpower, rich, genius, quantity) {
  this.name = name;
  this.superpower = superpower;
  this.rich = rich;
  this.genius = genius;
  this.quantity = quantity * 1;
}



