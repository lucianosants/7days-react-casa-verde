import Header from "./components/Header";
import SignUpNewsletter from "./components/SignUpNewsletter";
import GlobalStyles, { Container } from "./styles/GlobalStyles";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Container>
				<Header />
				<main>
					<SignUpNewsletter />
				</main>
			</Container>
		</div>
	)
};

export default App;
