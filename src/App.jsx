import Header from "./components/Header";
import HowTake from "./components/HowTake";
import Offers from "./components/Offers";
import SignUpNewsletter from "./components/SignUpNewsletter";
import GlobalStyles, { Container } from "./styles/GlobalStyles";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Container>
				<Header />
				<main>
					<section>
						<SignUpNewsletter />
					</section>
					
					<section>
						<HowTake />
					</section>

					<section>
						<Offers />
					</section>
				</main>
			</Container>
		</div>
	)
};

export default App;
