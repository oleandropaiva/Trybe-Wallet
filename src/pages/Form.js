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
          {/* <input
            type="number"
            data-testid="value-input"
          />
          <input
            type='text'
            data-testid="description-input"
          />

          <label htmlFor='Moeda'>
            <select id='Moeda'> */}


          <select>
            <option>Escolha a Moeda</option>
            { currencies.map((currency, i) => (
              <option key={ i } value={ currency }>{currency}</option>
            ))}
          </select>

        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(api()),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
