import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";

const Item = (props) => {
	const { task, index, handleDelete, handleEdit } = props;
	const [isEditing, setEditing] = React.useState(false);
	const [text, setText] = React.useState(task.text);

	return (
		<li className="content">
			<span>
				{index + 1}.&nbsp;
				{isEditing ? (
					<input value={text} onChange={(e) => setText(e.target.value)} />
				) : (
					task.text
				)}
			</span>
			{isEditing ? (
				<button onClick={() => handleEdit(task, text)}>Resubmit</button>
			) : (
				<FaPen onClick={() => setEditing(!isEditing)} />
			)}
			<FaTrash onClick={() => handleDelete(task)} />
		</li>
	);
};

export default Item;
