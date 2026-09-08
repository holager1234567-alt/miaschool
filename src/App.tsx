import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { AccessibilityPage } from "@/pages/AccessibilityPage";
import { HomePage } from "@/pages/HomePage";
import { PrivacyPage } from "@/pages/PrivacyPage";

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
