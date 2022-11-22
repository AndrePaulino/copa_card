let isIgnite = true;

function changeCard(event) {
	const card = event.currentTarget;
	const bgImage = isIgnite ? "explorer" : "ignite";

	isIgnite = !isIgnite;

	card.style.background = `url(./assets/bg-${bgImage}.svg)`;
}
