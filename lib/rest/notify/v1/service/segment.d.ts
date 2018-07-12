/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Notify.V1.ServiceContext.SegmentList
 * @description Initialize the SegmentList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 */
declare function SegmentList(version: V1, serviceSid: string): SegmentListInstance;


declare class SegmentPage extends Page {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.SegmentPage
   * @augments Page
   * @description Initialize the SegmentPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Notify.V1, response: object, solution: object);

  /**
   * Build an instance of SegmentInstance
   *
   * @function getInstance
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SegmentInstance {
  /**
   * @constructor Twilio.Notify.V1.ServiceContext.SegmentInstance
   * @description Initialize the SegmentContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property uniqueName - The unique_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   */
  constructor(version: Twilio.Notify.V1, payload: object, serviceSid: sid);

  /**
   * Produce a plain JSON object version of the SegmentInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Notify.V1.ServiceContext.SegmentInstance
   * @instance
   */
  toJSON();
}

export { SegmentInstance, SegmentList, SegmentPage }