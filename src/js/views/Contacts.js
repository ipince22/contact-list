import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

import { Context } from "../store/appContext";

export const Contacts = () => {
	//const { store:{contacts}, actions } = useContext(Context);
	const { store, actions } = useContext(Context);
	const [IdContact, setIdContact] = useState();

	console.log("page contacts.js", store.contacts);
	const [state, setState] = useState({
		showModal: false
	});

	const deleteContact = contactID => {
		setIdContact(contactID);

		setState({
			showModal: true
		});
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center">Contacts List</h1>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				{/* <div id="contacts" className="panel-collapse collapse show" aria-expanded="true"> */}
				{/* <ul className="list-group pull-down" id="contact-list"> */}
				{/* <ContactCard onDelete={() => setState({ showModal: true })} /> */}

				<div>
					{/* <div className=" float-right">
						<button className="btn">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn">
							<i className="fas fa-trash-alt" />
						</button>
                    </div> 
                    <Card item={item} />
                    */}

					{!store.contacts
						? "Loading.."
						: store.contacts.map((item, index) => {
								return (
									<li key={index} className="list-group-item list-group-item-action">
										<div className="row">
											<div className="col">
												<label className="name lead"> {item.full_name} </label>
												<br />
												<i className="fas fa-map-marker-alt text-muted mr-3" />
												<span className="text-muted">{item.address}</span>
												<br />
												<span
													className="fa fa-phone fa-fw text-muted mr-3"
													data-toggle="tooltip"
													title=""
													data-original-title=""
												/>
												<span className="text-muted small">{item.phone}</span>
												<br />
												<span
													className="fa fa-envelope fa-fw text-muted mr-3"
													data-toggle="tooltip"
													data-original-title=""
													title=""
												/>
												<span className="text-muted small text-truncate">{item.email}</span>
											</div>
											<div className="col-2">
												<Link to={"/EditInfo/" + index}>
													<i className="fas fa-user-edit" style={{ cursor: "pointer" }} />
												</Link>
												<i
													onClick={() => deleteContact(item.id)}
													style={{ cursor: "pointer" }}
													className="fas fa-trash-alt ml-2"
												/>
											</div>
										</div>
									</li>
								);
						  })}
				</div>
				{/* </ul> */}
				{/* </div> */}
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} idContact={IdContact} />
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
Contacts.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	item: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
Contacts.defaultProps = {
	onDelete: null
};
