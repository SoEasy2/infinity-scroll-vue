/**
 * Copies the specified text to the clipboard.
 *
 * @param {string} text - The text to be copied to the clipboard.
 * @returns {void}
 */
function copyInStash(text) {
	const tempInput = document.createElement('input')
	tempInput.value = text
	document.body.appendChild(tempInput)
	tempInput.select()
	document.execCommand('copy')
	document.body.removeChild(tempInput)
}

export { copyInStash }
