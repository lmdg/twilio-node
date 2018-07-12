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
import { StreamMessageList } from './syncStream/streamMessage';

/**
 * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamList
 * @description Initialize the SyncStreamList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Instance SID.
 */
declare function SyncStreamList(version: V1, serviceSid: string): SyncStreamListInstance;

/**
 * Options to pass to update
 *
 * @property ttl - Stream TTL.
 */
export interface UpdateOptions {
  ttl?: number;
}

/**
 * Options to pass to update
 *
 * @property ttl - Stream TTL.
 */
export interface UpdateOptions {
  ttl?: number;
}


declare class SyncStreamPage extends Page {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamPage
   * @augments Page
   * @description Initialize the SyncStreamPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Sync.V1, response: object, solution: object);

  /**
   * Build an instance of SyncStreamInstance
   *
   * @function getInstance
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SyncStreamInstance {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @description Initialize the SyncStreamContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Stream SID.
   * @property uniqueName - Stream unique name.
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Service Instance SID.
   * @property url - URL of this Stream.
   * @property links - Nested resource URLs.
   * @property dateExpires - The date this Stream expires.
   * @property dateCreated - The date this Stream was created.
   * @property dateUpdated - The date this Stream was updated.
   * @property createdBy - Identity of the Stream creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Instance SID.
   * @param sid - Stream SID or unique name.
   */
  constructor(version: Twilio.Sync.V1, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: SyncStreamContext;
  /**
   * fetch a SyncStreamInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncStreamInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the streamMessages
   *
   * @function streamMessages
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @instance
   */
  streamMessages();
  /**
   * Produce a plain JSON object version of the SyncStreamInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @instance
   */
  toJSON();
  /**
   * update a SyncStreamInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class SyncStreamContext {
  /**
   * @constructor Twilio.Sync.V1.ServiceContext.SyncStreamContext
   * @description Initialize the SyncStreamContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property streamMessages - streamMessages resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Instance SID or unique name.
   * @param sid - Stream SID or unique name.
   */
  constructor(version: Twilio.Sync.V1, serviceSid: sid_like, sid: sid_like);

  /**
   * fetch a SyncStreamInstance
   *
   * @function fetch
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a SyncStreamInstance
   *
   * @function remove
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  streamMessages?: Twilio.Sync.V1.ServiceContext.SyncStreamContext.StreamMessageList;
  /**
   * update a SyncStreamInstance
   *
   * @function update
   * @memberof Twilio.Sync.V1.ServiceContext.SyncStreamContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { SyncStreamContext, SyncStreamInstance, SyncStreamList, SyncStreamPage }