'use strict';
describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  // var plane;
  // beforeEach(function() {
  //   airport = Airport();
  // });
  // it("instance_of", function() {
  //   expect({}).toEqual(jasmine.any(Object));
  //   expect(12).toEqual(jasmine.any(Number));
  // });
  // it
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane)
    airport.clearForTakeOff()
    expect(airport.planes()).toEqual([]);
  });
  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
  describe('under stormy conditions',function(){
    it('does not clear planes for takeoff', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
    it('does not clear planes for landing', function(){
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });



});
