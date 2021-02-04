import React, { useEffect, useState } from 'react';
import kwesforms from 'kwesforms';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

//styles
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();

  const [formStep, setFormStep] = useState(1);

  useEffect(() => {
    kwesforms.init();

    // kwesforms.setCustomRule(
    //   "fivertest",
    //   "date",
    //   "Please, not on the weekend",
    //   (value) => {
    //     const date = new Date(value);
    //     return date.getDay() === 0 || date.getDay() === 6;
    //   }
    // );
  }, []);

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
          <Grid container spacing={1} className={classes.form}>
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
                <select kw-select-type="countries" name="nationality"></select>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="city">
                  City of Residence
                </label>
                <input type="text" name="city" data-kw-rules="required" />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="phone">
                  City of Residence
                </label>
                <input type="text" name="phone" data-kw-rules="required" />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
              <div className={classes.formGroup}>
                <label className={classes.formLabelMini} htmlFor="email">
                  Email
                </label>
                <input type="email" name="email" data-kw-rules="required|email"  />
              </div>
            </Grid>
            <Grid item lg={12} xs={12}>
            <button
            className="kw-multistep-button kw-multistep-button-previous"
            type="button"
            onClick={() => setFormStep(1)}
          >
            Back
          </button>
          <button type="submit">Submit</button>
            </Grid>
          </Grid>

          {/* <div className="kw-datepicker-wrapper">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              data-kw-type="datepicker"
              data-kw-rules="required"
              autoComplete="off"
            />
          </div> */}
         
        </div>
      </form>
    </main>
  );
}
