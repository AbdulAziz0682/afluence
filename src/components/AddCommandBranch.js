import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
  },
  label: {
    gap: '2rem',
    textTransform: 'capitalize',
  },
});

export default function AddCommandBranch({children, ...others}) {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      {...others}
    >
      {children}
    </Button>
  );
}
