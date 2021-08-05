import { Grid, Paper, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import _ from 'lodash';
import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { IRequest } from '../interfaces';

export default function RequestList(): JSX.Element {
  const { openRequests, postersById } = useContext(AppContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Currently-open requests</Typography>
      </Grid>
      {_.map(openRequests, (request: IRequest) => {
        return (
          <Grid item component={Paper} key={`request-list-item-${request.id}`}>
            <Grid container>
              <Grid item xs={12}>
                Posted by: {postersById[request.posterId].name}
              </Grid>
              <Grid item xs={12}>
                Kind of care: {request.careKind}
              </Grid>
              <Grid item xs={12}>
                Start date and time:{' '}
                {format(request.startDateAndTime, 'dd LLL yy HH:mm')}
              </Grid>
              <Grid item xs={12}>
                End date and time:{' '}
                {format(request.endDateAndTime, 'dd LLL yy HH:mm')}
              </Grid>
              <Grid item xs={12}>
                Extra info: {request.extraInfo}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
