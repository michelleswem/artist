

import useBasicInput from "../hooks/use-basic-input";
const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.trim().includes('@');

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useBasicInput(isNotEmpty);

  const {
    value: enteredBody,
    hasError: enteredBodyHasError,
    isValid: bodyIsValid,
    valueChangeHandler:bodyChangeHandler,
    inputBlurHandler: bodyBlurHandler,
    reset: bodyInput,
  } = useBasicInput(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useBasicInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && bodyIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const tweetData = {
      name: enteredName,
      email:enteredEmail,
      body:enteredBody 

    }
    props.onTweet(tweetData)
  
    resetNameInput();
    bodyInput();
    resetEmailInput();
  };

  const firstNameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = enteredBodyHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Please Enter Your FirstName</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredBody}
            onChange={bodyChangeHandler}
            onBlur={bodyBlurHandler}
          />
          {enteredBodyHasError && (
            <p className="error-text">Please Enter your LastName</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please Enter a Valid Email Address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
