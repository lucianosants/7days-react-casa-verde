import Header from "./components/Header";
import SignUpNewsletter from "./components/SignUpNewsletter";
import GlobalStyles, { Container } from "./styles/GlobalStyles";

function App() {
	return (
		<div className="App">

			<Container>
				<Header />
				<SignUpNewsletter />


			</Container>
			<GlobalStyles />
		</div>
	)
}

export default App;
