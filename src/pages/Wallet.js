import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Form from './Form';

class Wallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        <Header />
        <Form />

        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              const currencyCoins = Object.entries(expense.exchangeRates)
                .find((currency) => currency[0] === expense.currency);
              const currencyName = currencyCoins[1].name.split('/');
              const currencyValue = currencyCoins[1].ask;
              const currencyConverted = expense.value * currencyValue;
              return (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{currencyName[0]}</td>
                  <td>{Number(currencyValue).toFixed(2)}</td>
                  <td>{currencyConverted.toFixed(2)}</td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Wallet);
