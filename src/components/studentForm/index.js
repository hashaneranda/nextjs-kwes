import React, { useEffect, useState } from 'react';
import kwesforms from 'kwesforms';
import classNames from 'classnames';
import PhoneInput from 'react-phone-input-2';
import Grid from '@material-ui/core/Grid';

import 'react-phone-input-2/lib/style.css';

//styles
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [city, setCity] = useState('');

  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    kwesforms.init();
    geoFindMe();
  }, []);

  function geoFindMe() {
    fetch('https://extreme-ip-lookup.com/json/')
      .then((res) => res.json())
      .then((response) => {
        setCountry(response.country);
        setCountryCode(response.countryCode.toLowerCase());
        setCity(response.city);
      })
      .catch(() => {
        console.log('Request failed');
      });
  }

  return (
    <main className={classes.root}>
      <form
        id="fivertest"
        className={`kwes-form kw-multistep`}
        method="POST"
        multistep
        action="https://kwes.io/api/foreign/forms/gXLFAuoMHIHX9lLfPmwQ"
        noValidate="novalidate"
        autoComplete="off"
      >
        <div className={`kw-form-step ${formStep === 1 ? 'active' : ''}`}>
          <div className={classes.form}>
            <div className={classes.formGroup}>
              <label className={classes.formLabel} htmlFor="message">
                Your Message
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your question to 'Mrs Michelle Makeba' here.(Please be detailed)"
                rows="7"
                data-kw-rules="required|min:2|max:255"
              />
            </div>

            <div className={classes.formGroup}>
              <label className={classes.formLabel} htmlFor="study">
                Desired level of Study
              </label>
              <select name="study" data-kw-rules="required">
                <option value="Certificate/ Diploma">
                  Certificate/ Diploma
                </option>
                <option value="Bachelors">Bachelors</option>
                <option value="Postgraduate Diploma">
                  Postgraduate Diploma
                </option>
                <option value="Masters">Masters</option>
                <option value="PhD/ Doctorate">PhD/ Doctorate</option>
              </select>
            </div>
            <div className={classes.footer}>
              <button
                className={classNames(classes.actionBtn, classes.nextBtn)}
                type="button"
                onClick={() => setFormStep(2)}
              >
                Next
              </button>
              <button
                className={classNames(classes.actionBtn, classes.cancelBtn)}
                type="button"
                onClick={() => setFormStep(2)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className={`kw-form-step ${formStep === 2 ? 'active' : ''}`}>
          <Grid container spacing={1} className={classes.formNext}>
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="firstName">
                  First name
                </label>
                <input type="text" name="firstName" data-kw-rules="required" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="lastName">
                  Last name
                </label>
                <input type="text" name="lastName" data-kw-rules="required" />
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="nationality">
                  Nationality
                </label>
                <select
                  kw-select-type="countries"
                  name="nationality"
                  value={country}
                ></select>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="city">
                  City of Residence
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  data-kw-rules="required"
                />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="phone">
                  Phone number
                </label>
                <PhoneInput
                  country={countryCode}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                  }}
                  data-kw-rules="required"
                />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  data-kw-rules="required|email"
                />
              </div>
            </Grid>
            <Grid item lg={12} xs={12} className={classes.form2Footer}>
              <a
                onClick={(e) => {
                  e.preventDefault;
                  setFormStep(1);
                }}
                className={classes.backBtn}
              >
                {'<- Back'}
              </a>
              <button type="submit" className={classes.formSubmitBtn}>
                Send Message Now
              </button>
            </Grid>
          </Grid>
        </div>
      </form>
    </main>
  );
}
