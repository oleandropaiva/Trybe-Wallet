import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { api } from '../actions';

class Form extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <section>
        <form>
          <label htmlFor="currency">
            Valor:
            <input
              type="number"
              data-testid="value-input"
              name="value"
              id="value"
              placeholder="Valor"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              data-testid="description-input"
              name="description"
              id="description"
              placeholder="Descrição"
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select id="currency" name="currency">
              {currencies.map((currency, i) => (
                <option key={ i } value={ currency }>
                  {currency}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="method">
            Formas de Pagamento:
            <select id="method" data-testid="method-input" name="method">
              <option value="credit">Cartão de crédito</option>
              <option value="debit">Cartão de débito</option>
              <option value="cash">Dinheiro</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select id="tag" data-testid="tag-input" name="tag">
              <option value="food">Alimentação</option>
              <option value="transport">Transporte</option>
              <option value="recreation">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(api()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
