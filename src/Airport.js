function Airport(){
  this._hangar = [];
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane){
  if (this.isStormy()) {
    throw new Error('cannot land during the storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(){
  if (this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar.pop();
};

Airport.prototype.isStormy = function(){
  return false;
};
