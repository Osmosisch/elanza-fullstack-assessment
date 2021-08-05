import DateFnsUtils from '@date-io/date-fns';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import axios from 'axios';
import _ from 'lodash';
import { ChangeEvent, useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import { IRequest, TCareKind } from '../../interfaces';
import AsyncSingleClickButton from '../../util/AsyncSingleClickButton';

export default function PostRequestDialog({
  isDialogOpen,
  onClose,
}: {
  isDialogOpen: boolean;
  onClose: () => void;
}) {
  const { addRequest, postersById } = useContext(AppContext);

  const [careKind, setCareKind] = useState<TCareKind>('medical');
  const [startDateAndTime, setStartDateAndTime] = useState<Date>(new Date());
  const [endDateAndTime, setEndDateAndTime] = useState<Date>(new Date());
  const [extraInfo, setExtraInfo] = useState<string>('');

  const poster = _.values(postersById)[0];

  async function handleSubmit(): Promise<any> {
    const newRequest: IRequest = {
      careKind,
      startDateAndTime,
      endDateAndTime,
      extraInfo,
      posterId: poster.id,
      status: 'open',
    };

    const response = await axios.post('/api/requests', newRequest);
    if (response.status === 201) {
      addRequest(newRequest);
      onClose();
    } else {
      console.error('Error posting request: ' + response.data);
    } // TODO: handle errors
  }

  return (
    <Dialog open={isDialogOpen} onClose={onClose}>
      <DialogTitle disableTypography>
        <Typography variant="h6">Please fill out request details</Typography>
      </DialogTitle>
      <DialogContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel id="care-type-label">Kind of care</InputLabel>
                <Select
                  native
                  value={careKind}
                  labelId="care-type-label"
                  onChange={(e: ChangeEvent<{ value: unknown }>) =>
                    setCareKind(e.target.value as TCareKind)
                  }
                >
                  <option value="medical">Medical</option>
                  <option value="household">Household</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                label="Start date"
                value={startDateAndTime}
                onChange={(newStartDateAndTime: Date | null): void => {
                  if (newStartDateAndTime !== null) {
                    setStartDateAndTime(newStartDateAndTime);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <DateTimePicker
                label="End date"
                value={endDateAndTime}
                onChange={(newEndDateAndTime: Date | null): void => {
                  if (newEndDateAndTime !== null) {
                    setEndDateAndTime(newEndDateAndTime);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Extra info"
                value={extraInfo}
                multiline
                fullWidth
                minRows={3}
                onChange={(e: ChangeEvent<{ value: string }>): void =>
                  setExtraInfo(e.target.value)
                }
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <AsyncSingleClickButton
          asyncFunction={handleSubmit}
          variant="contained"
          color="primary"
        >
          Post
        </AsyncSingleClickButton>
      </DialogActions>
    </Dialog>
  );
}
