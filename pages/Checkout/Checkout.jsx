import React from 'react';
import Router from 'next/router';
import { Field, reduxForm } from 'redux-form';

import Button from 'components/Button';
import Input from 'components/Input';
import PurchaseSummary from 'components/PurchaseSummary';

// Conditional rendering: checkoutSuccess + successModal
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
  } = props;

  function handleSubmit(userInfo) {
    const chargedTotal = !discountedTotal ? total : discountedTotal;

    checkout(chargedTotal, userInfo);
  }

  return (
    <form onSubmit={reduxFormSubmit(handleSubmit)}>
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
        type="number"
        label="CNPJ"
        placeholder="Digite seu CNPJ"
      // validate={[
      //   formValidations.required,
      //   minValue200,
      // ]}
      // TODO normalize CNPJ
      // normalize={(value) => normalizeConsultKeys(value, 1000000)}
      />

      <Field
        component={Input}
        name="creditCardNumber"
        type="number"
        label="Número do cartão de crédito"
        placeholder="Digite o número do seu cartão de crédito"
      />

      {checkoutError && <div>Serviço indisponível. Tente novamente mais tarde!</div>}

      <Button
        onClick={() => {
          Router.back();
        }}
      >
        Voltar
      </Button>

      <Button
        color="success"
        type="submit"
        disabled={pristine || invalid || submitting}
      >
        Finalizar compra
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'checkoutForm',
})(CheckoutForm);
