import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Detail Pros | Premium Car Detailing by Students',
  description: 'Experience meticulous car detailing by local high school students. Guaranteed satisfaction, eco-friendly products, and affordable Bronze, Silver, Gold packages. Book your shine today!',
  keywords: ["car detailing, auto detailing, local car wash, student car detailing, mobile car wash, car cleaning service, high school students, eco-friendly car wash, car care"],
  openGraph: {
    "title": "Detail Pros | Premium Car Detailing by Students",
    "description": "Experience meticulous car detailing by local high school students. Guaranteed satisfaction, eco-friendly products, and affordable Bronze, Silver, Gold packages. Book your shine today!",
    "url": "https://www.detailpros.com",
    "siteName": "Detail Pros",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg",
        "alt": "Sparkling clean car after detailing"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Detail Pros | Premium Car Detailing by Students",
    "description": "Experience meticulous car detailing by local high school students. Guaranteed satisfaction, eco-friendly products, and affordable Bronze, Silver, Gold packages. Book your shine today!",
    "images": [
      "http://img.b2bpic.net/free-photo/high-angle-new-car-with-back-door-open_23-2148332892.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
