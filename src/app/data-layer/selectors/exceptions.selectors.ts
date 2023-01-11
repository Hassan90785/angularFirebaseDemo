import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromException from '../reducers/exceptions.reducer'

/**
 *  Exceptions Selector
 */


export const selectExceptions = createFeatureSelector<fromException.ExceptionState>(fromException.exceptionFeatureKey);
export const exceptionsSelector = createSelector(selectExceptions, (exceptionsState: fromException.ExceptionState) => exceptionsState.exceptions);
