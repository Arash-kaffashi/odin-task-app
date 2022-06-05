import React from "react";
import "./Overview.css";
import Item from "./Item";

const Overview = (props) => {
	const { tasks, handleEdit, handleDelete } = props;
	return (
		<ul className="ulist">
			{tasks.map((task, index) => (
				<Item
					key={task.id}
					task={task}
					index={index}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
			))}
		</ul>
	);
};

export default Overview;
