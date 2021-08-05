import { createContext, useState } from 'react';
import { IPoster, IRequest } from './interfaces';

interface IAppContext {
  requests: IRequest[];
  addRequest: (request: IRequest) => void;
  poster: IPoster;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppContextProviderComponent({ children }: { children: any }) {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [poster] = useState<IPoster>({ id: 'poster-one', name: 'Sunshine' }); // would normally be retrieved from login/user management

  function addRequest(newRequest: IRequest) {
    setRequests([...requests, newRequest]);
  }

  return (
    <AppContext.Provider value={{ requests, addRequest, poster }}>
      {children}
    </AppContext.Provider>
  );
}
