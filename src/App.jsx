// import { Header } from "./header";
// import { ArticleContent } from "./article-content";
// import { Headline } from "./headline";
// import { Sidebar } from "./sidebar";
// import { Navbar } from "./navbar";
// import { Section } from "./section";
// import { Footer } from "./footer";
import { HandleEven } from "./modules/buoi2/handle-even";
import { BindingData } from "./modules/buoi2/binding-data";
import { Style } from "./modules/buoi2/style";
import { InlineStyle } from "./modules/buoi2/style/inline-style";
import { GlobalStyle } from "./modules/buoi2/style/global-style";
import { Module } from "./modules/buoi2/style/module";
import { State } from "./modules/buoi2/style/state";
import { ChangeColor } from "./modules/buoi2/change-color";

function App() {
	return (
		<>
			<ChangeColor />
			<State />
			<InlineStyle />
			<GlobalStyle />
			<Style />
			<HandleEven />
			<Module />
			{/* <Navbar />
			<Header />
			{/* <ArticleContent />
			<Headline />
			<Sidebar /> 
			<Section />
			<Footer /> */}
			<BindingData />
		</>
	);
}

export default App;
