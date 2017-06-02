import {MainActions} from '../actions/main-actions';

export const gtmEpic = action$ =>
  action$.ofType(MainActions.DOM_SELECTION_ACTIVE_CHANGE)
         .filter(action => action.payload)
         .do(action => {
           console.debug('Firing GTM event call for action:', action);
         })
         .ignoreElements();
