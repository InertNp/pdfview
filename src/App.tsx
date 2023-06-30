import { PDFViewer } from "@react-pdf/renderer";
import { MyDocumentEnglish } from "./components/English";
import { MyDocumentNepali } from "./components/Nepali";

// Create styles

function App() {
  return (
    <PDFViewer className="pdf">
      <MyDocumentNepali />
    </PDFViewer>
  );
}

export default App;
