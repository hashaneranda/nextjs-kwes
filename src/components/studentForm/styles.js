import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    minWidth: 400,
    padding: '0 2em',
    paddingBottom: '1.5em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: 500,
    [theme.breakpoints.down('sm')]: {
      minWidth: '80vw',
    },
  },
  formNext: {
    minWidth: 500,
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      minWidth: '80vw',
    },
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  formLabel: {
    fontWeight: '500',
    fontSize: '1.2em',
    paddingBottom: 9,
  },
  formLabelMini: {
    fontWeight: '500',
    fontSize: '1.1em',
    paddingBottom: 9,
  },
  stepForm: {
    display: 'none',
  },
  form2Footer: {
    display: 'flex',
    flexDirection: 'row',
  },
  formActive: {
    display: 'flex',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  actionBtn: {
    padding: '1em 1.5em',
    marginLeft: 10,
  },
  nextBtn: {
    background: 'red',
    color: '#ffffff',
  },
  cancelBtn: {
    background: '#f2f2f2',
    color: '#000',
  },
  formSubmitBtn: {
    background: 'red',
    color: '#ffffff',
    marginLeft: '23%',
    padding: '1em 1.5em',
  },
  backBtn: {
    textDecoration: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
