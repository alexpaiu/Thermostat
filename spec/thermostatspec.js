'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('starts at 20 degrees', function() {
        expect(thermostat.temperature).toEqual(20);
      });
    it('see current temperature', function(){
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
    it('increase temperature ',function (){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it('decrease temperature ',function (){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('has a minimum of 10 degrees', function(){
      for (var i = 0; i <10; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
    it('has power saving mode on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it('can switch psm off', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
    it('can switch psm back on', function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
    it ('can switch thermostat to default temperature', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

});


describe('when PSM is on', function (){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
    it('has a maximum temp of 25C', function(){
      for ( var i = 0; i<6 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
  });
describe('when power saving mode is off', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('has a maximum temperature of 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
});

describe('displaying energy usage level', function(){
  var thermostat;
  var temperature;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('when the temperature is below 18 degrees', function() {
    it('it is considered low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
  });

  describe('when the temperature is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temperature is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
