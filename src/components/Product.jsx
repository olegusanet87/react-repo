export const Product = ({ name, imgUrl, price }) => {
	return (
		<div>
			<h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480" />
			<p>Price: {price} credits</p>
		</div>
	);
};

/*export const Product = () => {
	const price = 999;
	const imgUrl = "<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>";

	return (
		<>
			<h2>Tacos</h2>
			<img src={imgUrl} alt="Tacos With Lime" width="640" />
			<p>Price: {price} credits</p>
		</>
	);
};*/