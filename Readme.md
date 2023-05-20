# Stripe Escape Input

Prevent injections in [Stripe search queries](https://stripe.com/docs/search) by escaping user input.

## Problem

``` javascript
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const userInput = "124' OR created>0 OR status:'active"

let subscriptions = await stripe.subscriptions.search({
    query: `metadata['myField']: '${userInput}'`
})
console.log(subscriptions) // all subscriptions ever due to injection
```

A user input that is directly used in a Stripe search query is vulnerable to injections. 
This can be exploited to gain access to all Stripe objects.
The principle is basically the same as in SQL injections.

## Solution

To prevent injections, we need to escape the user input before using it in a Stripe search query.

``` javascript
const escapeInput = require("@soerenmetje/stripe-escape-input")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const userInput = "124' OR created>0 OR status:'active"

let subscriptions = await stripe.subscriptions.search({
    query: `metadata['myField']: '${escapeInput(userInput)}'`
})
console.log(subscriptions) // 0 subscriptions
```

## Sources
- https://stripe.com/docs/api/subscriptions/search
- https://stripe.com/docs/search#search-syntax