# Arquivei Frontend Challenge

## Solution

The proposed solution requires that, whenever a Lite client inputs an amount of
consult keys, an external service returns the total price and possible
discounts. This is necessary since the proposed discount model varies with the
amount of remaining keys:

```javascript
const discountModel = [
  {
    max: 1000,
    price: 0.09,
  },
  {
    max: 1000,
    price: 0.16,
  },
  {
    max: Infinity,
    price: 0.24,
  },
];
```

this data structure would be kept by such external service and, when consulted,
this service would need to authenticate the request and, if a checkout would be
performed within a predetermined amount of time (i.e.  between consulting the
price and providing billing info), the remaining keys with discount would be
altered to all subsequent requests.  If the user did not perform a checkout,
and a timeout was raised, even if a later checkout attempt was performed it
would return an error since the price could then have changed in this time
window and the correct purchase total would need to be verified again.

To achieve such goal a message broker such as [Redis](https://redis.io/) could
be utilized in the backend service, dealing with concurrent price consults and
exchanging [JWT](https://jwt.io/) as a mean to validate the communication
protocol between the client and the broker.

In order to accommodate this solution, the frontend client would require
additional authentication and more information would need to be sent with every
request: as of this current implementation the API is mocked and only a
suggestion is presented as to how each party would communicate.  The API calls
are present on `src/resources/endpoints` and extending them would also require
additions on the
[duck](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)
directories, present on `pages/Checkout` and `pages/Consult`.

## Installation

Open the (Linux) terminal emulator of choice and type:

* `git clone https://github.com/victorlacorte/arquivei_challenge.git && cd arquivei_challenge`

* Create a .env file, for example: `cp .env.example .env`

* Install all dependencies: `npm i`

* `npm run dev` or `docker-compose up`

* Open a browser and go to `localhost:3000`. The application should be running!

## Project structure

[Next.js](https://nextjs.org/) has a few conventions, one of which requires
pages to be on the `pages` directory. There, we will find 3 pages:

* `index`: a simple redirect to the `/consult` page. The first reason behind
  this decision is that, rather than creating a landing or welcome page, we
jump straight into the solution to the proposed problem: a "screen to buy
consults". The other reason is that Arquivei has already deployed the Lite
system, so the new landing page would be unnecessary since it already exists
and is much more complex and beyond the scope of this simple demonstration.

* `consult`: the first page our user iteracts with the system. There, he inputs
  a consulting keys quantity and receives the purchase total, along with the
price discount (if any).

* `checkout`: the page where a checkout is made possible, but note that we
  redirect to `/consult` if the user has not selected an amount of keys to buy.
This is performed by accessing the current value stored in our
[Redux](https://redux.js.org/) store.

* `_app` and `_document`: The first is required since Next.js utilizes
  a custom `App` to initialize pages, and where we inject the Component that
abstracts the page and its props.  Note that we also provide layout Components
such as the Header, Footer and the Theme Provider, which makes the
`src/commons/styles/theme.js` available to all our components.  The latter is
necessary since "Next.js skips the definition of the surrounding document's
markup", and is also where we implement the "wiring" for Server-Side Rendering
with [styled-components](https://www.styled-components.com/), the CSS-in-JS
library of choice for this project.

Another convention is the `public` folder: there we will encounter static
assets such as images, fonts which are referenced by the `_document` and
served to the application on demand, and a `normalize.css` file which
"improves the consistency of different browsers rendering" and makes them "in
line with modern standards".

Aside from these folders we have the `lib`, where we provide Next.js and Redux
integration, along with a Higher-Order Component that gives access of Redux
slices to our connected Components, and the "merging" of the different reducers
from our application.

The `src` directory contains the default theme, which is an approximation of
the [guidelines](https://public.3.basecamp.com/p/6ZtKGQepHiupgVpanxgDWyZg)
given to the present challenge, form validations, the Components (and their
Unit tests) utilized in all pages, and means to perform async calls to an
external (REST) API. In this case, URLs were generated with
[Mocky](https://www.mocky.io/) and, in order to simulate different responses
and HTTP statuses, these URLs need to be manually changed (in practice these
endpoints would refer to real backend services so the frontend application
would only need to consume their response statuses and data).

Aside from these directories, the root one contains Babel, ESLint, Webpack and
other configuration files or scripts.

## The App

Navigation is performed as intuitively as possible: by clicking the Arquivei
logo the user will be served the `/index` page which, in this case, would
simply redirect to `/consult`. Also, since the pages are actually [Redux
Forms](https://redux-form.com/8.2.2/), navigation requires valid form data and
button (which remain disabled until a valid data is provided or expected
response is received) clicks. Speaking of forms, only minimum quantities or
lengths are enforced with error messages.  Maximum ones are normalized so the
user experience is further increased.

The `Main` Component limits screen max-width so we have a consistent and easy
to extend system: theme breakpoints limit content area to 960px so designing
pages becomes feasible (fluid designs don't work well with complex or dense
pages), and responsiveness is achieved with Component's media queries, which
mainly target desktop and mobile screens.

Redux debugging is performed via the [Redux DevTools
Extension](https://github.com/zalmoxisus/redux-devtools-extension) and no
middlewares were added (due to the project's simplicity), but [Redux
Thunk](https://github.com/reduxjs/redux-thunk) would be a good addition in
order to further extend this demo and better accommodate Redux side effects
logic as well as debounce actions more easily (notice the cumbersume but
effective `useDebouce` hook on `src/commons/utils/useDebouce.js`: it exists
since the `/consult` user expectes dynamism between specifying a consult keys
amount and receiving the (mocked) purchase price, but dispatching requests
`onChange` would be a terrible idea since we could easily receive responses out
of order due to inevitable network latency. By debouncing the action, the user
needs to wait a predetermined amount of time before the application may
respond).

## Wrapping up

This was a brief explanation of the decisions and reasonings behind the
proposed solution. Despite its simplicity the project demanded various
technologies and I hope it is sufficient to display my potential as a frontend
developer.  Thanks in advance for this opportunity!

## Appendix

Discount model naive solution/proof of concept and tests:

```javascript
const discounts = [
  {
    max: 1000,
    price: 0.09,
  },
  {
    max: 1000,
    price: 0.16,
  },
  {
    max: Infinity,
    price: 0.24,
  },
];

function price(numberConsults) {
  let total = 0;

  for (let i = 0; i < discounts.length; i += 1) {
    if (numberConsults > discounts[i].max) {
      total += discounts[i].max * discounts[i].price;
      numberConsults -= discounts[i].max;
    } else {
      return total + numberConsults * discounts[i].price;
    }
  }
}

describe('Consult keys discount algorithm', () => {
  it('correctly calculates a purchase price', () => {
    expect(price(0)).toEqual(0);
    expect(price(2)).toEqual(0.18);
    expect(price(1000)).toEqual(90);
    expect(price(1024)).toEqual(93.84);
    expect(price(2500)).toEqual(370);
    expect(price(10000)).toEqual(2170);
  });
});
```

