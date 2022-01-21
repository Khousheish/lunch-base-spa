interface Regex {
  userName: RegExp;
  password: RegExp;
}

export const REGEX: Regex = {
  userName: new RegExp('^[a-z0-9]+$'),
  password: new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}'),
};
