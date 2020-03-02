const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

const isEmail = email => {
  // eslint-disable-next-line
  const regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regExpression)) return true;
  else return false;
};

exports.formValidation = data => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = "Must not be empty";
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  else if (!isEmail(data.email)) errors.email = "Must be a valid email";
  if (isEmpty(data.interest)) errors.interest = "Please, add the interest";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};
