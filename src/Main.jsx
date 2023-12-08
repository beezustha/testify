import React, { useState } from "react";

const Main = () => {
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "John Doe",
			email: "john.doe@example.com",
			contact: "123-456-7890",
		},
		{
			id: 2,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			contact: null,
		},
		{
			id: 3,
			name: "Bob Johnson",
			email: "bob.johnson@example.com",
			contact: "987-654-3210",
		},
		{
			id: 4,
			name: "Alice Williams",
			email: "alice.williams@example.com",
			contact: null,
		},
		{
			id: 5,
			name: "Charlie Brown",
			email: "charlie.brown@example.com",
			contact: "555-123-4567",
		},
	]);

	const changeName = (user, index) => {
		console.log(user);
		console.log(index);
		const newArr = users;
		newArr[index].name = "Hero";
		setUsers(newArr);
		// const newArr = { ...users };
		// newArr[index].name = "Hero";
		// setUsers(newArr);
	};

	// passing the parameter from the mapped contact section with parameter (user)
	const checkPhone = (user) => {
		return user.contact ? (
			user.contact
		) : (
			<div className="bg-danger p-1">
				<p>Not Available</p>
			</div>
		);
	};
	// function to return and render all the mapped data
	const getUserRow = () => {
		return users.map((user, index) => {
			return (
				<tr key={index}>
					<td>{user.id}</td>
					<td>{user.name}</td>
					<td>{user.email}</td>
					<td>{checkPhone(user)}</td>
					<td>
						<button
							className="btn btn-success"
							onClick={() => changeName(user, index)}
						>
							Change Name
						</button>
					</td>
				</tr>
			);
		});
	};
	return (
		<>
			<div>
				<table class="table table-striped">
					<thead>
						<tr>
							<th>S.N</th>
							<th>Name</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Change Role</th>
						</tr>
					</thead>
					{/* getUserRow function is call to display all the mapped data */}
					<tbody>{getUserRow()}</tbody>
				</table>
			</div>
		</>
	);
};

export default Main;
