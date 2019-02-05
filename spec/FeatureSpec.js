describe('Feature test:', function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  })

  it('plane can be instructed to land at the airport',function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('plane to take off from an airport', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane)
  });


});
