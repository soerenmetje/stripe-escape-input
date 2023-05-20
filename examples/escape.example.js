const escapeInput = require("../lib")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


async function main()  {
    // [Receive request with userInput]

    //const userInput = "124" // usual input
    const userInput = "124' OR created>0 OR status:'active"  // injection

    let subscriptions = await stripe.subscriptions.search({
        query: `metadata['myField']: '${escapeInput(userInput)}'`
    })
    console.log(subscriptions) // all subscriptions ever due to injection

    // [Serve subscriptions to user]
}

main()