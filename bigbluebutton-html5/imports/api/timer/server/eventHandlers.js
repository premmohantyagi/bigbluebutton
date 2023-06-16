import RedisPubSub from '/imports/startup/server/redis';
import handleTimerActivated from './handlers/timerActivated';
import handleTimerDeactivated from './handlers/timerDeactivated';
import handleTimerStarted from './handlers/timerStarted';
import handleTimerStopped from './handlers/timerStopped';
import handleTimerSwitched from './handlers/timerSwitched';
import handleTimerSet from './handlers/timerSet';
import handleTimerReset from './handlers/timerReset';
import handleTimerEnded from './handlers/timerEnded';
import handleTrackSet from './handlers/trackSet';

RedisPubSub.on('ActivateTimerRespMsg', handleTimerActivated);
RedisPubSub.on('DeactivateTimerRespMsg', handleTimerDeactivated);
RedisPubSub.on('StartTimerRespMsg', handleTimerStarted);
RedisPubSub.on('StopTimerRespMsg', handleTimerStopped);
RedisPubSub.on('SwitchTimerRespMsg', handleTimerSwitched);
RedisPubSub.on('SetTimerRespMsg', handleTimerSet);
RedisPubSub.on('ResetTimerRespMsg', handleTimerReset);
RedisPubSub.on('TimerEndedEvtMsg', handleTimerEnded);
RedisPubSub.on('SetTrackRespMsg', handleTrackSet);