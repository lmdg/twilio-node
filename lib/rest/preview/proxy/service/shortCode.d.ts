/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Proxy = require('../../Proxy');
import deserialize = require('../../../../base/deserialize');
import values = require('../../../../base/values');

/**
 * @constructor Twilio.Preview.Proxy.ServiceContext.ShortCodeList
 * @description Initialize the ShortCodeList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function ShortCodeList(version: Proxy, serviceSid: string): ShortCodeListInstance;


declare class ShortCodePage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.ShortCodePage
   * @augments Page
   * @description Initialize the ShortCodePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: object, solution: object);

  /**
   * Build an instance of ShortCodeInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ShortCodeInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.ShortCodeInstance
   * @description Initialize the ShortCodeContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this resource
   * @property accountSid - Account Sid.
   * @property serviceSid - Service Sid.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property shortCode - The short code. e.g., 894546.
   * @property countryCode - The ISO 3166-1 alpha-2 country code
   * @property capabilities - Indicate if a shortcode can receive messages
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - Fetch by unique shortcode Sid
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, serviceSid: sid, sid: sid);

  _proxy?: ShortCodeContext;
  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ShortCodeInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodeInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ShortCodeInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodeInstance
   * @instance
   */
  toJSON();
}


declare class ShortCodeContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext.ShortCodeContext
   * @description Initialize the ShortCodeContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - Fetch by unique shortcode Sid
   */
  constructor(version: Twilio.Preview.Proxy, serviceSid: sid, sid: sid);

  /**
   * fetch a ShortCodeInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ShortCodeInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext.ShortCodeContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { ShortCodeContext, ShortCodeInstance, ShortCodeList, ShortCodePage }