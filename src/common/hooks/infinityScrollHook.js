import { onMounted, onBeforeUnmount } from 'vue'
import { debounce } from 'lodash-es'

/**
 * Handles the scroll event and checks if the bottom of the page is reached.
 *
 * @param {Function} callBack - The function to be called when the user reaches the bottom of the page.
 * @param {number} threshold - The threshold for triggering the callback.
 * @returns {void}
 */
function handleScroll(callBack, threshold) {
	const bottomReached =
		window.innerHeight + window.scrollY >=
		document.documentElement.scrollHeight - threshold;

	if (bottomReached) {
		callBack();
	}
}

/**
 * Custom hook to handle infinite scrolling.
 *
 * @param {Function} callBack - The function to be called when the user reaches the bottom of the page.
 * @returns {void}
 *
 * @example
 * const loadMoreItems = () => {
 *     // logic to load more items
 * };
 *
 * useInfinityScrollHook(loadMoreItems);
 */
function useInfinityScrollHook(callBack) {
	const THRESHOLD = 10

	const debouncedHandleScroll = debounce(() => handleScroll(callBack, THRESHOLD), 200);

	onMounted(() => {
		window.addEventListener('scroll', debouncedHandleScroll)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', debouncedHandleScroll)
	})
}

export { useInfinityScrollHook }
