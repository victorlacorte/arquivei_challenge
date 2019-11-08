import React from 'react';
import Router from 'next/router';
import { Field, reduxForm } from 'redux-form';

import Button from 'components/Button';
import Input from 'components/Input';
import PurchaseSummary from 'components/PurchaseSummary';
import { StatusModal } from 'components/Modal';
import {
  cnpjValidations,
  creditCardValidations,
  formValidations,
} from 'commons/utils/validations';

import {
  Title,
  Panel,
  PanelDiv,
  ButtonContainer,
} from './styles';

const minNumLength3 = formValidations.minNumLength(3);
const minNumLength4 = formValidations.minNumLength(4);
const minNumLength14 = formValidations.minNumLength(14);

function CheckoutForm(props) {
  const {
    // Form props
    submitting,
    pristine,
    invalid,
    handleSubmit: reduxFormSubmit,

    // Mapped props
    loading,
    checkoutError,
    checkoutSuccess,
    keysAmount,
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
    checkout,
    resetCheckout,
  } = props;

  function handleSubmit(userInfo) {
    const chargedTotal = !discountedTotal ? total : discountedTotal;

    checkout(chargedTotal, userInfo);
  }

  return (
    <>
      <form onSubmit={reduxFormSubmit(handleSubmit)}>
        <Title>Preencha seus dados para concluir a compra</Title>

        <Panel>
          <PanelDiv>
            <Field
              component={Input}
              name="cnpj"
              type="text"
              label="CNPJ"
              placeholder="Apenas números"
              normalize={cnpjValidations.normalizeCNPJ}
              validate={[
                formValidations.required,
                minNumLength14,
              ]}
            />

            <Field
              component={Input}
              name="creditCardHolderName"
              type="text"
              label="Nome (conforme consta no cartão de crédito)"
              placeholder="Exemplo: John Doe"
              validate={[
                formValidations.required,
              ]}
            />

            <Field
              component={Input}
              name="creditCardNumber"
              type="text"
              label="Número do cartão de crédito"
              placeholder="Apenas números"
              normalize={formValidations.normalizeAsNumber}
              validate={[
                formValidations.required,
              ]}
            />

            <Field
              component={Input}
              name="creditCardExpirationDate"
              type="text"
              label="Vencimento do cartão (mm/aa)"
              placeholder="Apenas números"
              normalize={creditCardValidations.normalizeExpirationDate}
              validate={[
                formValidations.required,
                minNumLength4,
              ]}
            />

            <Field
              component={Input}
              name="creditCardCVV"
              type="text"
              label="CVV"
              placeholder="Apenas números"
              normalize={creditCardValidations.normalizeCVV}
              validate={[
                formValidations.required,
                minNumLength3,
              ]}
            />
          </PanelDiv>
          <PanelDiv>
            <PurchaseSummary
              consultKeys={keysAmount}
              keyUnitPrice={keyUnitPrice}
              total={total}
              discountedTotal={discountedTotal}
              percentageDiscount={percentageDiscount}
            />
          </PanelDiv>
        </Panel>

        <ButtonContainer>
          <Button
            onClick={() => {
              // limpar o contexto antes de voltar
              resetCheckout();
              Router.push('/consult');
            }}
          >
            Voltar
          </Button>

          <Button
            color="error"
            onClick={() => {
              // limpar o contexto antes de voltar
              resetCheckout();
            }}
          >
            Reset
          </Button>

          <Button
            color="success"
            type="submit"
            disabled={pristine || invalid || submitting}
          >
            Finalizar compra
          </Button>
        </ButtonContainer>
      </form>

      <StatusModal
        variant="error"
        open={checkoutError}
        message="Não foi possível processar o pagamento. Tente novamente!"
        onClose={resetCheckout}
      />

      <StatusModal
        variant="success"
        open={checkoutSuccess}
        message="Operação concluída com successo!"
        onClose={() => {
          resetCheckout();
          Router.push('/consult');
        }}
      />
    </>
  );
}

export default reduxForm({
  form: 'checkoutForm',
})(CheckoutForm);
