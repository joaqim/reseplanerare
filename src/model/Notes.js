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
    define(['ApiClient', 'model/Note'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Note'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.Notes = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.Note);
  }
}(this, function(ApiClient, Note) {
  'use strict';




  /**
   * The Notes model module.
   * @module model/Notes
   * @version 1.10.1
   */

  /**
   * Constructs a new <code>Notes</code>.
   * @alias module:model/Notes
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Notes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notes} obj Optional instance to populate.
   * @return {module:model/Notes} The populated <code>Notes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Note')) {
        obj['Note'] = ApiClient.convertToType(data['Note'], [Note]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Note>} Note
   */
  exports.prototype['Note'] = undefined;



  return exports;
}));


