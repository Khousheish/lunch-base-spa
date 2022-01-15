export const API_ENDPOINTS: Endpoints = {
  auth: {
    root: 'auth',
    signIn: 'sign-in',
  },
};

export interface Endpoints {
  auth: {
    root: string;
    signIn: string;
  };
}
