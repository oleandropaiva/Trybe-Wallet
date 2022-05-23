export const SAVE_EMAIL = 'SAVE_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const addEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export function api() {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      const currencies = Object.keys(data).filter((currency) => currency !== 'USDT');
      dispatch(getCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

export const saveExpenses = (expense, currencies) => ({
  type: SAVE_EXPENSES,
  expense,
  currencies,
});

export function apiCall(currency) {
  return async (dispatch) => {
    try {
      const linkApi = await fetch('https://economia.awesomeapi.com.br/json/all');
      const callCoins = await linkApi.json();
      dispatch(saveExpenses(currency, callCoins));
    } catch (error) {
      console.log(error);
    }
  };
}
