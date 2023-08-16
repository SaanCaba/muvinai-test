import "./App.css";
import Layout from "./components/Layout";
import PersonalSection from "./components/PersonalSection";
import HistorySection from "./components/HistorySection";
function App() {
  return (
    <Layout>
      <PersonalSection />
      <HistorySection />
    </Layout>
  );
}

export default App;
