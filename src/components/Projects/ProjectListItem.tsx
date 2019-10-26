import React from 'react';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Typography, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    "&:hover": {
      backgroundColor: '#c2c2c2'
    },
    '&:nth-child(even)': {
      "&:hover": {
        backgroundColor: '#c2c2c2'
      },
      backgroundColor: '#f2f2f2',
    }
  },
  service: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(2),
    
  },
  serviceButton: {
    width: '100%'
  },
  serviceLogo: {
    maxWidth: '50px',
    minWidth: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const ProjectListItem: React.FC<ProjectListItemProps> = (props) => {
  const { _id } = props;
  const classes = useStyles({});
  const project = useSelector((state: AppState) => state.projects.byId[_id]);

  return (
    <div className={classes.root}>
      <ButtonBase className={classes.serviceButton} component={Link} to={`/services/${project._id}`}>
        <Grid className={classes.service} item>
          <Typography variant="h6">{project.name}</Typography>
        </Grid> 
      </ButtonBase>
    </div>
  )
}

interface ProjectListItemProps {
  _id: string;
}

export default ProjectListItem;