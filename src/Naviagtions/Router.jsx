import { Route, Routes } from "react-router";
import HomePage from "../Pages/Homepages/Home";
import WalletsConnectionPage from "../Pages/WalletPages/WalletsConnections";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wallet/connect/" element={<WalletsConnectionPage />} />
        </Routes>
    )
}