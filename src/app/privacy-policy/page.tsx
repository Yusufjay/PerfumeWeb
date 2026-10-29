import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Renoux.co",
  description: "Renoux.co Privacy Policy: how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 29, 2026"
      intro="At Renoux.co, your privacy matters to us. This policy explains what information we collect when you visit our website or place an order, and how we use and protect it."
      sections={[
        {
          title: "Information We Collect",
          body: [
            "We may collect your name, phone/WhatsApp number, email address, and shipping address that you voluntarily provide when contacting us or placing an order.",
            "We may also collect non-personal technical data such as device and browser type to improve your browsing experience.",
          ],
        },
        {
          title: "How We Use Your Information",
          body: [
            "Your information is used to process orders, deliver products, respond to inquiries, and send promotional updates when you have agreed to receive them.",
          ],
        },
        {
          title: "Data Protection",
          body: [
            "We apply reasonable security measures to safeguard your data. We will never sell or rent your personal information to third parties.",
          ],
        },
        {
          title: "Third Parties",
          body: [
            "Limited data may be shared with shipping partners and payment providers solely for the purpose of completing your order.",
          ],
        },
        {
          title: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal data at any time by reaching out through our Contact page.",
          ],
        },
        {
          title: "Changes to This Policy",
          body: [
            "We may update this policy from time to time. Any changes will be posted on this page along with the revised date.",
          ],
        },
      ]}
    />
  );
}
