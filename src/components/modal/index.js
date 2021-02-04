import React from 'react';
import { Modal, Paper, Grow } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';

// assets
import { close } from '../../constants/images';

//styles
import useStyles from './styles';

const ModalComponent = ({
  children,
  open = false,
  modalHeader = <> </>,
  handleClose = () => {},
  showCloseBtn = false,
  ...props
}) => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Modal
      open={open}
      onClose={handleClose}
      {...props}
      className={classes.modalComponent}
    >
      <Grow in={open}>
        <Paper className={classes.modalBody}>
          {showCloseBtn ? (
            <img
              src={close}
              alt="me"
              width="15"
              height="15"
              className={classes.closeBtn}
              onClick={handleClose}
            />
          ) : (
            ''
          )}
          {modalHeader}
          {children}
        </Paper>
      </Grow>
    </Modal>
  );
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func,
  showCloseBtn: PropTypes.bool,
  open: PropTypes.bool,
  modalHeader: PropTypes.node,
};

ModalComponent.defaultProps = {
  handleClose: () => {},
  showCloseBtn: false,
  open: false,
  modalHeader: <> </>,
};

export default ModalComponent;
