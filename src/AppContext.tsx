import axios, { AxiosResponse } from 'axios';
import _ from 'lodash';
import { createContext, useEffect, useMemo, useState } from 'react';
import { IPoster, IRequest } from './interfaces';
import { parseDates } from './util/util';

interface IAppContext {
  requests: IRequest[];
  openRequests: IRequest[];
  addRequest: (request: IRequest) => void;
  postersById: Record<string, IPoster>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppContextProviderComponent({ children }: { children: any }) {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [postersById] = useState<Record<string, IPoster>>({
    'poster-one': {
      id: 'poster-one',
      name: 'Sunshine',
    },
  }); // would normally be retrieved from login/user management

  const openRequests = useMemo(() => {
    return _.filter(requests, ['status', 'open']);
  }, [requests]);

  useEffect(() => {
    axios.get('/api/requests').then((response: AxiosResponse) => {
      setRequests(parseDates(response.data));
    }); // TODO: add error handling
  }, []);

  function addRequest(newRequest: IRequest) {
    setRequests([...requests, newRequest]);
  }

  return (
    <AppContext.Provider
      value={{ requests, openRequests, addRequest, postersById }}
    >
      {children}
    </AppContext.Provider>
  );
}
