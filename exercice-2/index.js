'use strict';

/**
 * Progress Bar
 * @constructor
 * @param {number} sum - full-length bar.
 * @param {number} nbr - loaded part bar.
 */

var drawBar = function drawBar(sum, nbr){
    this.sum = sum;
    this.nbr = nbr;
}

drawBar.prototype.run = function(){
    this.display();
}

progressBar.prototype.display = function(){
    var progress = document.createElement('div');
    var bar = document.createElement('div');
    progress.style.width = this.sum + '%';
    progress.style.backgroundColor = 'lightgrey';
    progress.style.height = '80px';
    bar.style.width  = this.nbr + '%';
    bar.style.backgroundColor = 'red';
    bar.style.height = '80px';
    progress.appendChild(bar);
    document.body.appendChild(progress);

}

var loadingBar = new drawBar(100, 45);
loadingBar.run(); 