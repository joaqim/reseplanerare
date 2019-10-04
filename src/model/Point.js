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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.Point = factory(root.Reseplaneraren.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Point model module.
   * @module model/Point
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Point</code>.
   * @alias module:model/Point
   * @class
   * @param lon {String} 
   * @param lat {String} 
   */
  var exports = function(lon, lat) {
    var _this = this;

    _this['lon'] = lon;
    _this['lat'] = lat;
  };

  /**
   * Constructs a <code>Point</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Point} obj Optional instance to populate.
   * @return {module:model/Point} The populated <code>Point</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lon')) {
        obj['lon'] = ApiClient.convertToType(data['lon'], 'String');
      }
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} lon
   */
  exports.prototype['lon'] = undefined;
  /**
   * @member {String} lat
   */
  exports.prototype['lat'] = undefined;



  return exports;
}));


