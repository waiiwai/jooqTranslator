String.prototype.select = function(...columns){
    return this + ' select ' + columns;
}

String.prototype.insertInto = function(table, ...columns){
    return this + ' insert into ' + table + '(' + columns + ')';
}
String.prototype.values = function(...values){
    return this + ' values (' + values + ')';
}

String.prototype.update = function(table){
    return this + ' update ' + table;
}
String.prototype.set = function(col, val){
    if (this.indexOf('set') >= 0) return this + ' , ' + col + '=' + val;
    else return this + ' set ' + col + '=' + val;
}
String.prototype.deleteFrom = function(table){
    return this + ' delete from ' + table;
}
String.prototype.from = function(table){
    return this + ' from ' + table;
}
String.prototype.join = function(table){
    return this + ' join ' + table;
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

String.prototype.replaceNames =function() {
    return this;
}

function trans() {
    let i  = document.getElementById('inputData').value.replaceAll(' ', '').replaceNames();
    let f = '"use strict";return ("".' + i + ')';
    let o = Function(f)();
    document.getElementById('outputData').value = o;
}

