export default {
	myVar1: [],
	myVar2: {},
	getTommorow() {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);
		return tomorrow;
	},getNextWeek() {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 7);
		return tomorrow;
	},
	today() {
		return new Date().toISOString().split('T')[0]
	},
	getEndOfWeek(date) {
		const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
		const daysUntilEndOfWeek = 0 - dayOfWeek; // Days until Sunday

		var e = new Date(date);

		// Set date to end of the current week
		e.setDate(date.getDate() + daysUntilEndOfWeek);

		return e;
	}, 
	getStartOfWeek(date) {
		const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
		const daysUntilEndOfWeek = 1 - dayOfWeek; // Days until Sunday
		var e = new Date(date);
		// Set date to end of the current week
		e.setDate(date.getDate() + daysUntilEndOfWeek);
		return e;
	}, 
	getStartOfLastWeek(date) {
		const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
		const daysUntilEndOfWeek = -7 + 1 - dayOfWeek; // Days until Sunday
		var e = new Date(date);
		// Set date to end of the current week
		e.setDate(date.getDate() + daysUntilEndOfWeek);
		return e;
	}, 
	getFromDate() {
		return this.getStartOfLastWeek(new Date())
	},  
	getToDate() {
		return this.getEndOfWeek(new Date())
	}
}