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
    define(['ApiClient', 'model/JourneyDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JourneyDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.Reseplaneraren) {
      root.Reseplaneraren = {};
    }
    root.Reseplaneraren.JourneyDetailApi = factory(root.Reseplaneraren.ApiClient, root.Reseplaneraren.JourneyDetail);
  }
}(this, function(ApiClient, JourneyDetail) {
  'use strict';

  /**
   * JourneyDetail service.
   * @module api/JourneyDetailApi
   * @version 1.10.1
   */

  /**
   * Constructs a new JourneyDetailApi. 
   * @alias module:api/JourneyDetailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getJourneyDetail operation.
     * @callback module:api/JourneyDetailApi~getJourneyDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JourneyDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about the complete route of a trip.
     * Delivers information about the complete route of a trip. This service can not be called directly but only by reference URLs in a result of a trip or departureBoard request. It contains a list of all stops/stations of this journey including all departure and arrival times (with real-time data if available) and additional information like specific attributes about facilities and other texts.
     * @param {String} ref the ref query parameter, URL decoded, from a URL retrieved as a result of a trip or or departureBoard request
     * @param {module:api/JourneyDetailApi~getJourneyDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JourneyDetail}
     */
    this.getJourneyDetail = function(ref, callback) {
      var postBody = null;

      // verify the required parameter 'ref' is set
      if (ref === undefined || ref === null) {
        throw new Error("Missing the required parameter 'ref' when calling getJourneyDetail");
      }


      var pathParams = {
      };
      var queryParams = {
        'ref': ref,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/xml', 'application/json'];
      var returnType = JourneyDetail;

      return this.apiClient.callApi(
        '/journeyDetail', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
