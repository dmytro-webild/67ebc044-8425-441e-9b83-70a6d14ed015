"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Facebook, Instagram, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Your Detail | Detail Pros",  description: "Book your next car detailing appointment with Detail Pros using our easy online schedule management system. View available time slots and secure your spot.",  keywords: ["schedule car detailing, book car detailing, car detailing calendar, auto detailing appointment, detail pros schedule"],
  openGraph: {
    title: "Schedule Your Detail | Detail Pros",    description: "Book your next car detailing appointment with Detail Pros using our easy online schedule management system. View available time slots and secure your spot.",    url: "https://www.detailpros.com/schedule",    siteName: "Detail Pros",    images: [
      {
        url: "http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg",        alt: "Car detailing schedule calendar"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",    title: "Schedule Your Detail | Detail Pros",    description: "Book your next car detailing appointment with Detail Pros using our easy online schedule management system. View available time slots and secure your spot.",    images: [
      "http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg"
    ]
  }
};

export default function SchedulePage() {
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
                { name: "Home", id: "/" },
                { name: "Services", id: "#services" },
                { name: "Why Us", id: "#why-us" },
                { name: "FAQ", id: "#faq" },
                { name: "Appointments", id: "/appointments" },
                { name: "Manage Availability", id: "/blackout-times"}
            ]}
            button={{
                text: "Schedule Now",                href: "/schedule"}}
            brandName="Detail Pros"
            />
        </div>

        <div id="schedule-system" data-section="schedule-system" className="min-h-screen py-20 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Schedule Your Detailing</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Here you will find our interactive calendar to view available time slots and book your appointment.
                Select a date and time that works best for you!
            </p>
            <div className="bg-gray-100 p-8 rounded-lg shadow-xl max-w-4xl w-full">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Calendar View</h2>
                <div className="border border-gray-300 rounded-md p-4 h-96 flex items-center justify-center text-gray-500 text-lg">
                    <p>Interactive Calendar and Time Slot Selector Coming Soon!</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Manage Time Slots</h2>
                    <p className="text-gray-700">Admins will be able to add and remove available time slots here.</p>
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Add New Slot (Admin Only)
                    </button>
                    <button className="mt-4 ml-4 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                        Remove Slot (Admin Only)
                    </button>
                </div>
            </div>
        </div>

        <div id="footer" data-section="footer">
            <FooterCard
            logoText="Detail Pros"
            copyrightText="© 2024 Detail Pros. All rights reserved."
            socialLinks={[
                { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                { icon: Facebook, href: "#", ariaLabel: "Facebook" },
                { icon: Twitter, href: "#", ariaLabel: "Twitter" },
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}