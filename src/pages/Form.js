import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { api, apiCall } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: {},
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState(
      {
        [name]: target.value,
      },
      () => {
        const { id, value, description, currency, method, tag } = this.state;
        this.setState({
          expense: {
            id,
            value,
            description,
            currency,
            method,
            tag,
          },
        });
      },
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addExpense } = this.props;
    const { expense, id } = this.state;
    addExpense(expense);
    this.setState({
      id: (id + 1),
      value: 0,
      description: '',
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="currency">
            Valor:
            <input
              type="number"
              value={ value }
              data-testid="value-input"
              name="value"
              id="value"
              placeholder="Valor"
              onChange={ this.handleChange }
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
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((curr, i) => (
                <option key={ i } value={ curr }>
                  {curr}
                </option>
              ))}
            </select>
          </label>

          <label
            htmlFor="method"
          >
            Formas de Pagamento:
            <select
              id="method"
              name="method"
              data-testid="method-input"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Tag:
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            onClick={ this.onSubmit }
          >
            Adicionar Despesa
          </button>
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
  addExpense: (expense) => dispatch(apiCall(expense)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
