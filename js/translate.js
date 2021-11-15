String.prototype.select = function(...columns){
    return this + 'select ' + columns;
}
String.prototype.insertInto = function(table){
    return this + 'insert into ' + table;
}
String.prototype.update = function(table){
    return this + 'update ' + table;
}
String.prototype.delete = function(table){
    return this + 'delete ' + table;
}
String.prototype.from = function(table){
    return this + ' from ' + table;
}

function trans() {
    let i  = document.getElementById('inputData').value;
    let f = '"use strict";return ("".' + i + ')';
    let o = Function(f)();
    document.getElementById('outputData').value = o;
}

