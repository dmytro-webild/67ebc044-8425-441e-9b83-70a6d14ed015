"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import { Award, Facebook, Instagram, Shield, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="medium"
        background="circleGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Why Us",          id: "#why-us"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Appointments",          id: "/appointments"},
        {
          name: "Manage Availability",          id: "/blackout-times"}
      ]}
      button={{
        text: "Schedule Now",        href: "/schedule"}}
      brandName="Detail Pros"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Upper Valley Detailing"
      titleClassName="font-bold"
      description="We are two high school freshmen with 2 years of experience and a commitment to meticulous detailing. Your satisfaction is always guaranteed."
      testimonials={[]}
      buttons={[
        {
          text: "View Services",          href: "#services"},
        {
          text: "Book Now",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg"
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "We’re two young high school freshmen who take pride in delivering top-quality detailing with a personal touch. What sets us apart isn’t just our attention to detail—it’s the way we treat every client with honesty, respect, and care. We believe that great service starts with trust, which is why we never ask for payment until you’re completely satisfied with the results. Even at a young age, we’ve built a reputation for being reliable, hardworking, and genuinely passionate about what we do. Every car we work on gets our full effort, as if it were our own. We enjoy transforming vehicles and seeing the difference a clean, polished finish can make—not just for the car, but for its owner too. Our goal is simple: to provide a professional-level clean while building real connections with our customers. We’re always learning, improving, and pushing ourselves to be better with every job. When you choose us, you’re not just getting a service—you’re supporting two motivated students who care deeply about doing things the right way."},
      ]}
      headingClassName="text-sm text-foreground/80 leading-relaxed max-w-full"
      containerClassName="max-w-md mx-auto p-4"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardThree
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "interior-detail",          title: "Precision Interior Detailing",          description: "From vacuuming every crumb to polishing surfaces and conditioning leather, we ensure your car's interior feels fresh and pristine.",          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-red-luxury-sport-car_181624-25467.jpg"},
        {
          id: "exterior-wash-wax",          title: "Spotless Exterior Wash & Wax",          description: "Our exterior service includes a thorough wash, paint decontamination, wheel cleaning, tire dressing, and a durable wax for lasting shine and protection.",          imageSrc: "http://img.b2bpic.net/free-photo/car-polishing-process-washing_23-2149547517.jpg"},
      ]}
      title="Our Promise: Meticulous Care & Guaranteed Satisfaction"
      description="We don't just clean cars; we restore them. Our dedicated student team adheres to a strict detailing regimen, ensuring every crevice and surface shines with perfection. Your satisfaction is our top priority, and we stand by the quality of our work."
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      className="py-12 md:py-16"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "standard",          badge: "STANDARD DETAIL",          badgeIcon: Sparkles,
          price: "Starting at $129",          subtitle: "Best for regular maintenance.",          buttons: [
            {
              text: "Book Standard",              href: "#contact"
            },
          ],
          features: [
            "Full interior and exterior clean",            "Vacuum, wipe-down, windows, wash",            "Light dirt and salt removal",            "Price may be adjusted for extra large or exceptionally dirty vehicles."
          ],
        },
        {
          id: "enhanced",          badge: "ENHANCED DETAIL",          badgeIcon: Shield,
          price: "Starting at $199",          subtitle: "Most popular, best value for most vehicles.",          buttons: [
            {
              text: "Book Enhanced",              href: "#contact"
            },
          ],
          features: [
            "Everything in Standard",            "Deeper interior cleaning (seats, carpets, buildup, and grime)",            "More detailed exterior finish and shine",            "Price may be adjusted for extra large or exceptionally dirty vehicles."
          ],
        },
        {
          id: "deep",          badge: "DEEP DETAIL",          badgeIcon: Award,
          price: "Starting at $249",          subtitle: "Best for heavily used or very dirty cars.",          buttons: [
            {
              text: "Book Deep",              href: "#contact"
            },
          ],
          features: [
            "Everything in Enhanced",            "Heavy stain removal + deep extraction",            "Full interior reset + high detailed finish",            "Price may be adjusted for extra large or exceptionally dirty vehicles."
          ],
        },
      ]}
      title="Flexible Tiers for Every Need"
      description="Choose from our Standard, Enhanced, or Deep packages, designed to give your car the perfect level of care. All tiers include our signature attention to detail and satisfaction guarantee."
    />
  </div>


  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How do I schedule a detailing service?",          content: "You can schedule a service by filling out the form in our 'Contact Us' section or by clicking the 'Schedule Now' button at the top of the page. We'll get back to you to confirm your appointment and details."},
        {
          id: "2",          title: "What payment methods do you accept?",          content: "We accept major credit cards, debit cards, and secure online payments. Payment is due upon completion of the service."},
        {
          id: "3",          title: "Are your services eco-friendly?",          content: "We strive to use environmentally friendly products and practices whenever possible, ensuring a high-quality clean with minimal environmental impact."},
        {
          id: "4",          title: "What if I'm not satisfied with the service?",          content: "Your satisfaction is 100% guaranteed. If for any reason you're not completely happy, please contact us within 24 hours, and we'll make it right."},
        {
          id: "5",          title: "Can I request a custom detailing package?",          content: "Absolutely! If our Bronze, Silver, or Gold packages don't quite fit your needs, please reach out via the contact form, and we'll create a custom quote for you."},
        {
          id: "6",          title: "How do I know the students are qualified?",          content: "Our students undergo thorough training and are supervised by experienced detailing professionals. We pride ourselves on their dedication and the high standards they uphold."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580539.jpg"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Got Questions? We Have Answers."
      description="Find quick answers to common questions about our services, pricing, and scheduling process. If you can't find what you're looking for, feel free to contact us directly for personalized assistance."
      faqsAnimation="slide-up"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Book Your Detail"
      title="Ready for a Spotless Car?"
      description="Schedule your car detailing service with Detail Pros today! Let us bring the shine back to your vehicle. For custom requests or administrative inquiries, please reach out via this form."
      inputPlaceholder="Enter your email"
      buttonText="Schedule Service"
      termsText="By clicking Schedule Service you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Detail Pros"
      copyrightText="© 2024 Detail Pros. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
        {
          icon: Twitter,
          href: "#",          ariaLabel: "Twitter"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}