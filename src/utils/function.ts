export function capitalizar(str: string) {
	return str.replace(/\s+/g, " ").replace(/\w\S*/g, function (txt: string) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export function slug(str: string) {
	return str
		.toLowerCase()
		.replace(/-/g, " ")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/-/g, "")
		.replace(/\s+/g, " ")
		.replace(/ /g, "-");
}
