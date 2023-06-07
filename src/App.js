import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import logo from "./Images/Logo.svg";

function App() {
  return (
    <>
      <head>
        <meta name="description" content="Little Lemon greek restaurant" />
        <meta name="og:title" content="Little Lemon" />
        <meta name="og:description" content="Little Lemon greek restaurant" />
        <meta name="og:image" content={logo} />
      </head>
      <body>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </body>
    </>
  );
}

export default App;
