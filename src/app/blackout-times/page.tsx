"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function BlackoutTimesPage() {
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
                name: "Home",                id: "/"},
              {
                name: "Services",                id: "#services"},
              {
                name: "Why Us",                id: "#why-us"},
              {
                name: "About Us",                id: "#about-student-team"},
              {
                name: "FAQ",                id: "#faq"},
              {
                name: "Appointments",                id: "/appointments"},
              {
                name: "Manage Availability",                id: "/blackout-times"},
              {
                name: "Schedule",                id: "/schedule"}
            ]}
            button={{
              text: "Schedule Now",              href: "/schedule"}}
            brandName="Upper Valley Detail"
          />
        </div>

        <div className="min-h-[60vh] flex flex-col justify-center items-center py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Manage Service Availability</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">Use this interface to block out specific dates and times when services are not available for booking.</p>
          <div className="mt-10 p-6 bg-card rounded-lg shadow-lg max-w-md w-full">
            <p className="text-foreground/70">Blackout time slot management interface will be integrated here.</p>
            {/* Placeholder for actual time slot management UI */}
          </div>
        </div>

        <div id="footer" data-section="footer">
            <FooterCard
            logoText="Upper Valley Detail"
            copyrightText="© 2024 Upper Valley Detail. All rights reserved."
            socialLinks={[
              {
                icon: Instagram,
                href: "#",                ariaLabel: "Instagram"},
              {
                icon: Facebook,
                href: "#",                ariaLabel: "Facebook"},
              {
                icon: Twitter,
                href: "#",                ariaLabel: "Twitter"},
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}