export interface IPoster {
  id: string;
  name: string;
}

export interface IRequest {
  posterId: string;
  careKind: TCareKind;
  startDateAndTime: Date;
  endDateAndTime: Date;
  extraInfo: string;
  status: TRequestStatus;
}

export type TCareKind = 'household' | 'medical';

export type TRequestStatus = 'open' | 'closed';
