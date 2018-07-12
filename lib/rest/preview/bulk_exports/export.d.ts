/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import BulkExports = require('../BulkExports');
import Page = require('../../../base/Page');
import values = require('../../../base/values');
import { DayList } from './export/day';

/**
 * @constructor Twilio.Preview.BulkExports.ExportList
 * @description Initialize the ExportList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ExportList(version: BulkExports): ExportListInstance;


declare class ExportPage extends Page {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportPage
   * @augments Page
   * @description Initialize the ExportPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.BulkExports, response: object, solution: object);

  /**
   * Build an instance of ExportInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.BulkExports.ExportPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ExportInstance {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportInstance
   * @description Initialize the ExportContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property resourceType - The resource_type
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param resourceType - The resource_type
   */
  constructor(version: Twilio.Preview.BulkExports, payload: object, resourceType: string);

  _proxy?: ExportContext;
  /**
   * Access the days
   *
   * @function days
   * @memberof Twilio.Preview.BulkExports.ExportInstance
   * @instance
   */
  days();
  /**
   * fetch a ExportInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.BulkExports.ExportInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the ExportInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.BulkExports.ExportInstance
   * @instance
   */
  toJSON();
}


declare class ExportContext {
  /**
   * @constructor Twilio.Preview.BulkExports.ExportContext
   * @description Initialize the ExportContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property days - days resource
   *
   * @param version - Version of the resource
   * @param resourceType - The resource_type
   */
  constructor(version: Twilio.Preview.BulkExports, resourceType: string);

  days?: Twilio.Preview.BulkExports.ExportContext.DayList;
  /**
   * fetch a ExportInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.BulkExports.ExportContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { ExportContext, ExportInstance, ExportList, ExportPage }