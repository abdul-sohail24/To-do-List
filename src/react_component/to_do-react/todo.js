import React, { useState } from "react";
import "./style.css";

const Todo = () => {
	const [inputData, setInputData] = useState("");
	const [items, setItems] = useState([]);

	//Function for adding Items

	const addItem = () => {
		if (!inputData) {
			alert("Please Fill the Data");
		} else {
			setItems([...items, inputData]);
		}
	};

	return (
		<>
			<div className="main-div">
				<div className="child-div">
					<figure>
						<img src="./images/todo.svg" alt="todologo" />
						<figcaption>Add Your List Here</figcaption>
					</figure>
					<div className="addItems">
						<input
							type="text"
							placeholder="Add Item"
							className="form-control"
							value={inputData}
							onChange={(e) => setInputData(e.target.value)}
						/>
						<i className="fa fa-plus add-btn" onClick={addItem}></i>
					</div>

					<div className="showItems">
						<div className="eachItem">
							<h3>Banana</h3>
							<div className="todo-btn">
								<i className="fas fa-edit add-btn"></i>
								<i className="fas fa-trash-alt add-btn"></i>
							</div>
						</div>
					</div>

					<div className="showItems">
						<button className="btn effect04" data-sm-link-text="Remove All">
							<span> CHECK LIST</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
