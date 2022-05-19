export const SAVE_EMAIL = 'SAVE_EMAIL';

export function addEmail(email) {
  return {
    type: SAVE_EMAIL,
    email,
  };
}
