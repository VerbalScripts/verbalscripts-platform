export const UPPERCASE_REGEX = new RegExp(/.*[A-Z]/);
export const NUMBER_REGEX = new RegExp(/.*\d/);
export const LENGTH_REGEX = new RegExp(/.{8,}$/);
export const SPECIAL_CHARS_REGEX = new RegExp(
  /.*[-'/`~!#*$@_%+=.,^&(){}[\]|;:"<>?\\]/,
);

export const EMAIL_REGEX = new RegExp(
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
);

export const PASSWORD_VALID_REGEX = new RegExp(
  `^(?=${[
    LENGTH_REGEX.source,
    UPPERCASE_REGEX.source,
    NUMBER_REGEX.source,
    SPECIAL_CHARS_REGEX.source,
  ].join(')(?=')}).*$`,
);
