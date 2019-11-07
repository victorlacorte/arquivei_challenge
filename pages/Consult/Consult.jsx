import React, { useEffect } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Button from 'components/Button';
import Input from 'components/Input';
import PurchaseSummary from 'components/PurchaseSummary';
import useDebounce from 'commons/utils/useDebounce';
import { formValidations } from 'commons/utils/validations';

import {
  Title,
  Panel,
  PanelDiv,
  ButtonContainer,
} from './styles';

function normalizeConsultKeys(value, maxValue) {
  if (value > maxValue) {
    return maxValue;
  }

  return value;
}

const minValue200 = formValidations.minValue(200);

const defaultConsultKeysInfo = {
  keyUnitPrice: 0,
  total: 0,
  discountedTotal: undefined,
  percentageDiscount: undefined,
};

// TODO tratar serviço indisponível
function Consults(props) {
  const {
    // form props
    keysAmount,
    submitting,
    pristine,
    invalid,

    // props mapped from store state
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
    loading,
    consultError,
    fetchConsultInfo,
  } = props;

  const debouncedKeysAmount = useDebounce(keysAmount, 500);

  function handleSubmit(event) {
    event.preventDefault();

    Router.push('/checkout');
  }

  useEffect(() => {
    if (debouncedKeysAmount && !invalid) {
      fetchConsultInfo(debouncedKeysAmount, defaultConsultKeysInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedKeysAmount]);

  return (
    <form onSubmit={handleSubmit}>
      <Title>
        Adquira Chaves de Consulta
      </Title>

      <Panel>
        <PanelDiv>
          <Field
            name="keysAmount"
            component={Input}
            type="number"
            label="Escolha a quantidade de chaves"
            placeholder="Mínimo de 200 chaves"
            validate={[
              formValidations.required,
              minValue200,
            ]}
            normalize={(value) => normalizeConsultKeys(value, 1000000)}
          />
        </PanelDiv>

        <PanelDiv>
          {debouncedKeysAmount && !invalid
            ? (
              <PurchaseSummary
                consultKeys={keysAmount}
                keyUnitPrice={keyUnitPrice}
                total={total}
                discountedTotal={discountedTotal}
                percentageDiscount={percentageDiscount}
              />
            )
            : (
              <PurchaseSummary
                consultKeys={0}
                keyUnitPrice={0}
                total={0}
              />
            )}
        </PanelDiv>
      </Panel>

      {consultError && <div>Serviço indisponível. Tente novamente mais tarde!</div>}

      <ButtonContainer>
        <Button
          type="submit"
          // disabled={pristine || invalid || submitting || loading || consultError || total === 0}
          // disabled={pristine || invalid || consultError || !total}
          disabled={!total || invalid || submitting || consultError}
        >
          Comprar
        </Button>
      </ButtonContainer>
    </form>
  );
}

const ConsultsForm = reduxForm({
  form: 'consultsForm',
})(Consults);

const selector = formValueSelector('consultsForm');

export default connect((state) => {
  const keysAmount = selector(state, 'keysAmount');

  return {
    keysAmount,
  };
})(ConsultsForm);
