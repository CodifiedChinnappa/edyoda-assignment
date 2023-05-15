import DOMPurify from "dompurify";
import courses from "../assets/hero-icons/courses.png";
import hours from "../assets/hero-icons/hours.png";
import webinar from "../assets/hero-icons/webinar.png";
import scholarship from "../assets/hero-icons/scholarship.png";
import add from "../assets/hero-icons/add.png";

export const menuItems = [
  {
    title: "Courses",
    subItems: [
      {
        title: "dropdown 1",
      },
      {
        title: "dropdown 2",
      },
    ],
  },
  {
    title: "Programs",
    subItems: [
      {
        title: "dropdown 3",
      },
      {
        title: "dropdown 4",
      },
    ],
  },
];

export const heroData = [
  {
    icon: courses,
    title: DOMPurify.sanitize(
      `<h2 class="h-[32px] text-white font-sans font-normal text-[32px] leading-[32px] tracking-[0.03em]"><span class="font-semibold text-[#0096FF]">100+</span> Job relevant courses</h2>`
    ),
  },
  {
    icon: hours,
    title: DOMPurify.sanitize(
      `<h2 class="h-[32px] text-white font-sans font-normal text-[32px] leading-[32px] tracking-[0.03em]"><span class="font-semibold text-[#0096FF]">20,000+</span> Hours of content</h2>`
    ),
  },
  {
    icon: webinar,
    title: DOMPurify.sanitize(
      `<h2 class="h-[32px] text-white font-sans font-normal text-[32px] leading-[32px] tracking-[0.03em]"><span class="font-semibold text-[#0096FF]">Exclusive</span> webinar access</h2>`
    ),
  },
  {
    icon: scholarship,
    title: DOMPurify.sanitize(
      `<h2 class="h-[32px] text-white font-sans font-normal text-[32px] leading-[32px] tracking-[0.03em]">Scholarship worth <span class="font-semibold text-[#0096FF]">₹94,500</span></h2>`
    ),
  },
  {
    icon: add,
    title: DOMPurify.sanitize(
      `<h2 class="h-[32px] text-white font-sans font-normal text-[32px] leading-[32px] tracking-[0.03em]"><span class="font-semibold text-[#0096FF]">Ad Free</span> learning experience</h2>`
    ),
  },
];

export const subscription = [
  {
    title: "12 Months Subscription",
    perMonth: 8,
    total: 99,
    type: "expired",
    status: false,
  },
  {
    title: "12 Months Subscription",
    perMonth: 15,
    total: 179,
    type: "recommended",
    status: true,
  },
  {
    title: "6 Months Subscription",
    perMonth: 25,
    total: 149,
    type: "no-offer",
    status: true,
  },
  {
    title: "3 Months Subscription",
    perMonth: 33,
    total: 99,
    type: "no-offer",
    status: true,
  },
];
