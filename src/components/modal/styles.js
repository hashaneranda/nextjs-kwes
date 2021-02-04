import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  modalComponent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    position: 'relative',
    '&:focus': {
      outline: 'none',
    },
  },
  closeBtn: {
    position: 'absolute',
    right: '10px',
    top: '10px',

    width: 15,
    height: 16,

    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },
  },
}));
