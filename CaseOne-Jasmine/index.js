const capitalizedtext = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Parameter should be sting");
  }
  return input.toUpperCase();
};

module.exports = { capitalizedtext };
