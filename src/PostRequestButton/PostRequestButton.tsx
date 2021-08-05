import { Button } from '@material-ui/core';
import { useState } from 'react';
import PostRequestDialog from './PostRequestDialog/PostRequestDialog';

export default function PostRequestButton(): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setIsDialogOpen(true)}
      >
        Post request
      </Button>
      <PostRequestDialog
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
