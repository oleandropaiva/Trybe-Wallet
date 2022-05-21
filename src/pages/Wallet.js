import React from 'react';
import Header from './Header';
import Form from './Form';

class Wallet extends React.Component {
  render() {
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
        </table>
      </section>
    );
  }
}

export default Wallet;
