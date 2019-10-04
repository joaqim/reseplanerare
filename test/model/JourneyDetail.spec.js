/**
 * Reseplaneraren
 * Provides access to Västtrafik journey planner
 *
 * OpenAPI spec version: 1.10.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Reseplaneraren);
  }
}(this, function(expect, Reseplaneraren) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Reseplaneraren.JourneyDetail();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JourneyDetail', function() {
    it('should create an instance of JourneyDetail', function() {
      // uncomment below and update the code to test JourneyDetail
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be.a(Reseplaneraren.JourneyDetail);
    });

    it('should have the property journeyType (base name: "JourneyType")', function() {
      // uncomment below and update the code to test the property journeyType
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property errorText (base name: "errorText")', function() {
      // uncomment below and update the code to test the property errorText
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property serverdate (base name: "serverdate")', function() {
      // uncomment below and update the code to test the property serverdate
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property servertime (base name: "servertime")', function() {
      // uncomment below and update the code to test the property servertime
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property journeyId (base name: "JourneyId")', function() {
      // uncomment below and update the code to test the property journeyId
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "Direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property stop (base name: "Stop")', function() {
      // uncomment below and update the code to test the property stop
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property journeyName (base name: "JourneyName")', function() {
      // uncomment below and update the code to test the property journeyName
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property geometryRef (base name: "GeometryRef")', function() {
      // uncomment below and update the code to test the property geometryRef
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "Color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

    it('should have the property noNamespaceSchemaLocation (base name: "noNamespaceSchemaLocation")', function() {
      // uncomment below and update the code to test the property noNamespaceSchemaLocation
      //var instance = new Reseplaneraren.JourneyDetail();
      //expect(instance).to.be();
    });

  });

}));