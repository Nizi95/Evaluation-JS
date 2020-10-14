'use strict';
/*
*gridGenerator
*@param {number} xAxis
*@param {number} yAxis
*/
var gridGenerator = function gridGenerator(xAxis, yAxis){
    this.xAxis = xAxis;
    this.yAxis = yAxis;
} 

gridGenerator.prototype.renderTable = function(){
    var body = document.querySelector('body');
    var table = document.createElement('table');
    for(var i = 1; i <= this.yAxis; i++){
        var tr = document.createElement('tr');
        for(var j = 1; j <= this.xAxis; j++){
            var td = document.createElement('td');
            var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            td.style.backgroundColor = randomColor;
            td.style.width = '70px';
            td.style.height = '50px';
            tr.appendChild(td);
        }table.appendChild(tr);
    }body.appendChild(table);
}

gridGenerator.prototype.run = function(){
    this.renderTable();
    setInterval(function(){
      this.randomColor()
      }.bind(this), 2000);
}

gridGenerator.prototype.randomColor = function(){
    var td_list = document.querySelectorAll('td');
    td_list.forEach(function(td_list){
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      td_list.style.backgroundColor = randomColor;
    });
}

var tab = new gridGenerator(12, 12);
tab.run();