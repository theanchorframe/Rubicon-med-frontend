import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Rubicon Medical Marketing & Strategy Consultants Corp." className="h-10 w-auto" />
          </Link>
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleBackToHome}>
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              Rubicon Medical Marketing & Strategy Consultants Corp. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Personal Data: Name, email address, phone number, and company information you provide when contacting us</li>
              <li>Usage Data: Information about how you access and use our website</li>
              <li>Cookies and Tracking Technologies: We use cookies to enhance your experience on our site</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Disclosure of Your Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Business partners with whom we collaborate to provide services</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erase your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-navy">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed">
              If you have questions or concerns about this Privacy Policy, please contact us through our website or via the contact information provided on our homepage.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Button variant="default" className="gap-2" onClick={handleBackToHome}>
            <ArrowLeft size={16} />
            Return to Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
