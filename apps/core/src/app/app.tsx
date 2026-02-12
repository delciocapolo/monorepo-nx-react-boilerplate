import { GloalProvider } from "@medicare.core.frontend/ui-components";
import { AppProvider } from "./providers/app-context";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <GloalProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </GloalProvider>
    </BrowserRouter>
  );
}
