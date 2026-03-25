"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function AppointmentsPage() {
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
              { name: "Home", href: "/" },
              { name: "Services", href: "/#services" },
              { name: "Why Us", href: "/#why-us" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "FAQ", href: "/#faq" },
              { name: "Appointments", href: "/appointments" }
            ]}
            button={{
              text: "Schedule Now",              href: "/#contact"
            }}
            brandName="Detail Pros"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Appointment Management</h1>
          <p className="text-lg md:text-xl text-foreground text-opacity-80 mb-8 max-w-2xl">
            Welcome to your personal appointment dashboard. Here you can view details of all scheduled bookings and manage their status.
          </p>
          <div className="bg-card p-8 rounded-xl shadow-xl w-full max-w-4xl border border-border">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Scheduled Appointments</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-background-accent rounded-lg border border-border">
                <div className="text-left mb-4 md:mb-0">
                  <p className="text-lg font-bold text-foreground">John Doe - Gold Package</p>
                  <p className="text-sm text-foreground text-opacity-70">Date: August 15, 2024 | Time: 10:00 AM</p>
                  <p className="text-sm text-foreground text-opacity-70">Vehicle: Tesla Model 3 (Black)</p>
                  <p className="text-sm text-foreground text-opacity-70">Contact: john.doe@example.com | (555) 123-4567</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md">Accept</button>
                  <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md">Reject</button>
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md">Details</button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-background-accent rounded-lg border border-border">
                <div className="text-left mb-4 md:mb-0">
                  <p className="text-lg font-bold text-foreground">Jane Smith - Silver Package</p>
                  <p className="text-sm text-foreground text-opacity-70">Date: August 16, 2024 | Time: 02:00 PM</p>
                  <p className="text-sm text-foreground text-opacity-70">Vehicle: Honda Civic (Silver)</p>
                  <p className="text-sm text-foreground text-opacity-70">Contact: jane.smith@example.com | (555) 987-6543</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md">Accept</button>
                  <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md">Reject</button>
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md">Details</button>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground text-opacity-60 mt-8">For any issues or further assistance, please contact support.</p>
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Detail Pros"
            copyrightText="© 2024 Detail Pros. All rights reserved."
            socialLinks={[
              { icon: Instagram, href: "#", ariaLabel: "Instagram" },
              { icon: Facebook, href: "#", ariaLabel: "Facebook" },
              { icon: Twitter, href: "#", ariaLabel: "Twitter" }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
