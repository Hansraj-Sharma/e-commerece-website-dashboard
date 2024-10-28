import React from "react";
import Heading from "../heading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./style.module.css";

const Settings = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
    notes: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className={styles.settings_main}>
      <div className={styles.ad_container}>
        <Heading
          title={"Add Customer"}
          btnTitle1={"Cancel"}
          btnTitle2={"Save"}
          isButton={true}
        />
        <div className={styles.form_container}>
          <div className={styles.tab_btns}>
            <button className={styles.button}>Profile</button>
            <button className={styles.button}>Notifications</button>
            <button className={styles.button}>Accounts</button>
            <button className={styles.button}>Security</button>
          </div>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <div className={styles.fc_customerInfo}>
                <h2>Customer Information</h2>
                <p>Most important information about the customer</p>

                <div className={styles.fcci_form}>
                  <div className={styles.ff_form}>
                    <label htmlFor='firstName'>First Name</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='firstName'
                      name='firstName'
                    />
                    <ErrorMessage
                      name='firstName'
                      component='div'
                      className='error'
                    />
                  </div>
                  <div className={styles.ff_form}>
                    <label htmlFor='lastName'>Last Name</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='lastName'
                      name='lastName'
                    />
                    <ErrorMessage
                      name='lastName'
                      component='div'
                      className='error'
                    />
                  </div>
                </div>

                <div className={styles.fcci_form}>
                  <div className={styles.ff_form}>
                    <label htmlFor='email'>Email Address</label>
                    <Field
                      className={styles.input}
                      type='email'
                      id='email'
                      name='email'
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='error'
                    />
                  </div>
                  <div className={styles.ff_form}>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='phoneNumber'
                      name='phoneNumber'
                    />
                    <ErrorMessage
                      name='phoneNumber'
                      component='div'
                      className='error'
                    />
                  </div>
                </div>
              </div>
              <hr className={styles.ad_hr} />

              <div className={styles.fc_customerInfo1}>
                <h2>Customer Address</h2>
                <p>Shipping address information</p>

                <div className={styles.fcci_form}>
                  <div className={styles.ff_form}>
                    <label htmlFor='address'>Address</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='address'
                      name='address'
                    />
                    <ErrorMessage
                      name='address'
                      component='div'
                      className='error'
                    />
                  </div>
                  <div className={styles.ff_form}>
                    <label htmlFor='apartment'>Apartment</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='apartment'
                      name='apartment'
                    />
                  </div>
                </div>

                <div className={styles.fcci_form}>
                  <div className={styles.ff_form}>
                    <label htmlFor='city'>City</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='city'
                      name='city'
                    />
                    <ErrorMessage
                      name='city'
                      component='div'
                      className='error'
                    />
                  </div>
                  <div className={styles.fcci_form1}>
                    <div className={styles.ff_form}>
                      <label htmlFor='country'>Country</label>
                      <Field
                        className={styles.select}
                        as='select'
                        id='country'
                        name='country'>
                        <option value=''>Choose</option>
                        <option value='US'>United States</option>
                        <option value='CA'>Canada</option>
                      </Field>
                      <ErrorMessage
                        name='country'
                        component='div'
                        className='error'
                      />
                    </div>
                    <div className={styles.ff_form}>
                      <label htmlFor='postalCode'>Postal Code</label>
                      <Field
                        className={styles.input}
                        type='text'
                        id='postalCode'
                        name='postalCode'
                      />
                      <ErrorMessage
                        name='postalCode'
                        component='div'
                        className='error'
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.fcci_form}>
                  <div className={styles.ff_form}>
                    <label htmlFor='phone'>Phone</label>
                    <Field
                      className={styles.input}
                      type='text'
                      id='phone'
                      name='phone'
                    />
                    <ErrorMessage
                      name='phone'
                      component='div'
                      className='error'
                    />
                  </div>
                </div>
              </div>
              <hr className={styles.ad_hr} />

              <div className={styles.fc_customerInfo2}>
                <h2>Customer Notes</h2>
                <p>Add notes about customer</p>

                <div className={styles.ff_form}>
                  <label htmlFor='notes'>Notes</label>
                  <Field
                    className={styles.textarea}
                    as='textarea'
                    id='notes'
                    name='notes'
                  />
                </div>
              </div>
              <Heading
                btnTitle1={"Cancel"}
                btnTitle2={"Save"}
                isButton={true}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Settings;
