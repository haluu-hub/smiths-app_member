export default {
	isLoggedIn () {
		return appsmith.user.email != null && appsmith.user.email!="anonymousUser";
	}, 
	isMember () {
		return SelectUserId.data.length > 0;
	}
}