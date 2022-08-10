const regex = {
  name: /[a-zA-z]/,
  password: /^(?=.*[A-Za-z])(?=.*[0-9]).{8,15}$/,
  phoneNumber: /^\+[1-9][0-9]\d{10,14}$/,
  validCPF: /^[0-9]{11}$/,
  validCNPJ: /^[0-9]{14}$/,
  validEVPPix: /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  emailRegex:
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};

export default regex;
