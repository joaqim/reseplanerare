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
    define(['ApiClient', 'model/LiveMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LiveMap'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.LivemapApi = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.LiveMap);
  }
}(this, function(ApiClient, LiveMap) {
  'use strict';

  /**
   * Livemap service.
   * @module api/LivemapApi
   * @version 1.10.1
   */

  /**
   * Constructs a new LivemapApi. 
   * @alias module:api/LivemapApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the livemap operation.
     * @callback module:api/LivemapApi~livemapCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LiveMap} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the positions of all vehicles in a given bounding box
     * This method will return the positions of all vehicles in a given bounding box.
     * @param {String} minx Left border (longitude) of the bounding box in WGS84 * 1000000
     * @param {String} maxx Right border (longitude) of the bounding box in WGS84 * 1000000
     * @param {String} miny Lower border (latitude) of the bounding box in WGS84 * 1000000
     * @param {String} maxy Upper border (latitude) of the bounding box in WGS84 * 1000000
     * @param {module:model/String} onlyRealtime Can be used to define whether all vehicles should be returned or only those  vehicles which have realtime information. If it is set to yes, only vehicles  with realtime information are returned, if it is set to no, all vehicles in the  bounding box are returned.
     * @param {module:api/LivemapApi~livemapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LiveMap}
     */
    this.livemap = function(minx, maxx, miny, maxy, onlyRealtime, callback) {
      var postBody = null;

      // verify the required parameter 'minx' is set
      if (minx === undefined || minx === null) {
        throw new Error("Missing the required parameter 'minx' when calling livemap");
      }

      // verify the required parameter 'maxx' is set
      if (maxx === undefined || maxx === null) {
        throw new Error("Missing the required parameter 'maxx' when calling livemap");
      }

      // verify the required parameter 'miny' is set
      if (miny === undefined || miny === null) {
        throw new Error("Missing the required parameter 'miny' when calling livemap");
      }

      // verify the required parameter 'maxy' is set
      if (maxy === undefined || maxy === null) {
        throw new Error("Missing the required parameter 'maxy' when calling livemap");
      }

      // verify the required parameter 'onlyRealtime' is set
      if (onlyRealtime === undefined || onlyRealtime === null) {
        throw new Error("Missing the required parameter 'onlyRealtime' when calling livemap");
      }


      var pathParams = {
      };
      var queryParams = {
        'minx': minx,
        'maxx': maxx,
        'miny': miny,
        'maxy': maxy,
        'onlyRealtime': onlyRealtime,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = LiveMap;

      return this.apiClient.callApi(
        '/livemap', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));