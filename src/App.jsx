import React, { useState } from "react";
import { Search } from "lucide-react";

function App() {
	const [search, setSearch] = useState("");

	const dataItens = [
		"Valéria",
		"Talita",
		"Altair",
		"Izaltina",
		"Emanoel",
		"Evandro",
		"Vanderley",
	];

	const filteRedItens = dataItens.filter((item) =>
		item.toLowerCase().includes(search.toLowerCase()),
	);

	console.log(filteRedItens);

	return (
		<div className="w-[90%] mx-auto flex justify-center">
			<div className="flex justify-center flex-col gap-2">
				<h1 className=" text-2xl">Search parents</h1>
				<section className="p-[2rem] text-[#222222] bg-[#e0dddd] flex items-center">
					<Search height={15} />
					<input
						type="input"
						placeholder="Nome do parente..."
						onChange={(e) => setSearch(e.target.value)}
					/>
				</section>
				{search.length
					? filteRedItens.map((item, index) => (
							<section className="mt-[2rem]" key={index}>
								<p>{item}</p>
							</section>
						))
					: dataItens.map((e, index) => <p key={index}>{e}</p>)}
			</div>
		</div>
	);
}

export default App;
