"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import { Settings, LogOut, CalendarDays, LayoutDashboard } from "lucide-react"; // Import necessary icons

export default function AdminDashboardPage() {
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
                name: "Dashboard",                id: "dashboard-overview" // Scrolls to the dashboard content section
              },
              {
                name: "Appointments",                id: "appointments-list" // Scrolls to the appointments section
              },
              {
                name: "Settings",                id: "admin-settings" // Scrolls to the settings section
              }
            ]}
            button={{
              text: "Logout",              href: "#" // Placeholder for logout action
            }}
            brandName="Admin Portal"
          />
        </div>

        <main className="container mx-auto px-4 py-8">
          <div id="dashboard-overview" data-section="dashboard-overview" className="mb-12">
            <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <LayoutDashboard size={32} />
                Dashboard Overview
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Welcome to the administration portal. Here you can manage appointments and settings for Detail Pros.
            </p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md border border-accent/20">
                    <h2 className="text-2xl font-semibold mb-3">Today's Appointments</h2>
                    <p className="text-4xl font-bold text-primary-cta">5</p>
                    <p className="text-foreground/70">Upcoming appointments today</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md border border-accent/20">
                    <h2 className="text-2xl font-semibold mb-3">Total This Week</h2>
                    <p className="text-4xl font-bold text-primary-cta">22</p>
                    <p className="text-foreground/70">Scheduled appointments this week</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md border border-accent/20">
                    <h2 className="text-2xl font-semibold mb-3">New Bookings</h2>
                    <p className="text-4xl font-bold text-primary-cta">2</p>
                    <p className="text-foreground/70">New bookings in the last 24 hours</p>
                </div>
            </section>
          </div>

          <div id="appointments-list" data-section="appointments-list" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CalendarDays size={28} />
                Scheduled Detailing Appointments
            </h2>
            <div className="bg-card p-6 rounded-lg shadow-md border border-accent/20">
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-2 border-b border-accent/10 last:border-b-0">
                  <div>
                    <p className="font-semibold text-lg">John Doe - Honda Civic</p>
                    <p className="text-foreground/70 text-sm">Tomorrow, 10:00 AM - Gold Package</p>
                  </div>
                  <button className="bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-foreground px-4 py-2 rounded-md transition-colors">View Details</button>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-accent/10 last:border-b-0">
                  <div>
                    <p className="font-semibold text-lg">Jane Smith - Ford F-150</p>
                    <p className="text-foreground/70 text-sm">Friday, 02:00 PM - Silver Package</p>
                  </div>
                  <button className="bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-foreground px-4 py-2 rounded-md transition-colors">View Details</button>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-accent/10 last:border-b-0">
                  <div>
                    <p className="font-semibold text-lg">Peter Jones - Tesla Model 3</p>
                    <p className="text-foreground/70 text-sm">Next Monday, 09:00 AM - Bronze Package</p>
                  </div>
                  <button className="bg-primary-cta hover:bg-primary-cta/90 text-primary-cta-foreground px-4 py-2 rounded-md transition-colors">View Details</button>
                </li>
              </ul>
              <p className="text-center text-foreground/60 mt-6">More appointments available in the full list.</p>
            </div>
          </div>

          <div id="admin-settings" data-section="admin-settings">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Settings size={28} />
                Admin Settings
            </h2>
            <div className="bg-card p-6 rounded-lg shadow-md border border-accent/20">
              <p className="text-foreground/80">Settings will be managed here.</p>
              <button className="bg-secondary-cta hover:bg-secondary-cta/90 text-secondary-cta-foreground px-4 py-2 rounded-md mt-4 transition-colors">Edit Profile</button>
            </div>
          </div>
        </main>
      </ReactLenis>
    </ThemeProvider>
  );
}