/**
 * Creates a default configuration object for a Tippy tooltip.
 *
 * @param {string} content - The content to be displayed in the tooltip.
 * @param {number} [maxWidth=500] - The maximum width of the tooltip. Defaults to 500 if not provided.
 * @returns {Object} The configuration object for the Tippy tooltip.
 * @returns {string} returns.content - The content of the tooltip.
 * @returns {string} returns.theme - The theme of the tooltip.
 * @returns {string} returns.placement - The placement of the tooltip.
 * @returns {number} returns.maxWidth - The maximum width of the tooltip.
 */
function getDefaultTippy(content, maxWidth = 500) {
	return {
		content,
		theme: 'default',
		placement: 'bottom',
		maxWidth,
	}
}

export { getDefaultTippy }
