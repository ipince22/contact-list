//import { prependOnceListener } from "cluster";
import PropTypes from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactObj: [
				{
					agenda_slug: "ipince",
					full_name: "",
					email: "",
					phone: "",
					address: ""
				}
			]
			//Your data structures, A.K.A Entities
		},
		actions: {
			NewContact: Objcontact => {
				console.log("input", Objcontact);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(Objcontact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log("output", data);
						alert("New Contact Add, OK!");
						// props.history.push("/Contacts")
					})
					.catch(error => console.error("Error:", error));
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
