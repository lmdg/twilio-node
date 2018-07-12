/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import deserialize = require('../../../base/deserialize');
import serialize = require('../../../base/serialize');
import values = require('../../../base/values');

/**
 * @constructor Twilio.Video.V1.CompositionList
 * @description Initialize the CompositionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function CompositionList(version: V1): CompositionListInstance;


declare class CompositionPage extends Page {
  /**
   * @constructor Twilio.Video.V1.CompositionPage
   * @augments Page
   * @description Initialize the CompositionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of CompositionInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.CompositionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CompositionInstance {
  /**
   * @constructor Twilio.Video.V1.CompositionInstance
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - Twilio Account SID.
   * @property status - The status of the Composition.
   * @property dateCreated - Date when the Composition Resource was created.
   * @property dateCompleted - Date when the media processing task finished.
   * @property dateDeleted - Date when the Composition Resource generated media was deleted.
   * @property sid - A 34-character string that uniquely identifies this Composition.
   * @property roomSid - A 34-character string that uniquely identifies the source of this Composition.
   * @property audioSources - A list of audio sources related to this Composition.
   * @property audioSourcesExcluded - A list of audio sources excluded related to this Composition.
   * @property videoLayout - The JSON video layout description.
   * @property resolution - Pixel resolution of the composed video.
   * @property trim - Boolean flag for clipping intervals that have no media.
   * @property format - The file format for this Composition.
   * @property bitrate - The bitrate
   * @property size - Size of the Composed media file expressed in bytes.
   * @property duration - Duration of the Composed media in seconds.
   * @property url - The absolute URL for this resource.
   * @property links - JSON object with the URL where the media file can be fetched.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid);

  _proxy?: CompositionContext;
  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CompositionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.CompositionInstance
   * @instance
   */
  toJSON();
}


declare class CompositionContext {
  /**
   * @constructor Twilio.Video.V1.CompositionContext
   * @description Initialize the CompositionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The Composition Sid that uniquely identifies the Composition to fetch.
   */
  constructor(version: Twilio.Video.V1, sid: sid);

  /**
   * fetch a CompositionInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CompositionInstance
   *
   * @function remove
   * @memberof Twilio.Video.V1.CompositionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { CompositionContext, CompositionInstance, CompositionList, CompositionPage }