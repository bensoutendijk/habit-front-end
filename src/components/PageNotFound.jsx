import React from 'react';

import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => createStyles({

}));

function PageNotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;
