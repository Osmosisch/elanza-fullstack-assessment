import { Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import { AppContextProviderComponent } from './AppContext';
import logo from './logo.png';
import PostRequestButton from './PostRequestButton/PostRequestButton';
import RequestList from './RequestList/RequestList';

function App() {
  const [data, setData] = useState({ name: 'unknown', counter: 0 });

  const fetchData = async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContextProviderComponent>
      <Grid container>
        <Grid item xs={12}>
          <img src={logo} alt="" width="100" />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Hello {data.name}, you called the backend {data.counter} times.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PostRequestButton />
        </Grid>
        <Grid xs={12}>
          <RequestList />
        </Grid>
      </Grid>
    </AppContextProviderComponent>
  );
}

export default App;
