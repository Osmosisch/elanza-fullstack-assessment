export interface IPoster {
  id: string;
  name: string;
}

export interface IRequest {
  // MEMO: this name is way too generic, but I'm being lazy here
  id?: string;
  posterId: string;
  careKind: TCareKind;
  startDateAndTime: Date;
  endDateAndTime: Date;
  extraInfo: string;
  status: TRequestStatus;
}

export type TCareKind = 'household' | 'medical';

export type TRequestStatus = 'open' | 'closed';

export type TBackendRequest = Omit<
  IRequest,
  'startDateAndTime' | 'endDateAndTime'
> & {
  startDateAndTime: string;
  endDateAndTime: string;
};
