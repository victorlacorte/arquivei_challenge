import React from 'react';
import Router from 'next/router';
import { Field, reduxForm } from 'redux-form';

import Button from 'components/Button';
import Input from 'components/Input';
import PurchaseSummary from 'components/PurchaseSummary';
import Modal, { SuccessModal } from 'components/Modal';
import {
  cnpjValidations,
  creditCardValidations,
  formValidations,
} from 'commons/utils/validations';

const minNumLength3 = formValidations.minNumLength(3);
const minNumLength4 = formValidations.minNumLength(4);
const minNumLength14 = formValidations.minNumLength(14);

/**
 * Conditional rendering: checkoutSuccess + successModal
 * Formatações esperadas: data (mm/aa), cnpj
 * Denormalize before sending or leave it to the backend
 */
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
        <h1>Preencha seus dados para concluir a compra</h1>

        <PurchaseSummary
          consultKeys={keysAmount}
          keyUnitPrice={keyUnitPrice}
          total={total}
          discountedTotal={discountedTotal}
          percentageDiscount={percentageDiscount}
        />

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
          label="Nome (conforme consta no cartão)"
          placeholder="Exemplo: John Doe"
          validate={[
            formValidations.required,
          ]}
        />

        <Field
          component={Input}
          name="creditCardNumber"
          type="number"
          label="Número do cartão de crédito"
          placeholder="Apenas números"
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
          type="number"
          label="CVV"
          placeholder="Apenas números"
          normalize={creditCardValidations.normalizeCVV}
          validate={[
            formValidations.required,
            minNumLength3,
          ]}
        />

        {checkoutError && <div>Serviço indisponível. Tente novamente mais tarde!</div>}

        <Button
          onClick={() => {
            // limpar o contexto antes de voltar
            resetCheckout();
            Router.back();
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
        // limpar o context após submeter
        >
          Finalizar compra
        </Button>
      </form>

      <Modal open={checkoutError} onClose={resetCheckout}>Oi!</Modal>
      <SuccessModal
        open={checkoutSuccess}
        onClose={() => {
          resetCheckout();
          Router.push('/consult');
        }}
        message="Operação concluída com successo!"
      />
    </>
  );
}

export default reduxForm({
  form: 'checkoutForm',
})(CheckoutForm);
