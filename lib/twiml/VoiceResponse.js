'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var TwiML = require('./TwiML');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * <Response> TwiML for Voice
 */
/* jshint ignore:end */
function VoiceResponse() {
  TwiML.call(this);
  this._propertyName = 'response';
}

VoiceResponse.prototype = Object.create(TwiML.prototype);
VoiceResponse.prototype.constructor = VoiceResponse;

/* jshint ignore:start */
/**
 * <Dial> TwiML Verb
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.action] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {number} [attributes.timeout] - Time to wait for answer
 * @param {boolean} [attributes.hangupOnStar] - Hangup call on star press
 * @param {number} [attributes.timeLimit] - Max time length
 * @param {string} [attributes.callerId] - Caller ID to display
 * @param {dial.record} [attributes.record] - Record the call
 * @param {dial.trim} [attributes.trim] - Trim the recording
 * @param {string} [attributes.recordingStatusCallback] -
 *          Recording status callback URL
 * @param {string} [attributes.recordingStatusCallbackMethod] -
 *          Recording status callback URL method
 * @param {dial.recording_event} [attributes.recordingStatusCallbackEvent] -
 *          Recording status callback events
 * @param {boolean} [attributes.answerOnBridge] -
 *          Preserve the ringing behavior of the inbound call until the Dialed call picks up
 * @param {dial.ring_tone} [attributes.ringTone] -
 *          Ringtone allows you to override the ringback tone that Twilio will play back to the caller while executing the Dial
 * @param {string} number - Phone number to dial
 *
 * @returns Dial
 */
/* jshint ignore:end */
VoiceResponse.prototype.dial = function dial(attributes, number) {
  return new Dial(this.response.ele('Dial', attributes, number));
};

/* jshint ignore:start */
/**
 * <Echo> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 *
 * @returns Echo
 */
/* jshint ignore:end */
VoiceResponse.prototype.echo = function echo(attributes) {
  return new Echo(this.response.ele('Echo', attributes));
};

/* jshint ignore:start */
/**
 * <Enqueue> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.action] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {string} [attributes.waitUrl] - Wait URL
 * @param {string} [attributes.waitUrlMethod] - Wait URL method
 * @param {string} [attributes.workflowSid] - TaskRouter Workflow SID
 * @param {string} name - Friendly name
 *
 * @returns Enqueue
 */
/* jshint ignore:end */
VoiceResponse.prototype.enqueue = function enqueue(attributes, name) {
  return new Enqueue(this.response.ele('Enqueue', attributes, name));
};

/* jshint ignore:start */
/**
 * <Gather> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {gather.input} [attributes.input] - Input type Twilio should accept
 * @param {string} [attributes.action] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {number} [attributes.timeout] - Time to wait to gather input
 * @param {string} [attributes.speechTimeout] -
 *          Time to wait to gather speech input and it should be either auto or a positive integer.
 * @param {number} [attributes.maxSpeechTime] - Max allowed time for speech input
 * @param {boolean} [attributes.profanityFilter] - Profanity Filter on speech
 * @param {string} [attributes.finishOnKey] - Finish gather on key
 * @param {number} [attributes.numDigits] - Number of digits to collect
 * @param {string} [attributes.partialResultCallback] - Partial result callback URL
 * @param {string} [attributes.partialResultCallbackMethod] -
 *          Partial result callback URL method
 * @param {gather.language} [attributes.language] - Language to use
 * @param {string} [attributes.hints] - Speech recognition hints
 * @param {boolean} [attributes.bargeIn] - Stop playing media upon speech
 *
 * @returns Gather
 */
/* jshint ignore:end */
VoiceResponse.prototype.gather = function gather(attributes) {
  return new Gather(this.response.ele('Gather', attributes));
};

/* jshint ignore:start */
/**
 * <Hangup> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 *
 * @returns Hangup
 */
/* jshint ignore:end */
VoiceResponse.prototype.hangup = function hangup(attributes) {
  return new Hangup(this.response.ele('Hangup', attributes));
};

/* jshint ignore:start */
/**
 * <Leave> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 *
 * @returns Leave
 */
/* jshint ignore:end */
VoiceResponse.prototype.leave = function leave(attributes) {
  return new Leave(this.response.ele('Leave', attributes));
};

/* jshint ignore:start */
/**
 * <Pause> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {number} [attributes.length] - Length in seconds to pause
 *
 * @returns Pause
 */
/* jshint ignore:end */
VoiceResponse.prototype.pause = function pause(attributes) {
  return new Pause(this.response.ele('Pause', attributes));
};

/* jshint ignore:start */
/**
 * <Play> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {number} [attributes.loop] - Times to loop media
 * @param {string} [attributes.digits] - Play DTMF tones for digits
 * @param {url} [url] - Media URL
 *
 * @returns Play
 */
/* jshint ignore:end */
VoiceResponse.prototype.play = function play(attributes, url) {
  return new Play(this.response.ele('Play', attributes, url));
};

/* jshint ignore:start */
/**
 * <Queue> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.url] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {string} [attributes.reservationSid] - TaskRouter Reservation SID
 * @param {string} [attributes.postWorkActivitySid] - TaskRouter Activity SID
 * @param {string} name - Queue name
 *
 * @returns Queue
 */
/* jshint ignore:end */
VoiceResponse.prototype.queue = function queue(attributes, name) {
  return new Queue(this.response.ele('Queue', attributes, name));
};

/* jshint ignore:start */
/**
 * <Record> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {string} [attributes.action] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {number} [attributes.timeout] - Timeout to begin recording
 * @param {string} [attributes.finishOnKey] - Finish recording on key
 * @param {number} [attributes.maxLength] - Max time to record in seconds
 * @param {boolean} [attributes.playBeep] - Play beep
 * @param {record.trim} [attributes.trim] - Trim the recording
 * @param {string} [attributes.recordingStatusCallback] - Status callback URL
 * @param {string} [attributes.recordingStatusCallbackMethod] -
 *          Status callback URL method
 * @param {boolean} [attributes.transcribe] - Transcribe the recording
 * @param {string} [attributes.transcribeCallback] - Transcribe callback URL
 *
 * @returns Record
 */
/* jshint ignore:end */
VoiceResponse.prototype.record = function record(attributes) {
  return new Record(this.response.ele('Record', attributes));
};

/* jshint ignore:start */
/**
 * <Redirect> TwiML Verb
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.method] - Redirect URL method
 * @param {url} url - Redirect URL
 *
 * @returns Redirect
 */
/* jshint ignore:end */
VoiceResponse.prototype.redirect = function redirect(attributes, url) {
  return new Redirect(this.response.ele('Redirect', attributes, url));
};

/* jshint ignore:start */
/**
 * <Reject> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {reject.reason} [attributes.reason] - Rejection reason
 *
 * @returns Reject
 */
/* jshint ignore:end */
VoiceResponse.prototype.reject = function reject(attributes) {
  return new Reject(this.response.ele('Reject', attributes));
};

/* jshint ignore:start */
/**
 * <Say> TwiML Verb
 *
 * @param {object} attributes - TwiML attributes
 * @param {say.voice} [attributes.voice] - Voice to use
 * @param {number} [attributes.loop] - Times to loop message
 * @param {say.language} [attributes.language] - Message langauge
 * @param {string} message - Message to say
 *
 * @returns Say
 */
/* jshint ignore:end */
VoiceResponse.prototype.say = function say(attributes, message) {
  return new Say(this.response.ele('Say', attributes, message));
};

/* jshint ignore:start */
/**
 * <Sms> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.to] - Number to send message to
 * @param {string} [attributes.from] - Number to send message from
 * @param {string} [attributes.action] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {string} [attributes.statusCallback] - Status callback URL
 * @param {string} message - Message body
 *
 * @returns Sms
 */
/* jshint ignore:end */
VoiceResponse.prototype.sms = function sms(attributes, message) {
  return new Sms(this.response.ele('Sms', attributes, message));
};


/* jshint ignore:start */
/**
 * <Sms> TwiML Noun
 *
 * @param {object} sms - <Sms> TwiML Noun
 */
/* jshint ignore:end */
function Sms(sms) {
  this.sms = sms;
  this._propertyName = 'sms';
}

Sms.prototype = Object.create(TwiML.prototype);
Sms.prototype.constructor = Sms;


/* jshint ignore:start */
/**
 * <Say> TwiML Verb
 *
 * @param {object} say - <Say> TwiML Verb
 */
/* jshint ignore:end */
function Say(say) {
  this.say = say;
  this._propertyName = 'say';
}

Say.prototype = Object.create(TwiML.prototype);
Say.prototype.constructor = Say;


/* jshint ignore:start */
/**
 * <Reject> TwiML Verb
 *
 * @param {object} reject - <Reject> TwiML Verb
 */
/* jshint ignore:end */
function Reject(reject) {
  this.reject = reject;
  this._propertyName = 'reject';
}

Reject.prototype = Object.create(TwiML.prototype);
Reject.prototype.constructor = Reject;


/* jshint ignore:start */
/**
 * <Redirect> TwiML Verb
 *
 * @param {object} redirect - <Redirect> TwiML Verb
 */
/* jshint ignore:end */
function Redirect(redirect) {
  this.redirect = redirect;
  this._propertyName = 'redirect';
}

Redirect.prototype = Object.create(TwiML.prototype);
Redirect.prototype.constructor = Redirect;


/* jshint ignore:start */
/**
 * <Record> TwiML Verb
 *
 * @param {object} record - <Record> TwiML Verb
 */
/* jshint ignore:end */
function Record(record) {
  this.record = record;
  this._propertyName = 'record';
}

Record.prototype = Object.create(TwiML.prototype);
Record.prototype.constructor = Record;


/* jshint ignore:start */
/**
 * <Queue> TwiML Noun
 *
 * @param {object} queue - <Queue> TwiML Noun
 */
/* jshint ignore:end */
function Queue(queue) {
  this.queue = queue;
  this._propertyName = 'queue';
}

Queue.prototype = Object.create(TwiML.prototype);
Queue.prototype.constructor = Queue;


/* jshint ignore:start */
/**
 * <Play> TwiML Verb
 *
 * @param {object} play - <Play> TwiML Verb
 */
/* jshint ignore:end */
function Play(play) {
  this.play = play;
  this._propertyName = 'play';
}

Play.prototype = Object.create(TwiML.prototype);
Play.prototype.constructor = Play;


/* jshint ignore:start */
/**
 * <Pause> TwiML Verb
 *
 * @param {object} pause - <Pause> TwiML Verb
 */
/* jshint ignore:end */
function Pause(pause) {
  this.pause = pause;
  this._propertyName = 'pause';
}

Pause.prototype = Object.create(TwiML.prototype);
Pause.prototype.constructor = Pause;


/* jshint ignore:start */
/**
 * <Leave> TwiML Verb
 *
 * @param {object} leave - <Leave> TwiML Verb
 */
/* jshint ignore:end */
function Leave(leave) {
  this.leave = leave;
  this._propertyName = 'leave';
}

Leave.prototype = Object.create(TwiML.prototype);
Leave.prototype.constructor = Leave;


/* jshint ignore:start */
/**
 * <Hangup> TwiML Verb
 *
 * @param {object} hangup - <Hangup> TwiML Verb
 */
/* jshint ignore:end */
function Hangup(hangup) {
  this.hangup = hangup;
  this._propertyName = 'hangup';
}

Hangup.prototype = Object.create(TwiML.prototype);
Hangup.prototype.constructor = Hangup;


/* jshint ignore:start */
/**
 * <Gather> TwiML Verb
 *
 * @param {object} gather - <Gather> TwiML Verb
 */
/* jshint ignore:end */
function Gather(gather) {
  this.gather = gather;
  this._propertyName = 'gather';
}

Gather.prototype = Object.create(TwiML.prototype);
Gather.prototype.constructor = Gather;

/* jshint ignore:start */
/**
 * <Say> TwiML Verb
 *
 * @param {object} attributes - TwiML attributes
 * @param {say.voice} [attributes.voice] - Voice to use
 * @param {number} [attributes.loop] - Times to loop message
 * @param {say.language} [attributes.language] - Message langauge
 * @param {string} message - Message to say
 *
 * @returns Say
 */
/* jshint ignore:end */
Gather.prototype.say = function say(attributes, message) {
  return new Say(this.gather.ele('Say', attributes, message));
};

/* jshint ignore:start */
/**
 * <Pause> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {number} [attributes.length] - Length in seconds to pause
 *
 * @returns Pause
 */
/* jshint ignore:end */
Gather.prototype.pause = function pause(attributes) {
  return new Pause(this.gather.ele('Pause', attributes));
};

/* jshint ignore:start */
/**
 * <Play> TwiML Verb
 *
 * @param {object} [attributes] - TwiML attributes
 * @param {number} [attributes.loop] - Times to loop media
 * @param {string} [attributes.digits] - Play DTMF tones for digits
 * @param {url} [url] - Media URL
 *
 * @returns Play
 */
/* jshint ignore:end */
Gather.prototype.play = function play(attributes, url) {
  return new Play(this.gather.ele('Play', attributes, url));
};


/* jshint ignore:start */
/**
 * <Play> TwiML Verb
 *
 * @param {object} play - <Play> TwiML Verb
 */
/* jshint ignore:end */
function Play(play) {
  this.play = play;
  this._propertyName = 'play';
}

Play.prototype = Object.create(TwiML.prototype);
Play.prototype.constructor = Play;


/* jshint ignore:start */
/**
 * <Pause> TwiML Verb
 *
 * @param {object} pause - <Pause> TwiML Verb
 */
/* jshint ignore:end */
function Pause(pause) {
  this.pause = pause;
  this._propertyName = 'pause';
}

Pause.prototype = Object.create(TwiML.prototype);
Pause.prototype.constructor = Pause;


/* jshint ignore:start */
/**
 * <Say> TwiML Verb
 *
 * @param {object} say - <Say> TwiML Verb
 */
/* jshint ignore:end */
function Say(say) {
  this.say = say;
  this._propertyName = 'say';
}

Say.prototype = Object.create(TwiML.prototype);
Say.prototype.constructor = Say;


/* jshint ignore:start */
/**
 * <Enqueue> TwiML Noun
 *
 * @param {object} enqueue - <Enqueue> TwiML Noun
 */
/* jshint ignore:end */
function Enqueue(enqueue) {
  this.enqueue = enqueue;
  this._propertyName = 'enqueue';
}

Enqueue.prototype = Object.create(TwiML.prototype);
Enqueue.prototype.constructor = Enqueue;

/* jshint ignore:start */
/**
 * <Task> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {number} [attributes.priority] - Task priority
 * @param {number} [attributes.timeout] - Timeout associated with task
 * @param {string} body - TaskRouter task attributes
 *
 * @returns Task
 */
/* jshint ignore:end */
Enqueue.prototype.task = function task(attributes, body) {
  return new Task(this.enqueue.ele('Task', attributes, body));
};


/* jshint ignore:start */
/**
 * <Task> TwiML Noun
 *
 * @param {object} task - <Task> TwiML Noun
 */
/* jshint ignore:end */
function Task(task) {
  this.task = task;
  this._propertyName = 'task';
}

Task.prototype = Object.create(TwiML.prototype);
Task.prototype.constructor = Task;


/* jshint ignore:start */
/**
 * <Echo> TwiML Verb
 *
 * @param {object} echo - <Echo> TwiML Verb
 */
/* jshint ignore:end */
function Echo(echo) {
  this.echo = echo;
  this._propertyName = 'echo';
}

Echo.prototype = Object.create(TwiML.prototype);
Echo.prototype.constructor = Echo;


/* jshint ignore:start */
/**
 * <Dial> TwiML Verb
 *
 * @param {object} dial - <Dial> TwiML Verb
 */
/* jshint ignore:end */
function Dial(dial) {
  this.dial = dial;
  this._propertyName = 'dial';
}

Dial.prototype = Object.create(TwiML.prototype);
Dial.prototype.constructor = Dial;

/* jshint ignore:start */
/**
 * <Client> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.url] - Client URL
 * @param {string} [attributes.method] - Client URL Method
 * @param {client.event} [attributes.statusCallbackEvent] -
 *          Events to trigger status callback
 * @param {string} [attributes.statusCallback] - Status Callback URL
 * @param {string} [attributes.statusCallbackMethod] - Status Callback URL Method
 * @param {string} name - Client name
 *
 * @returns Client
 */
/* jshint ignore:end */
Dial.prototype.client = function client(attributes, name) {
  return new Client(this.dial.ele('Client', attributes, name));
};

/* jshint ignore:start */
/**
 * <Conference> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {boolean} [attributes.muted] - Join the conference muted
 * @param {conference.beep} [attributes.beep] - Play beep when joining
 * @param {boolean} [attributes.startConferenceOnEnter] -
 *          Start the conference on enter
 * @param {boolean} [attributes.endConferenceOnExit] - End the conferenceon exit
 * @param {string} [attributes.waitUrl] - Wait URL
 * @param {string} [attributes.waitMethod] - Wait URL method
 * @param {number} [attributes.maxParticipants] - Maximum number of participants
 * @param {conference.record} [attributes.record] - Record the conference
 * @param {conference.region} [attributes.region] - Conference region
 * @param {string} [attributes.whisper] - Call whisper
 * @param {conference.trim} [attributes.trim] - Trim the conference recording
 * @param {conference.event} [attributes.statusCallbackEvent] -
 *          Events to call status callback URL
 * @param {string} [attributes.statusCallback] - Status callback URL
 * @param {string} [attributes.statusCallbackMethod] - Status callback URL method
 * @param {string} [attributes.recordingStatusCallback] -
 *          Recording status callback URL
 * @param {string} [attributes.recordingStatusCallbackMethod] -
 *          Recording status callback URL method
 * @param {conference.recording_event} [attributes.recordingStatusCallbackEvent] -
 *          Recording status callback events
 * @param {string} [attributes.eventCallbackUrl] - Event callback URL
 * @param {string} name - Conference name
 *
 * @returns Conference
 */
/* jshint ignore:end */
Dial.prototype.conference = function conference(attributes, name) {
  return new Conference(this.dial.ele('Conference', attributes, name));
};

/* jshint ignore:start */
/**
 * <Number> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.sendDigits] -
 *          DTMF tones to play when the call is answered
 * @param {string} [attributes.url] - TwiML URL
 * @param {string} [attributes.method] - TwiML URL method
 * @param {number.event} [attributes.statusCallbackEvent] -
 *          Events to call status callback
 * @param {string} [attributes.statusCallback] - Status callback URL
 * @param {string} [attributes.statusCallbackMethod] - Status callback URL method
 * @param {phone_number} phoneNumber - Phone Number to dial
 *
 * @returns Number
 */
/* jshint ignore:end */
Dial.prototype.number = function number(attributes, phoneNumber) {
  return new Number(this.dial.ele('Number', attributes, phoneNumber));
};

/* jshint ignore:start */
/**
 * <Queue> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.url] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {string} [attributes.reservationSid] - TaskRouter Reservation SID
 * @param {string} [attributes.postWorkActivitySid] - TaskRouter Activity SID
 * @param {string} name - Queue name
 *
 * @returns Queue
 */
/* jshint ignore:end */
Dial.prototype.queue = function queue(attributes, name) {
  return new Queue(this.dial.ele('Queue', attributes, name));
};

/* jshint ignore:start */
/**
 * <Sim> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {sid} simSid - SIM SID
 *
 * @returns Sim
 */
/* jshint ignore:end */
Dial.prototype.sim = function sim(attributes, simSid) {
  return new Sim(this.dial.ele('Sim', attributes, simSid));
};

/* jshint ignore:start */
/**
 * <Sip> TwiML Noun
 *
 * @param {object} attributes - TwiML attributes
 * @param {string} [attributes.username] - SIP Username
 * @param {string} [attributes.password] - SIP Password
 * @param {string} [attributes.url] - Action URL
 * @param {string} [attributes.method] - Action URL method
 * @param {sip.event} [attributes.statusCallbackEvent] - Status callback events
 * @param {string} [attributes.statusCallback] - Status callback URL
 * @param {string} [attributes.statusCallbackMethod] - Status callback URL method
 * @param {url} sipUrl - SIP URL
 *
 * @returns Sip
 */
/* jshint ignore:end */
Dial.prototype.sip = function sip(attributes, sipUrl) {
  return new Sip(this.dial.ele('Sip', attributes, sipUrl));
};


/* jshint ignore:start */
/**
 * <Sip> TwiML Noun
 *
 * @param {object} sip - <Sip> TwiML Noun
 */
/* jshint ignore:end */
function Sip(sip) {
  this.sip = sip;
  this._propertyName = 'sip';
}

Sip.prototype = Object.create(TwiML.prototype);
Sip.prototype.constructor = Sip;


/* jshint ignore:start */
/**
 * <Sim> TwiML Noun
 *
 * @param {object} sim - <Sim> TwiML Noun
 */
/* jshint ignore:end */
function Sim(sim) {
  this.sim = sim;
  this._propertyName = 'sim';
}

Sim.prototype = Object.create(TwiML.prototype);
Sim.prototype.constructor = Sim;


/* jshint ignore:start */
/**
 * <Queue> TwiML Noun
 *
 * @param {object} queue - <Queue> TwiML Noun
 */
/* jshint ignore:end */
function Queue(queue) {
  this.queue = queue;
  this._propertyName = 'queue';
}

Queue.prototype = Object.create(TwiML.prototype);
Queue.prototype.constructor = Queue;


/* jshint ignore:start */
/**
 * <Number> TwiML Noun
 *
 * @param {object} number - <Number> TwiML Noun
 */
/* jshint ignore:end */
function Number(number) {
  this.number = number;
  this._propertyName = 'number';
}

Number.prototype = Object.create(TwiML.prototype);
Number.prototype.constructor = Number;


/* jshint ignore:start */
/**
 * <Conference> TwiML Noun
 *
 * @param {object} conference - <Conference> TwiML Noun
 */
/* jshint ignore:end */
function Conference(conference) {
  this.conference = conference;
  this._propertyName = 'conference';
}

Conference.prototype = Object.create(TwiML.prototype);
Conference.prototype.constructor = Conference;


/* jshint ignore:start */
/**
 * <Client> TwiML Noun
 *
 * @param {object} client - <Client> TwiML Noun
 */
/* jshint ignore:end */
function Client(client) {
  this.client = client;
  this._propertyName = 'client';
}

Client.prototype = Object.create(TwiML.prototype);
Client.prototype.constructor = Client;

module.exports = VoiceResponse;
