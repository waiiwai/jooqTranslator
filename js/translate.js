String.prototype.select = function(...columns){
    return this + ' select ' + columns.map(column => column.camel2Snake().addBackQuote());
}

String.prototype.insertInto = function(table, ...columns){
    return this + ' insert into ' + table + '(' + columns.map(column => column.camel2Snake().addBackQuote()) + ')';
}
String.prototype.values = function(...values){
    return this + ' values (' + values + ')';
}

String.prototype.update = function(table){
    return this + ' update ' + table.camel2Snake().addBackQuote();
}
String.prototype.set = function(col, val){
    if (this.indexOf('set') >= 0) return this + ' , ' + col + '=' + val;
    else return this + ' set ' + col + '=' + val;
}
String.prototype.deleteFrom = function(table){
    return this + ' delete from ' + table.camel2Snake().addBackQuote();
}
String.prototype.from = function(table){
    return this + ' from ' + table.camel2Snake().addBackQuote();
}
String.prototype.join = function(table){
    return this + ' join ' + table.camel2Snake().addBackQuote();
}
String.prototype.on = function(cond){
    return this + ' on ' + cond;
}

String.prototype.where = function(cond){
    return this + ' where ' + cond;
}
String.prototype.and = function(cond){
    return this + ' and ' + cond;
}
String.prototype.or = function(cond){
    return this + ' or ' + cond;
}
String.prototype.in = function(...values){
    return this + ' in ' + values;
}

String.prototype.replaceArgs = function() {
    return this.replaceAll("(", "('").replaceAll(")", "')").replaceAll(",", "','");
}

String.prototype.camel2Snake = function() {
    return this.replace(/([A-Z])/g, (p0) => {return '_' + p0.toLowerCase();});
}

String.prototype.snake2Camel = function() {
    return this.replace(/(_[a-z])/g, (p0) => {return p0.substring(1).toUpperCase();});
}

String.prototype.addBackQuote = function() {
    return '`' + this.replaceAll('.', '`.`') + '`';
}

function trans() {
    let i  = document.getElementById('inputData').value.replaceAll(' ', '').replaceArgs();
    let f = '"use strict";return ("".' + i + ')';
    let o = Function(f)();
    document.getElementById('outputData').value = o;
}
