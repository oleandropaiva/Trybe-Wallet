import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, expense) => {
      const currencyCoins = Object.entries(expense.exchangeRates)
        .find((currency) => currency[0] === expense.currency);
      return acc + (expense.value * currencyCoins[1].ask);
    }, 0);
    return (
      <div>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{total.toFixed(2)}</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  email: state.user.email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
export default connect(mapStateToProps)(Header);
