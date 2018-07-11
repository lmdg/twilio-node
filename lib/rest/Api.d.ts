/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V2010 = require('./api/V2010');
import { AccountContext } from './api/v2010/account';
import { AccountListInstance } from './api/v2010/account';
import { AddressListInstance } from './api/v2010/account/address';
import { ApplicationListInstance } from './api/v2010/account/application';
import { AuthorizedConnectAppListInstance } from './api/v2010/account/authorizedConnectApp';
import { AvailablePhoneNumberCountryListInstance } from './api/v2010/account/availablePhoneNumber';
import { CallListInstance } from './api/v2010/account/call';
import { ConferenceListInstance } from './api/v2010/account/conference';
import { ConnectAppListInstance } from './api/v2010/account/connectApp';
import { IncomingPhoneNumberListInstance } from './api/v2010/account/incomingPhoneNumber';
import { KeyListInstance } from './api/v2010/account/key';
import { MessageListInstance } from './api/v2010/account/message';
import { NewKeyListInstance } from './api/v2010/account/newKey';
import { NewSigningKeyListInstance } from './api/v2010/account/newSigningKey';
import { NotificationListInstance } from './api/v2010/account/notification';
import { OutgoingCallerIdListInstance } from './api/v2010/account/outgoingCallerId';
import { QueueListInstance } from './api/v2010/account/queue';
import { RecordingListInstance } from './api/v2010/account/recording';
import { ShortCodeListInstance } from './api/v2010/account/shortCode';
import { SigningKeyListInstance } from './api/v2010/account/signingKey';
import { SipListInstance } from './api/v2010/account/sip';
import { TokenListInstance } from './api/v2010/account/token';
import { TranscriptionListInstance } from './api/v2010/account/transcription';
import { UsageListInstance } from './api/v2010/account/usage';
import { ValidationRequestListInstance } from './api/v2010/account/validationRequest';


declare class Api extends Domain {
  /**
   * Initialize api domain
   *
   * @constructor Twilio.Api
   *
   * @property v2010 - v2010 version
   * @property account - Main account resource
   * @property accounts - accounts resource
   * @property addresses - addresses resource
   * @property applications - applications resource
   * @property authorizedConnectApps - authorizedConnectApps resource
   * @property availablePhoneNumbers - availablePhoneNumbers resource
   * @property calls - calls resource
   * @property conferences - conferences resource
   * @property connectApps - connectApps resource
   * @property incomingPhoneNumbers - incomingPhoneNumbers resource
   * @property keys - keys resource
   * @property messages - messages resource
   * @property newKeys - newKeys resource
   * @property newSigningKeys - newSigningKeys resource
   * @property notifications - notifications resource
   * @property outgoingCallerIds - outgoingCallerIds resource
   * @property queues - queues resource
   * @property recordings - recordings resource
   * @property signingKeys - signingKeys resource
   * @property sip - sip resource
   * @property shortCodes - shortCodes resource
   * @property tokens - tokens resource
   * @property transcriptions - transcriptions resource
   * @property usage - usage resource
   * @property validationRequests - validationRequests resource
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  account?: Twilio.Api.V2010.AccountContext;
  accounts?: Twilio.Api.V2010.AccountList;
  addresses?: Twilio.Api.V2010.AccountContext.AddressList;
  applications?: Twilio.Api.V2010.AccountContext.ApplicationList;
  authorizedConnectApps?: Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList;
  availablePhoneNumbers?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList;
  calls?: Twilio.Api.V2010.AccountContext.CallList;
  conferences?: Twilio.Api.V2010.AccountContext.ConferenceList;
  connectApps?: Twilio.Api.V2010.AccountContext.ConnectAppList;
  incomingPhoneNumbers?: Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList;
  keys?: Twilio.Api.V2010.AccountContext.KeyList;
  messages?: Twilio.Api.V2010.AccountContext.MessageList;
  newKeys?: Twilio.Api.V2010.AccountContext.NewKeyList;
  newSigningKeys?: Twilio.Api.V2010.AccountContext.NewSigningKeyList;
  notifications?: Twilio.Api.V2010.AccountContext.NotificationList;
  outgoingCallerIds?: Twilio.Api.V2010.AccountContext.OutgoingCallerIdList;
  queues?: Twilio.Api.V2010.AccountContext.QueueList;
  recordings?: Twilio.Api.V2010.AccountContext.RecordingList;
  shortCodes?: Twilio.Api.V2010.AccountContext.ShortCodeList;
  signingKeys?: Twilio.Api.V2010.AccountContext.SigningKeyList;
  sip?: Twilio.Api.V2010.AccountContext.SipList;
  tokens?: Twilio.Api.V2010.AccountContext.TokenList;
  transcriptions?: Twilio.Api.V2010.AccountContext.TranscriptionList;
  usage?: Twilio.Api.V2010.AccountContext.UsageList;
  v2010?: Twilio.Api.V2010;
  validationRequests?: Twilio.Api.V2010.AccountContext.ValidationRequestList;
}
