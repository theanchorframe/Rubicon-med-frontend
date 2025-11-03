import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Rubicon Medical" className="h-10 w-auto" />
          </Link>
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By accessing or using the services provided by Rubicon Medical, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Services Description</h2>
            <p className="text-foreground/80 leading-relaxed">
              Rubicon Medical provides strategic consulting services for medical technology companies, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Product strategy and positioning</li>
              <li>Market research and validation</li>
              <li>Go-to-market planning</li>
              <li>Clinical evidence strategy</li>
              <li>Commercial launch support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Use of Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Use our services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of our services</li>
              <li>Use our services to transmit any harmful or malicious code</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content, materials, and intellectual property provided through our services remain the property of Rubicon Medical or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Confidentiality</h2>
            <p className="text-foreground/80 leading-relaxed">
              We maintain strict confidentiality of all client information and proprietary materials shared during the course of our engagement. Specific confidentiality terms will be outlined in individual service agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              To the fullest extent permitted by law, Rubicon Medical shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Professional Advice Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed">
              While we strive to provide accurate and reliable consulting services, our advice should not be considered as a substitute for professional legal, financial, or regulatory counsel. Clients should seek appropriate professional advice for specific matters.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Termination</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page with an updated effective date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact us through our website or via the contact information provided on our homepage.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="default" className="gap-2">
              <ArrowLeft size={16} />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
