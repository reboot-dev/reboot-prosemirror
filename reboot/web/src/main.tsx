import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import './index.css'

const client = new RebootClient("https://dev.localhost.direct:9991");

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RebootClientProvider client={client}>
			<App />
		</RebootClientProvider>
	</StrictMode>,
);
