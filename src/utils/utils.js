/**
 * getFormatterDate
 */
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
export const getFormattedDate = (date) =>
	date
		? new Date(date).toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';
