/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Studio = require('../../../Studio');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');

/**
 * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext.StepList
 * @description Initialize the StepList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param flowSid - Flow Sid.
 * @param engagementSid - Engagement Sid.
 */
declare function StepList(version: Studio, flowSid: string, engagementSid: string): StepListInstance;


declare class StepPage extends Page {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext.StepPage
   * @augments Page
   * @description Initialize the StepPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Studio, response: object, solution: object);

  /**
   * Build an instance of StepInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext.StepPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class StepInstance {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext.StepInstance
   * @description Initialize the StepContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Step.
   * @property accountSid - Account Sid.
   * @property flowSid - Flow Sid.
   * @property engagementSid - Engagement Sid.
   * @property name - The Widget that implemented this Step.
   * @property context - Nested resource URLs.
   * @property transitionedFrom - The Widget that preceded the Widget for this Step.
   * @property transitionedTo - The Widget that will follow the Widget for this Step.
   * @property dateCreated - The date this Step was created
   * @property dateUpdated - The date this Step was updated
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - Flow Sid.
   * @param engagementSid - Engagement Sid.
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, payload: object, flowSid: sid, engagementSid: sid, sid: sid);

  _proxy?: StepContext;
  /**
   * fetch a StepInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext.StepInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the StepInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext.StepInstance
   * @instance
   */
  toJSON();
}


declare class StepContext {
  /**
   * @constructor Twilio.Preview.Studio.FlowContext.EngagementContext.StepContext
   * @description Initialize the StepContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Studio, flowSid: sid, engagementSid: sid, sid: sid);

  /**
   * fetch a StepInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Studio.FlowContext.EngagementContext.StepContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { StepContext, StepInstance, StepList, StepPage }