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
    root.Reseplaneraren.Direction = factory(root.Reseplaneraren.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Direction model module.
   * @module model/Direction
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Direction</code>.
   * @alias module:model/Direction
   * @class
   * @param routeIdxTo {Number} End of validity on total route
   * @param value {String} 
   * @param routeIdxFrom {Number} Start of validity on total route
   */
  var exports = function(routeIdxTo, value, routeIdxFrom) {
    var _this = this;

    _this['routeIdxTo'] = routeIdxTo;
    _this['$'] = value;
    _this['routeIdxFrom'] = routeIdxFrom;
  };

  /**
   * Constructs a <code>Direction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Direction} obj Optional instance to populate.
   * @return {module:model/Direction} The populated <code>Direction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routeIdxTo')) {
        obj['routeIdxTo'] = ApiClient.convertToType(data['routeIdxTo'], 'Number');
      }
      if (data.hasOwnProperty('$')) {
        obj['$'] = ApiClient.convertToType(data['$'], 'String');
      }
      if (data.hasOwnProperty('routeIdxFrom')) {
        obj['routeIdxFrom'] = ApiClient.convertToType(data['routeIdxFrom'], 'Number');
      }
    }
    return obj;
  }

  /**
   * End of validity on total route
   * @member {Number} routeIdxTo
   */
  exports.prototype['routeIdxTo'] = undefined;
  /**
   * @member {String} $
   */
  exports.prototype['$'] = undefined;
  /**
   * Start of validity on total route
   * @member {Number} routeIdxFrom
   */
  exports.prototype['routeIdxFrom'] = undefined;



  return exports;
}));


