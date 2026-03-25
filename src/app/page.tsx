"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Facebook, Instagram, Shield, Sparkles, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
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
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      button={{
        text: "Schedule Now",
        href: "#contact",
      }}
      brandName="Detail Pros"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Shine Brighter with Detail Pros - Your Car, Our Passion."
      description="Experience top-tier car detailing by dedicated local high school students. We guarantee meticulous attention to every detail, ensuring your vehicle looks its absolute best, every time."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@HappyDriver",
          testimonial: "My car hasn't looked this good since I bought it! The students were incredibly thorough and professional. Highly recommend Detail Pros!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12690.jpg?_wi=1",
        },
        {
          name: "Mark T.",
          handle: "@CleanRide",
          testimonial: "The attention to detail was outstanding. They really took their time and made sure every inch of my car was spotless. Fantastic work!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-working-as-nurse_23-2151061623.jpg?_wi=1",
        },
        {
          name: "Emily R.",
          handle: "@ShinyCar",
          testimonial: "So impressed by the dedication of these students. My car feels brand new, and the price was unbeatable for the quality. Will definitely be a repeat customer.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=1",
        },
        {
          name: "David K.",
          handle: "@LocalSupporter",
          testimonial: "It's great to support local students doing such high-quality work. They were polite, efficient, and my car looks showroom ready. Excellent service!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg?_wi=1",
        },
        {
          name: "Jessica L.",
          handle: "@DetailFan",
          testimonial: "From the wheels to the interior, every part of my car was gleaming. Their 'guaranteed satisfaction' is no joke - they truly deliver!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/headshot-attractive-young-redhead-female-with-hair-bun-sitting-cafe-having-surprised-facial-expression_273609-9261.jpg?_wi=1",
        },
      ]}
      buttons={[
        {
          text: "View Services",
          href: "#services",
        },
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-young-male-grey-t-shirt-posing-smiling_140725-27983.jpg",
          alt: "Student avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-young-woman-smiling_74855-2579.jpg",
          alt: "Student avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-man-sitting-mat-outdoors_23-2147562273.jpg",
          alt: "Student avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-african-young-lady-walking-outdoors_171337-15134.jpg",
          alt: "Student avatar",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-schoolgirl-carries-rucksack-notepads-digital-tablet-looks-into-distance-with-happy-expression-walks-campus-daytime-female-student-returns-from-university-education-concept_273609-59160.jpg",
          alt: "Student avatar",
        },
      ]}
      avatarText="Meet the Team!"
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg"
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "About Our Dedicated Student Team",
        },
      ]}
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Precision Interior Detailing",
          description: "From vacuuming every crumb to polishing surfaces and conditioning leather, we ensure your car's interior feels fresh and pristine.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-red-luxury-sport-car_181624-25467.jpg",
        },
        {
          id: 2,
          title: "Spotless Exterior Wash & Wax",
          description: "Our exterior service includes a thorough wash, paint decontamination, wheel cleaning, tire dressing, and a durable wax for lasting shine and protection.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-dusting_23-2149172885.jpg",
        },
        {
          id: 3,
          title: "Engine Bay Revitalization",
          description: "We carefully clean and dress your engine bay, removing grime and leaving it looking as good as new, enhancing your vehicle's overall presentation.",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-examining-car-engine_1170-1357.jpg",
        },
      ]}
      title="Our Promise: Meticulous Care & Guaranteed Satisfaction"
      description="We don't just clean cars; we restore them. Our dedicated student team adheres to a strict detailing regimen, ensuring every crevice and surface shines with perfection. Your satisfaction is our top priority, and we stand by the quality of our work."
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "bronze",
          badge: "Basic Brilliance",
          badgeIcon: Sparkles,
          price: "$99",
          subtitle: "Essential clean, inside and out.",
          buttons: [
            {
              text: "Book Bronze",
              href: "#contact",
            },
          ],
          features: [
            "Exterior wash & dry",
            "Vacuum interior",
            "Window cleaning",
            "Tire dressing",
            "Wipe down surfaces",
          ],
        },
        {
          id: "silver",
          badge: "Enhanced Clean",
          badgeIcon: Shield,
          price: "$149",
          subtitle: "Deep clean with added protection.",
          buttons: [
            {
              text: "Book Silver",
              href: "#contact",
            },
          ],
          features: [
            "Bronze package features",
            "Hand wax application",
            "Interior detail & polish",
            "Door jam cleaning",
            "Air freshener treatment",
          ],
        },
        {
          id: "gold",
          badge: "Ultimate Perfection",
          badgeIcon: Award,
          price: "$249",
          subtitle: "Full rejuvenation, top to bottom.",
          buttons: [
            {
              text: "Book Gold",
              href: "#contact",
            },
          ],
          features: [
            "Silver package features",
            "Clay bar treatment",
            "Leather conditioning",
            "Engine bay detail",
            "Fabric stain removal",
          ],
        },
      ]}
      title="Flexible Tiers for Every Need"
      description="Choose from our Bronze, Silver, or Gold packages, designed to give your car the perfect level of care. All tiers include our signature attention to detail and satisfaction guarantee."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "Local Resident",
          testimonial: "My car hasn't looked this good since I bought it! The students were incredibly thorough and professional. Highly recommend Detail Pros for their amazing work!",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12690.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Mark T.",
          handle: "Car Enthusiast",
          testimonial: "The attention to detail was outstanding. They really took their time and made sure every inch of my car was spotless. Fantastic work by a great team!",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-working-as-nurse_23-2151061623.jpg?_wi=2",
        },
        {
          id: "3",
          name: "Emily R.",
          handle: "Busy Professional",
          testimonial: "So impressed by the dedication of these students. My car feels brand new, and the price was unbeatable for the quality. Will definitely be a repeat customer!",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-overjoyed-woman-rejoicing-her-success_74855-3513.jpg?_wi=2",
        },
        {
          id: "4",
          name: "David K.",
          handle: "Community Member",
          testimonial: "It's great to support local students doing such high-quality work. They were polite, efficient, and my car looks showroom ready. Excellent service and fantastic initiative!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-teenage-girl-sitting-cafe_1262-3048.jpg?_wi=2",
        },
        {
          id: "5",
          name: "Jessica L.",
          handle: "First-time Client",
          testimonial: "From the wheels to the interior, every part of my car was gleaming. Their 'guaranteed satisfaction' is no joke - they truly deliver on their promise. A truly professional detail!",
          imageSrc: "http://img.b2bpic.net/free-photo/headshot-attractive-young-redhead-female-with-hair-bun-sitting-cafe-having-surprised-facial-expression_273609-9261.jpg?_wi=2",
        },
      ]}
      title="Hear From Our Happy Customers"
      description="Our clients consistently praise our attention to detail, professional service, and the incredible results we deliver. Read what they have to say about the Detail Pros experience and our dedicated student team."
      speed={40}
      topMarqueeDirection="left"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How do I schedule a detailing service?",
          content: "You can schedule a service by filling out the form in our 'Contact Us' section or by clicking the 'Schedule Now' button at the top of the page. We'll get back to you to confirm your appointment and details.",
        },
        {
          id: "2",
          title: "What payment methods do you accept?",
          content: "We accept major credit cards, debit cards, and secure online payments. Payment is due upon completion of the service.",
        },
        {
          id: "3",
          title: "Are your services eco-friendly?",
          content: "We strive to use environmentally friendly products and practices whenever possible, ensuring a high-quality clean with minimal environmental impact.",
        },
        {
          id: "4",
          title: "What if I'm not satisfied with the service?",
          content: "Your satisfaction is 100% guaranteed. If for any reason you're not completely happy, please contact us within 24 hours, and we'll make it right.",
        },
        {
          id: "5",
          title: "Can I request a custom detailing package?",
          content: "Absolutely! If our Bronze, Silver, or Gold packages don't quite fit your needs, please reach out via the contact form, and we'll create a custom quote for you.",
        },
        {
          id: "6",
          title: "How do I know the students are qualified?",
          content: "Our students undergo thorough training and are supervised by experienced detailing professionals. We pride ourselves on their dedication and the high standards they uphold.",
        },
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
        variant: "plain",
      }}
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
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
