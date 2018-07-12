/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import deserialize = require('../../../../base/deserialize');
import serialize = require('../../../../base/serialize');
import values = require('../../../../base/values');
import { AddOnResultList } from './recording/addOnResult';
import { TranscriptionList } from './recording/transcription';

/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingList
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function RecordingList(version: V2010, accountSid: string): RecordingListInstance;


declare class RecordingPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingPage
   * @augments Page
   * @description Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of RecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.RecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RecordingInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingInstance
   * @description Initialize the RecordingContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the API in use during the recording.
   * @property callSid - The unique id for the call leg that corresponds to the recording.
   * @property conferenceSid - The unique id for the conference associated with the recording, if a conference recording.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property startTime - The start time of the recording, given in RFC 2822 format.
   * @property duration - The length of the recording, in seconds.
   * @property sid - A string that uniquely identifies this recording
   * @property price - The one-time cost of creating this recording.
   * @property priceUnit - The currency used in the Price property.
   * @property status - The status of the recording.
   * @property channels - The number of channels in the final recording file as an integer.
   * @property source - The way in which this recording was created.
   * @property errorCode - More information about the recording failure, if Status is failed.
   * @property uri - The URI for this resource
   * @property encryptionDetails - Details for how to decrypt the recording.
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: RecordingContext;
  /**
   * Access the addOnResults
   *
   * @function addOnResults
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  addOnResults();
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  toJSON();
  /**
   * Access the transcriptions
   *
   * @function transcriptions
   * @memberof Twilio.Api.V2010.AccountContext.RecordingInstance
   * @instance
   */
  transcriptions();
}


declare class RecordingContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext
   * @description Initialize the RecordingContext
   *
   * @property transcriptions - transcriptions resource
   * @property addOnResults - addOnResults resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  addOnResults?: Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList;
  /**
   * fetch a RecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RecordingInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  transcriptions?: Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionList;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingPage }