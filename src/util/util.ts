import { parseISO } from 'date-fns';
import _ from 'lodash';
import { IRequest, TBackendRequest } from '../interfaces';

export function parseDates(backendRequests: TBackendRequest[]): IRequest[] {
  return _.map(backendRequests, (backendRequest: TBackendRequest) => {
    return {
      ...backendRequest,
      startDateAndTime: parseISO(backendRequest.startDateAndTime),
      endDateAndTime: parseISO(backendRequest.endDateAndTime),
    };
  });
}
