import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import MyUrls from "./pages/MyUrls";
// import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
// import Analytics from "./pages/Analytics";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
// import LearnMore from "./pages/LearnMore";

// import { motion } from "framer-motion";

function App() {
  return (
    <main className="">
      <Navbar />

      <Layout className="red-500">
        <MyUrls />
        {/* <Features /> */}
        <Pricing />
        {/* <Analytics /> */}
        <Faq />
        <Footer /> 
      </Layout>
    </main>
  );
}

export default App;
