import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../components/copyright';
import Modal from '../components/modal';
import StudentForm from '../components/studentForm';

const useStyles = makeStyles(() => ({
  headerContainer: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    background: '#f2f2f2',
  },
  mainHeader: {
    marginTop: 0,
    marginBottom: 2,
  },
  subHeader: {
    marginTop: 0,
    color: '#6d6d6d',
  },
  subTitle: {
    color: 'rgb(0, 102, 255)',
    fontWeight: 'bold',
  },
}));

const Index = () => {
  const classes = useStyles();

  const [openForm, setOpenForm] = useState(false);

  const ModalHeader = () => (
    <div className={classes.headerContainer}>
      <h2 className={classes.mainHeader}>Mrs Michelle Makeba</h2>
      <p className={classes.subHeader}>
        at{' '}
        <span className={classes.subTitle}>American University in Cairo</span>
      </p>
    </div>
  );

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Kwes and next js form modal
        </Typography>

        <button type="button" onClick={() => setOpenForm(true)}>
          Open Modal
        </button>

        <Copyright />
      </Box>
      <Modal
        open={openForm}
        handleClose={() => setOpenForm(false)}
        showCloseBtn
        modalHeader={<ModalHeader />}
      >
        <StudentForm />
      </Modal>
    </Container>
  );
};

export default Index;
