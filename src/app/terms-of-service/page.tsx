import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Renoux.co",
  description: "Terms and conditions for purchasing from and using the Renoux.co website.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="October 29, 2026"
      intro="By accessing our website and purchasing Renoux.co products, you acknowledge that you have read, understood, and agreed to the following terms and conditions."
      sections={[
        {
          title: "Products",
          body: [
            "All Renoux.co products are Extrait de Parfum. Product images are for illustration purposes; actual colors and packaging may vary slightly.",
            "Fragrance longevity may vary depending on skin type, weather, and personal activity.",
          ],
        },
        {
          title: "Pricing & Payment",
          body: [
            "All prices are listed in Indonesian Rupiah (IDR) and are subject to change without prior notice. Promotional prices apply only during the promotion period.",
            "Orders are processed once payment has been confirmed.",
          ],
        },
        {
          title: "Orders & Shipping",
          body: [
            "Orders are placed through the official contacts listed on our Contact page. Shipping costs are borne by the buyer unless stated otherwise.",
            "Estimated delivery time depends on the courier and destination.",
          ],
        },
        {
          title: "Returns & Exchanges",
          body: [
            "Exchanges are only accepted for damaged or incorrect items, accompanied by an unboxing video within 2×24 hours of receipt.",
            "Used products cannot be returned.",
          ],
        },
        {
          title: "Intellectual Property",
          body: [
            "All website content, including logos, product names, images, and text, is the property of Renoux.co and may not be used without written permission.",
          ],
        },
        {
          title: "Changes to These Terms",
          body: [
            "Renoux.co reserves the right to modify these terms at any time. The latest version will always be available on this page.",
          ],
        },
      ]}
    />
  );
}
