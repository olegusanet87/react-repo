import { Product } from "./Product";
import PaymentCard from "./PaymentCard"
import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";
import { Alert } from "./Alert";
//const payment = {
//"id": "1",
//"cardNumber": "1234 5678 9012 3456",
//"cardType": "Visa",
//"cardOwner": "John Doe",
//"date": "2024-01-01",
//"amount": 100,
//"description": "Payment for groceries",
//"isPaid": true
//};


export default function App() {
	return (
		<>
			<PageTitle text="Payments" />
			<PaymentList payments={initialPayments} />
			<Alert variant="info">
				Would you like to browse our recommended products?
			</Alert>
			<Alert variant="error">
				There was an error during your last transaction
			</Alert>
			<Alert variant="success">
				Payment received, thank you for your purchase
			</Alert>
			<Alert variant="warning">
				Please update your profile contact information
			</Alert>
		</>
	);
}
/*
export default function App() {
	return (
		<div>
			<h1>PaymentCard</h1>
			<PaymentCard />


			<h1>Best selling</h1>

			<Product
				name="Tacos With Lime"
				imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
				price={10.99}
			/>
			<Product
				name="Fries and Burger"
				imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
				price={14.29}
			/>
		</div>
	);

*/




/*
const title = "My react app";
const imageURL = "https://img.freepik.com/free-photo/close-up-on-adorable-kitten-indoors_23-2150782423.jpg";
return <div><h1>{ title}</h1>
	<p> Lorem djgfdgldsgls  n gjn gfsjg fh kfgkfjg lkf gf
	</p>
	<img src={imageURL} alt="" />

	
}
*/