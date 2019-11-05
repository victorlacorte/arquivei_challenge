# Initial draft
Whenever the user selects a quantity we need to consult an external endpoint
that will return us the following (note that, in addition to consulting this
endpoint, we need to trigger a Redux Form's onChange event with the Field
(Input) quantity):

1) A price with discount

{
  "keyUnitPrice": <number>,
  "originalTotal": <number>,
  "discountedTotal": <number>,
  "percentageDiscount": <number>
}

2) A price without discount

{
  "keyUnitPrice": <number>,
  "originalTotal": <number>
}

(TODO what happens when it returns nothing at all? Maybe render a snackbar if
that is the case, and if we have time to create this component)

Whenever we receive these values we update our Redux store since these values,
specifically discountedTotal (when present) or originalTotal will be utilized
in the checkout form.

Also, when the user types its CNPJ and credit card info, we need to dispatch
this information, and the order total, to another endpoint.

So we can name a few actions:

const SET_CONSULT_KEYS
const CHECK_PRICE
const COMPLETE_ORDER

Optional, but recommended:

const IS_LOADING (maybe needs a timeout mechanism)
const OPEN_SNACKBAR
const CLOSE_SNACKBAR

# Explain

Project's structure and why index.jsx is an exception
