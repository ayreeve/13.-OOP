// jslint devel: true
function Phone(brand, price, color, origin) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.origin = origin;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', price is ' + this.price + ' and the origin is ' + this.origin + '.');
}

Phone.prototype.lowerPrice = function () {
    if (iPhone6S.price < SamsungGalaxyS6.price) {
        console.log('The cheapest phone is iPhone6S')
    } else if (iPhone6S.price > SamsungGalaxyS6.price) {
        console.log('The cheapest phone is Samsung Galaxy S6')
    } else {
        console.log('The same prices')
    }
}

var iPhone6S = new Phone('Apple', 2250, 'silver', 'US');
var SamsungGalaxyS6 = new Phone('Samsung', 2050, 'white', 'ROK');

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
iPhone6S.lowerPrice();
