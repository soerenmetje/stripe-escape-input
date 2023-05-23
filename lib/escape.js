/**
 * Escape user input that is used in Stripe search query to prevent injections.
 *
 * @param input {string} user input
 * @returns {string} escaped user input
 */
function escapeInput(input) {
    return input.replaceAll("\\", "\\\\")
        .replaceAll('"', '\\"')
        .replaceAll("'", "\\'")
}

exports = module.exports = escapeInput
exports.escapeInput = escapeInput