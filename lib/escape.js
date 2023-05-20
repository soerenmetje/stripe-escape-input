/**
 * Escape user input that is used in Stripe search query to prevent injections.
 *
 * @param input {string} user input
 * @returns {string} escaped user input
 */
function escapeStripeSearchQueryInput(input) {
    return input.replaceAll('"', '\\"').replaceAll("'", "\\'")
}

exports = module.exports = escapeStripeSearchQueryInput
exports.escapeStripeSearchQueryInput = escapeStripeSearchQueryInput