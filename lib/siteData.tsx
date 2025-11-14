import HeroAvatar from "@/public/images/niftesty.png";
import BlogImg from "@/public/images/blog-img.jpg";
import BlogImg2x from "@/public/images/blog-img@2x.jpg";
import BlogImgWide from "@/public/images/blog-img-wide.jpg";

import TestimonialAvatar from "@/public/images/testimonial-avatar.jpg";
import Image from "next/image";

import LogoKus from "@/public/customers/kusamarian.webp";
import LogoWagMedia from "@/public/customers/wagmedia-logo.png";
import LogoInk from "@/public/customers/ink.svg";
import LogoPop from "@/public/customers/pop.png";
import LogoHyperbridge from "@/public/customers/hyperbridge.svg";

import PortfolioPolkadotUI from "@/public/projects/polkadot-ui.png";
import PortfolioInk from "@/public/projects/ink.png";
import PortfolioWagMedia from "@/public/projects/wagmedia.png";
import PortfolioDistrict from "@/public/projects/district.png";
import PortfolioEsmalbesserhabenin from "@/public/projects/esmalbesserhabenin.png";
import PortfolioGrayPaperLecture from "@/public/projects/gray-paper.png";
import PortfolioR0GUE from "@/public/projects/r0gue.png";
import Link from "next/link";

import skillRust from "@/public/skills/rust.svg";
import skillFramer from "@/public/skills/framer.svg";
import skillShadcn from "@/public/skills/shadcnui.svg";
import skillTailwind from "@/public/skills/tailwindcss.svg";
import skillReact from "@/public/skills/react.svg";
import skillNext from "@/public/skills/nextdotjs.svg";
import skillFigma from "@/public/skills/figma.svg";

export const headerData = {
  logo: "Niklas Jurij Plessing",
  navlinks: [
    {
      url: "/#about",
      title: "About",
    },
    {
      url: "/#services",
      title: "Services",
    },
    {
      url: "/#portfolio",
      title: "Portfolio",
    },
    {
      url: "/#awards",
      title: "Awards",
    },
    // {
    //   url: "/#testimonial",
    //   title: "Testimonial",
    // },
    // {
    //   url: "/#blog",
    //   title: "Blog",
    // },
    {
      url: "/#contact",
      title: "Contact",
    },
  ],
};

export const aboutData = {
  mainData: {
    name: "I ship outstanding and enjoyable interfaces and apps for web3",
    heroAvatar: HeroAvatar,
    biography: (
      <>
        Fullstack Web3 Developer with a passion for building innovative
        solutions. Strong{" "}
        <span className="bg-themeGradient bg-clip-text text-transparent">
          {" frontend "}
        </span>{" "}
        focus. Master Degree in History of Science, Bachelor in Computer
        Science. Freelancing and building for creatives since 2005. Throwing
        black clay espresso cups at the pottery wheel in my free time.
      </>
    ),
    projectsDone: "35+",
    yearsOfExperience: "15",
    worldwideClients: "25+",
  },
  skills: [
    {
      name: "Web Development",
    },
    {
      name: "UX Design",
    },
    {
      icon: skillReact,
      name: "React",
    },
    {
      icon: skillNext,
      name: "Next.js",
    },
    {
      icon: skillRust,
      name: "Rust",
    },
    {
      name: "CSS Animations",
    },
    {
      name: "ink! smart contracts",
    },

    {
      name: "Shaders",
    },
    {
      name: "Project Management",
    },
    {
      icon: skillFigma,
      name: "Figma",
    },
    {
      icon: skillFramer,
      name: "Framer",
    },
    {
      name: "UX Research",
    },
    {
      icon: skillTailwind,
      name: "Tailwind CSS",
    },
    {
      icon: skillShadcn,
      name: "shadcn",
    },
    {
      name: "Open Source",
    },
  ],
  connect: [
    {
      url: "https://x.com/niftesty",
      bootstrapIcon: "bi bi-twitter-x",
    },
    {
      url: "https://t.me/niftesty",
      bootstrapIcon: "bi bi-telegram",
    },
    {
      url: "https://www.linkedin.com/in/niklas-jurij-plessing-6b0295125",
      bootstrapIcon: "bi bi-linkedin",
    },
  ],
};

export const servicesData = {
  mainData: {
    title: "Services",
    title2: "What I",
    title2Span: "Do",
  },
  services: [
    {
      number: "01",
      title: "Software Development",
      description:
        "I build web3 applications, from creative landing pages to complex dapps.",
    },
    {
      number: "02",
      title: "Software Curation",
      description:
        "I curate software, helping grants and bounties to be successful by selecting the most promising applications.",
    },
    {
      number: "03",
      title: "UX Research",
      description:
        "I research UX, helping teams to understand their users and improve their products and find the best solutions.",
    },
    {
      number: "04",
      title: "Project Management",
      description:
        "I manage projects, spending time with teams to help them achieve their goals.",
    },
  ],
};

export const clientsData = {
  clients: [
    {
      url: "https://parity.io/",
      logo: (
        <svg
          width="127"
          height="32"
          viewBox="0 0 127 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.96567 15.4518L0 12.3061L19.6939 0L21.6596 3.14573L10.959 9.83221H8.33004V11.4749L1.96567 15.4518ZM8.33004 12.8533L2.58508 16.4432L4.55075 19.5889L12.7628 14.4574H8.33004V12.8533ZM14.9687 14.4574L10.104 17.4972H17.1039L21.9686 14.4574H14.9687ZM23.6737 13.3919V9.83221H22.3706L24.8641 8.27408L26.8298 11.4198L23.6737 13.3919ZM9.70201 22.1224H8.33004V18.6057L5.17023 20.5802L7.1359 23.7259L9.70201 22.1224ZM11.9078 22.1224H18.9077L9.72098 27.863L7.75531 24.7172L11.9078 22.1224ZM23.6737 19.1443V17.4972H19.3098L27.4492 12.4111L29.4149 15.5568L23.6737 19.1443ZM21.1136 22.1224H23.6737V20.5227L30.0344 16.5482L32 19.6939L12.3061 32L10.3405 28.8543L21.1136 22.1224ZM20.1647 9.83221H13.1648L22.279 4.13704L24.2447 7.28277L20.1647 9.83221Z"
            fill="#EDECF0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.7967 4.55896C92.3428 4.17844 91.7421 3.98682 90.9946 3.98682C90.2472 3.98682 89.6682 4.17844 89.2048 4.55896C88.7427 4.94085 88.5103 5.44777 88.5103 6.08107C88.5103 6.71437 88.7414 7.24575 89.2048 7.62628C89.6669 8.00816 90.2635 8.19843 90.9946 8.19843C91.7258 8.19843 92.3414 8.00816 92.7967 7.62628C93.2506 7.24575 93.4789 6.72932 93.4789 6.08107C93.4789 5.43282 93.252 4.94085 92.7967 4.55896ZM50.7677 10.3294C49.7375 9.72058 48.5402 9.41615 47.1771 9.41615C45.8942 9.41615 44.7309 9.7165 43.6831 10.3172C42.6366 10.9179 41.7682 11.7659 41.0778 12.8613L41.0412 12.9224V9.78173H36.9763V27.6502H41.0412V20.4732L41.0572 20.5004C41.0677 20.5185 41.0783 20.5366 41.0901 20.5547C41.7873 21.6501 42.6516 22.4981 43.6831 23.0988C44.7132 23.6995 45.8779 23.9998 47.1771 23.9998C48.5402 23.9998 49.7375 23.6954 50.7677 23.0866C51.7978 22.4777 52.6051 21.6256 53.1895 20.5302C53.7738 19.4349 54.066 18.1655 54.066 16.7209C54.066 15.2763 53.7738 13.9825 53.1895 12.8871C52.6051 11.7917 51.7978 10.9396 50.7677 10.3308V10.3294ZM49.4535 18.8614C49.1205 19.4784 48.6626 19.9608 48.0782 20.3101C47.4938 20.6593 46.8197 20.8333 46.0573 20.8333C45.2949 20.8333 44.5719 20.6593 43.891 20.3101C43.2088 19.9608 42.6135 19.4784 42.1012 18.8614C41.5902 18.2444 41.1879 17.5309 40.8957 16.7195C41.1879 15.9082 41.5888 15.1906 42.1012 14.5655C42.6122 13.9403 43.2088 13.4538 43.891 13.1045C44.5733 12.7553 45.2949 12.5813 46.0573 12.5813C46.8197 12.5813 47.4938 12.7553 48.0782 13.1045C48.6626 13.4538 49.1205 13.9403 49.4535 14.5655C49.7865 15.1906 49.9523 15.9082 49.9523 16.7195C49.9523 17.5309 49.7851 18.2457 49.4535 18.8614ZM69.1349 9.78169L69.1347 9.78305H69.1335L69.1349 9.78169ZM69.1347 9.78305L68.7842 12.8476C68.0884 11.7591 67.2186 10.9151 66.1763 10.3185C65.1298 9.71782 63.957 9.41747 62.6591 9.41747C61.3612 9.41747 60.1191 9.72189 59.0808 10.3307C58.0425 10.9396 57.2339 11.7917 56.659 12.8871C56.0828 13.9824 55.7947 15.2599 55.7947 16.7209C55.7947 18.1818 56.0828 19.4348 56.659 20.5302C57.2353 21.6256 58.0425 22.4777 59.0808 23.0865C60.1191 23.6954 61.3123 23.9998 62.6591 23.9998C64.0059 23.9998 65.1298 23.6994 66.1763 23.0987C67.2227 22.4994 68.0898 21.6514 68.7788 20.5574L69.1335 23.6342H73.3451L72.5419 16.7209L73.3451 9.78305H69.1347ZM65.9575 20.31C65.2834 20.6593 64.5658 20.8333 63.8034 20.8333C63.041 20.8333 62.3669 20.6593 61.7825 20.31C61.1982 19.9608 60.7402 19.4783 60.4072 18.8613C60.0743 18.2443 59.9085 17.5308 59.9085 16.7195C59.9085 15.9082 60.0743 15.1906 60.4072 14.5654C60.7402 13.9403 61.1982 13.4538 61.7825 13.1045C62.3669 12.7552 63.0396 12.5813 63.8034 12.5813C64.5672 12.5813 65.2847 12.7552 65.9575 13.1045C66.6302 13.4538 67.2268 13.9403 67.7473 14.5654C68.2664 15.1906 68.6728 15.9082 68.965 16.7195C68.6728 17.5308 68.2664 18.2457 67.7473 18.8613C67.2281 19.4783 66.6315 19.9608 65.9575 20.31ZM82.8406 9.9883C83.5214 9.60778 84.3328 9.41615 85.2746 9.41615V9.41887C85.5831 9.41887 85.8956 9.43926 86.2123 9.48003C86.5289 9.51944 86.8252 9.57244 87.1011 9.63768V13.1426C86.6798 13.0461 86.2571 12.9727 85.8359 12.9238C85.4132 12.8749 85.0164 12.8504 84.6426 12.8504C83.8313 12.8504 83.1001 13.0203 82.4519 13.3614C81.8023 13.7012 81.2913 14.2298 80.9175 14.9433C80.5438 15.6568 80.3576 16.5578 80.3576 17.645V23.6342H76.2928V14.3345L75.4162 9.78173H79.53L80.147 13.5027C80.3957 12.7702 80.7218 12.1179 81.1241 11.5457C81.5862 10.8893 82.1583 10.3702 82.8406 9.9883ZM88.9752 23.6329V9.63494L90.9961 10.025L93.0414 9.63494V23.6329H88.9752ZM104.653 20.7843C103.549 20.7843 102.775 20.5696 102.328 20.1388C101.881 19.7093 101.658 18.9578 101.658 17.8869V12.8476H107.792V9.7803H101.658V6.1286H99.3201L97.5915 10.0969L94.694 11.0469V12.8476H97.5915V18.4712C97.5915 19.5748 97.8062 20.541 98.237 21.3687C98.6665 22.1963 99.3324 22.8419 100.233 23.3039C101.134 23.766 102.306 23.997 103.751 23.997C104.578 23.997 105.381 23.9114 106.16 23.7415C106.939 23.5717 107.564 23.3882 108.034 23.1938V20.0287C107.548 20.2719 107.037 20.4595 106.5 20.5886C105.964 20.7191 105.347 20.7829 104.65 20.7829L104.653 20.7843ZM117.667 20.1959L122.229 9.78173L122.226 9.77901H126.536L119.623 24.2635C119.201 25.1727 118.69 25.9024 118.09 26.4542C117.489 27.006 116.835 27.4042 116.13 27.6474C115.424 27.8907 114.689 28.013 113.927 28.013C113.018 28.013 112.198 27.8989 111.468 27.6719C110.737 27.4449 110.047 27.112 109.399 26.6744V23.7525C110.081 24.1914 110.729 24.5081 111.346 24.7024C111.963 24.8968 112.645 24.9946 113.391 24.9946C114.057 24.9946 114.65 24.8451 115.169 24.5448C115.688 24.2444 116.118 23.7131 116.459 22.9507L116.544 22.7563H114.803L108.693 9.78173H113.173L117.667 20.1959Z"
            fill="#EDECF0"
          />
        </svg>
      ),
    },
    {
      url: "https://web3.foundation/",
      logo: (
        <svg viewBox="0 0 464 197.5" preserveAspectRatio="xMinYMid meet">
          <path
            fill="currentColor"
            d="M98.6 64V49.4c0-5.3-3.2-10-8.1-12.1L0 0v8.1l80.7 33.3c2.8 1.1 2.8 5.1 0 6.2L0 80.9v32.5l48.6-20.1 32 13.2c2.8 1.1 2.8 5.1 0 6.2L0 146v51.5l90.5-37.3c4.9-2 8.1-6.8 8.1-12.1v-33.5c0-5.3-3.2-10-8.1-12.1L58.4 89.3l32.1-13.2c4.9-2 8.1-6.8 8.1-12.1zM170.7 49.4l7.2 28.1 8.1-28.1h7.7l7.6 28.1 7.5-28.1h5.7l-9.7 33.9h-7.2l-8-29.2-8.3 29.2H174l-9.4-33.9h6.1zM223.2 68c.2 2.8.5 4.2 1.4 6 1.7 3.2 5.5 5.3 9.3 5.3 4.6 0 7.6-2.2 8.9-6.5h6.3c-1.6 7.3-7.1 11.4-15.3 11.4-10.2 0-16.7-7-16.7-18 0-10.7 6.5-17.9 16.2-17.9 10.3 0 15.9 7 15.9 19.6h-26zm18.2-10.4c-1.6-2.7-4.8-4.3-8.1-4.3-5.7 0-9.3 3.6-10 10.1H243c-.3-3-.7-4.4-1.6-5.8zM254.9 36.5h5.8v18c2.4-4 5.7-5.9 10.5-5.9 8.4 0 14.4 7.3 14.4 17.8S279.9 84 271.3 84c-4.7 0-7.8-1.9-10.8-6.3v5.6h-5.6V36.5zm5.9 29.7c0 7.4 4.2 12.9 9.7 12.9 5.3 0 8.8-5 8.8-12.7 0-8.1-3.5-13.1-9-13.1s-9.5 5.3-9.5 12.9zM296.1 69c-.1 6 3.7 9.9 9.7 9.9 5.4 0 9.3-3.4 9.3-8.1 0-4.8-3.7-7.7-9.7-7.7-.6 0-1.1 0-2 .1V58h1.5c6.2 0 9.8-2.7 9.8-7.5 0-4.5-3.5-7.4-8.8-7.4-5.7 0-9 3.4-9.2 9.4h-6.2c.4-9.3 6.1-14.7 15.5-14.7 8.7 0 14.8 5 14.8 12.2 0 4.8-3.4 9.2-8 10.4 5.6 1.4 8.6 5.2 8.6 10.8 0 7.6-6.5 13-15.7 13-9.6 0-16.1-6.2-16-15.2h6.4zM171 119.3h-6.1v-4.7h6.1c.1-5.6.2-6.8 1-8.8 1.2-3.2 4.3-4.9 8.9-4.9.9 0 1.7.1 3.2.2v5.2c-1.4-.4-2-.4-2.9-.4-2 0-3.5 1-4 2.8-.4 1.2-.4 2.1-.4 5.8h7.3v4.7h-7.3v29.2H171v-29.1zM218.2 131.5c0 10.9-6.5 18-16.5 18-9.8 0-16.3-7.3-16.3-18.1 0-10.7 6.6-17.8 16.5-17.8 9.7.1 16.3 7.3 16.3 17.9zm-26.5-.3c0 8.3 3.7 13.4 9.9 13.4s10.3-5.1 10.3-13c0-8-4-13.1-10.2-13.1-6.2 0-10 4.9-10 12.7zM246.4 144.5c-1.7 3-5.6 4.8-10.2 4.8-4.7 0-8.4-1.9-10.4-5.2-1.3-2.2-1.7-4.5-1.7-10.2v-19.3h5.8V135c0 6.4 2.4 9.4 7.3 9.4 3.2 0 6-1.5 7.6-4 1-1.6 1.2-3.5 1.2-9.5v-16.2h5.8v33.9h-5.6v-4.1zM264.5 118.7c2.6-3.4 5.7-4.8 10.3-4.8 4.7 0 8.4 1.9 10.4 5.2 1.3 2.2 1.7 4.5 1.7 10.2v19.3H281v-20.4c0-6.5-2.4-9.4-7.3-9.4-3.3 0-6 1.5-7.6 4.1-1 1.6-1.2 3.4-1.2 9.5v16.2H259v-33.9h5.5v4zM317.8 148.5v-5.6c-3 4.5-6.2 6.3-10.8 6.3-8.5 0-14.3-7.1-14.3-17.5 0-10.6 5.9-17.9 14.4-17.9 4.8 0 8.1 1.9 10.5 5.9v-18h5.8v46.7h-5.6zM299 131.7c0 7.7 3.4 12.7 8.8 12.7 5.5 0 9.7-5.5 9.7-12.9 0-7.6-3.9-12.9-9.4-12.9s-9.1 5-9.1 13.1zM352.8 148.5c-.3-1.8-.4-2.4-.6-4.2-2.9 3.5-6.2 5-10.9 5-7.3 0-12.2-4.2-12.2-10.3 0-4.5 2.5-7.6 7.5-9.1 1.6-.5 4.2-1 7.2-1.4 1.9-.3 4.1-.6 7.9-.9-.1-4.4-.3-5.7-1.5-7-1.2-1.3-3.3-2.1-5.9-2.1-5 0-7.5 2.2-7.8 6.8h-6.1c.6-4.2 1.4-6.3 3.6-8.2 2.4-2.2 6.2-3.5 10.3-3.5 5.1 0 9.1 1.7 11.3 5 1.8 2.5 2.1 5 2 15.8-.1 6.8.2 10.4 1.1 14.1h-5.9zm-17.4-9.3c0 3.4 2.6 5.4 6.8 5.4 3.6 0 6.4-1.3 8.1-3.9 1-1.5 1.4-3.5 1.4-7.3v-1.2c-12.1.8-16.3 2.6-16.3 7zM372.9 114.7h7.6v4.7h-7.6v18.1c0 3.8.1 4.5.7 5.3.6.8 2 1.3 3.6 1.3 1.2 0 2.3-.2 3.3-.5v5c-2.7.5-3.7.6-5.1.6-3.1 0-5.8-1.4-7.2-3.7-.8-1.5-1.1-2.9-1.1-6.2v-20h-6.2v-4.7h6.2v-8.2h5.8v8.3zM385.7 101.8h5.8v6.8h-5.8v-6.8zm5.9 12.9v33.9h-5.8v-33.9h5.8zM430.2 131.5c0 10.9-6.5 18-16.5 18-9.8 0-16.3-7.3-16.3-18.1 0-10.7 6.6-17.8 16.5-17.8 9.7.1 16.3 7.3 16.3 17.9zm-26.5-.3c0 8.3 3.7 13.4 9.9 13.4s10.3-5.1 10.3-13c0-8-4-13.1-10.2-13.1-6.2 0-10 4.9-10 12.7zM441.6 118.7c2.6-3.4 5.7-4.8 10.3-4.8 4.7 0 8.4 1.9 10.4 5.2 1.3 2.2 1.7 4.5 1.7 10.2v19.3h-5.8v-20.4c0-6.5-2.4-9.4-7.3-9.4-3.3 0-6 1.5-7.6 4.1-1 1.6-1.2 3.4-1.2 9.5v16.2h-5.8v-33.9h5.5v4z"
          ></path>
        </svg>
      ),
    },
    {
      url: "https://braille.wtf/",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="26"
          viewBox="0 0 96 26"
          fill="none"
        >
          <path
            d="M 0 25.685 L 11.5 25.685 C 13.166 25.684 14.764 25.027 15.942 23.858 C 17.121 22.688 17.784 21.102 17.786 19.447 L 17.786 13.149 L 13.423 13.149 L 15.942 10.648 C 16.821 9.776 17.419 8.664 17.661 7.454 C 17.903 6.244 17.779 4.99 17.303 3.85 C 16.828 2.711 16.023 1.737 14.99 1.051 C 13.957 0.366 12.742 0 11.5 0 L 0 0 Z M 9.723 16.824 L 13.423 13.149 L 13.423 19.447 C 13.423 19.954 13.22 20.439 12.859 20.797 C 12.499 21.155 12.01 21.356 11.5 21.356 L 4.358 21.356 L 4.358 4.33 L 11.5 4.33 C 11.88 4.33 12.252 4.441 12.568 4.651 C 12.885 4.86 13.131 5.158 13.277 5.507 C 13.422 5.856 13.46 6.24 13.386 6.61 C 13.312 6.98 13.129 7.32 12.86 7.587 L 6.64 13.764 Z M 39.645 8.391 C 41.973 8.391 44.451 10.375 45.046 12.529 L 45.046 8.644 L 49.403 8.644 L 49.403 25.677 L 45.046 25.677 L 45.046 21.791 C 44.451 23.946 41.973 25.929 39.645 25.929 C 38.121 25.929 37.07 25.566 35.814 24.832 C 34.558 24.098 33.612 23.04 32.906 21.731 C 32.2 20.423 31.961 18.894 31.961 17.187 L 31.961 17.132 C 31.961 15.426 32.194 13.911 32.906 12.587 C 33.619 11.264 34.563 10.215 35.814 9.488 C 37.064 8.762 38.121 8.391 39.645 8.391 Z M 42.879 21.405 C 43.547 21.019 44.092 20.452 44.448 19.77 L 44.448 19.771 C 44.845 19.046 45.046 18.167 45.046 17.163 C 45.046 16.159 44.845 15.282 44.448 14.556 C 44.091 13.874 43.547 13.307 42.879 12.921 C 42.209 12.55 41.455 12.354 40.688 12.352 C 39.921 12.35 39.167 12.541 38.495 12.909 C 37.832 13.29 37.294 13.852 36.943 14.528 C 36.545 15.253 36.344 16.13 36.344 17.135 L 36.344 17.191 C 36.344 18.196 36.545 19.073 36.943 19.798 C 37.294 20.474 37.833 21.036 38.495 21.418 C 39.167 21.785 39.922 21.976 40.689 21.974 C 41.455 21.972 42.209 21.776 42.879 21.405 Z M 25.512 12.529 L 25.512 8.644 L 21.155 8.644 L 21.155 25.685 L 25.512 25.685 L 25.512 17.166 C 25.512 16.162 25.713 15.284 26.11 14.558 C 26.467 13.876 27.011 13.31 27.68 12.923 C 28.347 12.541 29.106 12.344 29.877 12.354 C 30.277 12.352 30.675 12.401 31.062 12.502 L 31.062 8.389 L 30.913 8.389 C 28.586 8.389 26.109 10.375 25.512 12.529 Z M 52.899 8.644 L 57.227 8.644 L 57.227 25.741 L 52.899 25.741 Z M 55.105 0.345 C 54.407 0.345 53.739 0.621 53.245 1.11 C 52.752 1.6 52.475 2.264 52.475 2.956 C 52.475 3.649 52.752 4.313 53.245 4.803 C 53.739 5.292 54.407 5.567 55.105 5.567 C 55.446 5.57 55.785 5.504 56.1 5.372 C 56.415 5.24 56.699 5.045 56.935 4.799 C 57.412 4.303 57.678 3.644 57.678 2.958 C 57.678 2.272 57.412 1.612 56.935 1.116 C 56.699 0.87 56.415 0.675 56.1 0.542 C 55.785 0.41 55.446 0.343 55.105 0.345 Z M 60.75 3.266 L 65.078 3.266 L 65.078 25.741 L 60.75 25.741 Z M 72.929 3.266 L 68.601 3.266 L 68.601 25.741 L 72.929 25.741 Z M 84.016 8.391 C 85.63 8.391 87.085 8.75 88.342 9.458 C 89.59 10.148 90.615 11.177 91.296 12.424 C 91.976 13.661 92.32 15.069 92.32 16.61 C 92.319 17.155 92.289 17.699 92.231 18.241 L 92.19 18.63 L 78.96 18.63 C 79.222 19.635 79.697 20.437 80.396 21.068 C 81.361 21.938 82.507 22.36 83.897 22.36 C 84.821 22.372 85.736 22.171 86.569 21.774 C 87.297 21.424 87.91 20.875 88.337 20.192 L 90.903 22.664 C 90.427 23.344 89.842 23.944 89.173 24.439 C 87.781 25.474 86.047 26 84.018 26 C 82.404 26 80.934 25.629 79.649 24.903 C 78.351 24.169 77.289 23.083 76.588 21.772 C 75.863 20.44 75.494 18.889 75.494 17.164 C 75.494 15.44 75.852 13.897 76.557 12.581 C 77.243 11.272 78.3 10.19 79.597 9.47 C 80.879 8.754 82.367 8.391 84.016 8.391 Z M 80.388 13.176 C 79.69 13.805 79.215 14.608 78.952 15.612 L 88.931 15.612 C 88.836 15.078 88.644 14.566 88.363 14.101 C 87.935 13.395 87.309 12.828 86.561 12.469 C 85.728 12.071 84.813 11.871 83.889 11.883 C 82.499 11.883 81.354 12.305 80.388 13.176 Z"
            fill="rgb(255, 255, 255)"
          ></path>
        </svg>
      ),
    },
    {
      logo: (
        <svg
          width="171"
          height="60"
          viewBox="0 0 171 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4109 43.7088L20.6714 32.825H16.0331V43.7088H12V16.2983H23.2881C26.8351 16.2983 29.7371 19.1805 29.7371 22.7473V26.3736C29.7371 29.3153 27.7627 31.7907 25.0814 32.5695L30.945 43.7064H26.4109V43.7088ZM16.0306 20.3289V28.7944H23.2857C24.635 28.7944 25.704 27.6857 25.704 26.3761V22.7498C25.704 21.4401 24.635 20.3314 23.2857 20.3314H16.0306V20.3289Z"
            fill="currentColor"
          />
          <path
            d="M63.0678 13.6594C61.912 14.9789 60.7586 16.358 59.6325 17.7693C58.5163 16.8541 57.0926 16.301 55.5374 16.301H50.6982C47.1513 16.301 44.2518 19.1807 44.2518 22.7474V37.26C44.2518 37.5775 44.2741 37.8876 44.3187 38.1902L44.2939 38.215L44.3014 38.2571C44.3361 38.5449 44.3559 39.026 44.3659 39.3485C44.3733 39.5692 44.3758 39.6585 44.3832 39.7007C44.0781 40.8739 43.4779 42.1389 42.9496 43.2551L42.9397 43.2774C42.8479 43.4634 42.7511 43.6668 42.6395 43.9124L40.8438 48L43.1133 45.79L43.21 45.6908C43.2522 45.6511 43.2919 45.6114 43.339 45.5692C44.165 44.7284 45.167 43.5279 46.3278 41.9975C47.4787 43.0641 49.0141 43.7115 50.6958 43.7115H55.5349C59.0819 43.7115 61.9864 40.8293 61.9864 37.26V22.7474C61.9864 21.981 61.85 21.2468 61.6044 20.5622C61.8351 19.6966 62.1178 18.7267 62.5097 17.8016C62.6709 17.4246 63.2266 15.8297 64.0773 13.322L64.5238 12L63.0653 13.6618L63.0678 13.6594ZM48.2799 33.6337V22.7474C48.2799 21.4403 49.3489 20.3315 50.6958 20.3315H55.5349C56.1228 20.3315 56.6585 20.5424 57.0752 20.8847C56.4973 21.6759 55.8896 22.5738 55.4655 23.1964L55.4109 23.2757C55.3464 23.3799 55.2993 23.4469 55.2869 23.4692C54.9942 23.8859 54.7015 24.3026 54.4039 24.7193L54.3568 24.7838C52.871 26.8971 51.3282 29.0823 50.0409 31.4436C49.6416 32.1877 49.2001 32.9591 48.5899 33.4576C48.5106 33.5221 48.4113 33.5816 48.2799 33.6362M57.9558 37.2575C57.9558 38.5697 56.8867 39.6784 55.5349 39.6784H50.6958C49.8872 39.6784 49.1778 39.279 48.7462 38.6763C50.9091 35.6056 52.938 32.468 54.4982 30.0273C54.6222 29.8388 54.7437 29.6379 54.8677 29.432L54.9992 29.2112C55.7929 27.8991 56.6139 26.5424 57.9533 26.0141V37.2575H57.9558Z"
            fill="currentColor"
          />
          <path
            d="M94.2366 28.7944V37.2599C94.2366 40.8267 91.3345 43.7088 87.7876 43.7088H82.9509C79.404 43.7088 76.502 40.8267 76.502 37.2599V22.7473C76.502 19.1805 79.404 16.2983 82.9509 16.2983H87.7876C91.3345 16.2983 94.2366 19.1805 94.2366 22.7473H90.206C90.206 21.4377 89.1369 20.3289 87.7876 20.3289H82.9509C81.6016 20.3289 80.5325 21.4377 80.5325 22.7473V37.2599C80.5325 38.5695 81.6016 39.6782 82.9509 39.6782H87.7876C89.1369 39.6782 90.206 38.5695 90.206 37.2599V32.825H85.3693V28.7944H94.239H94.2366Z"
            fill="currentColor"
          />
          <path
            d="M122.455 16.2983H126.486V37.2599C126.486 40.8267 123.584 43.7088 120.037 43.7088H115.2C111.653 43.7088 108.751 40.8267 108.751 37.2599V16.2983H112.782V37.2599C112.782 38.5695 113.851 39.6782 115.2 39.6782H120.037C121.386 39.6782 122.455 38.5695 122.455 37.2599V16.2983Z"
            fill="currentColor"
          />
          <path
            d="M140.999 43.7088V16.2983H158.736V20.3289H145.03V27.1797H157.124V31.2128H145.03V39.6782H158.736V43.7088H140.999Z"
            fill="currentColor"
          />
        </svg>
      ),
      url: "r0gue.ui",
    },
    {
      url: "https://use.ink/",
      logo: <Image src={LogoInk} alt="ink! logo" width={60} height={60} />,
    },
    {
      url: "https://hyperbridge.network",
      logo: (
        <Image src={LogoHyperbridge} alt="Hyperbridge" width={60} height={60} />
      ),
    },
    {
      url: "https://onpop.io/",
      logo: <Image src={LogoPop} alt="pop" width={60} height={60} />,
    },
    {
      url: "https://thekus.xyz/",
      logo: (
        <Image
          src={LogoKus}
          alt="Kusamarian"
          width={60}
          height={60}
          className="!w-auto !h-12"
        />
      ),
      name: "TheKUS",
    },
    {
      url: "https://thewagmedia.com/",
      name: "WagMedia",
      logo: (
        <Image
          src={LogoWagMedia}
          alt="WagMedia"
          className="!h-10 !w-auto"
          width={60}
          height={60}
        />
      ),
    },
  ],
};

export const portfolioData = {
  mainData: {
    title: "Portfolio",
    title2: "Recent",
    title2Span: "Work",
    description: (
      <>
        Product-first web3: clear UX, strong engineering, measurable outcomes.{" "}
        <br /> I get hands-on with teams to turn concepts into shipped dapps
      </>
    ),
  },
  projects: [
    {
      title: "R0GUE",
      slug: "r0gue",
      description: (
        <p className="text-white/70">
          R0GUE is a web3 agency that helps businesses build and scale their
          web3 projects. I built the website from a figma design, adding motion
          and shaders for a more enjoyable experience.
        </p>
      ),
      keywords: "next.js, tailwindcss, framer motion, shaders, figma",
      categories: [
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "Shaders" },
        { name: "Figma" },
      ],
      services: [
        { name: "Web Development" },
        { name: "UX Design" },
        { name: "Project Management" },
      ],
      client: "R0GUE",
      duration: "100+ hours",
      projectLink: {
        title: "r0gue.com",
        url: "https://r0gue.com",
      },
      content: (
        <p className="text-white/70">
          After several iterations in designs and discussions with the client,
          we settled on a design with shaders in the main heroes matching the
          brand by distorting the R0GUE figure. I added controls for the client
          so they can easily adjust the shaders to their liking.
        </p>
      ),
      mainImage: PortfolioR0GUE,
      trending: true,
    },

    {
      title: "Polkadot UI",
      slug: "polkadot-ui",
      description: (
        <p className="text-white/70">
          Customizable React Component library for building Polkadot dapps. UX
          optimized components build on shadcn registry with a custom cli and
          MCP server.
        </p>
      ),
      keywords: "key1, key2, key3",
      categories: [
        { name: "Next.js" },
        { name: "Shadcn" },
        { name: "Polkadot" },
      ],
      services: [
        { name: "Web Development" },
        { name: "UX Design" },
        { name: "Project Management" },
      ],
      client: "UX Bounty",
      duration: "300+ Hourse",
      projectLink: {
        title: "polkadot.ui",
        url: "https://polkadot-ui.com",
      },
      content: (
        <p className="text-white/70">
          After initial project scoping, I conducted a UX research phase to
          understand the user needs and pain points. I then aligned with key
          stakeholders in the ecosystem to ensure the design was aligned with
          the needs of the community. I then designed the UI and implemented the
          functionality together with{" "}
          <Link
            href="https://www.linkedin.com/in/husni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Husni
          </Link>
          , fellow Polkadot Blockchain Academy Alumni.
        </p>
      ),
      mainImage: PortfolioPolkadotUI,
      trending: true,
    },
    {
      title: "ink! website & docs",
      slug: "ink-website",
      description:
        "Using the existing branding to create a better UX for the #1 rust smart contract language on Polkadot",
      keywords: "key1, key2, key3",
      categories: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Shadcn" },
        { name: "Polkadot" },
        { name: "Docusaurus" },
      ],
      services: [{ name: "Project Management" }, { name: "Web Development" }],
      client: "ink! alliance",
      duration: "180 hours",
      projectLink: {
        title: "use.ink",
        url: "https://use.ink",
      },
      content: (
        <p className="text-white/70">
          After aligning with the client,{" "}
          <Link href="https://flez.xyz/">flez</Link> created a full design
          overhaul in framer motion, which I ported to react components as the
          clients requirement was open source and we had to include docusaurus
          and existing CI.
        </p>
      ),
      mainImage: PortfolioInk,
      // wideImage: PortfolioImgWide,
      // imagesLightbox: {
      //   image: PortfolioImg,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: PortfolioImg,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      trending: true,
    },
    {
      title: "District",
      slug: "district",
      description:
        "Dapp for the District, a community driven 3d Music experience in the LUKSO ecosystem.",
      keywords: "key1, key2, key3",
      categories: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Figma" },
        { name: "Shadcn" },
        { name: "LUKSO" },
      ],
      services: [
        { name: "Web Development" },
        { name: "UX Design" },
        { name: "Music Player" },
      ],
      client: "District",
      duration: "6 months",
      projectLink: {
        title: "district.berlin",
        url: "https://district.berlin",
      },
      content: (
        <>
          <p className="text-white/70">
            Created a webapp matching the new branding from figma. Highlights
            include a responsive music player and subtle animations.
          </p>{" "}
        </>
      ),
      mainImage: PortfolioDistrict,
      // wideImage: PortfolioImgWide,
      // imagesLightbox: {
      //   image: PortfolioImg,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: PortfolioImg,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      trending: true,
    },
    {
      title: "WagMedia Website",
      slug: "the-wag-media",
      description:
        "Content Creation Platform for the WagMedia team. Discord bot for collecting content as well as payment emojis and populating a postgres database. Statistics.",
      keywords: "Discord, Bot, Postgres, Statistics",
      categories: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Polkadot" },
      ],
      services: [{ name: "Web Development" }, { name: "Components" }],
      client: "WagMedia",
      duration: "120+ Hours",
      projectLink: {
        title: "thewagmedia.com",
        url: "https://www.thewagmedia.com",
      },
      content: (
        <>
          <p className="text-white/70">
            Content Creation Platform for the WagMedia team. Discord bot for
            collecting content as well as payment emojis and populating a
            postgres database. Statistics.
          </p>{" "}
          <h5 className="text-2xl font-outfit font-medium text-white mt-6 mb-2">
            Heading
          </h5>{" "}
          <p className="text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </>
      ),
      mainImage: PortfolioWagMedia,
      // wideImage: PortfolioImgWide,
      // imagesLightbox: {
      //   image: PortfolioWagMedia,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: PortfolioImg,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      trending: true,
    },
    {
      title: "Gray Paper Lectures",
      slug: "gray-paper-lecture",
      description:
        "Created a lectures subpage about the JAM Gray Paper by Gavin Wood. ",
      keywords: "JAM, Gray Paper, Gavin Wood, Lectures",
      categories: [{ name: "React" }, { name: "Figma" }, { name: "Netlify" }],
      content: (
        <>
          <p className="text-white/70">
            Created a lectures subpage about the JAM Gray Paper by Gavin Wood.
            It matches the existing style and you can view videos alongside
            reading the pdf of the gray paper. The page is hosted on Netlify.
          </p>
        </>
      ),
      services: [{ name: "Web Development" }, { name: "UX Design" }],
      projectLink: {
        title: "graypaper.com/lectures",
        url: "https://graypaper.com/lectures/?section=1.1-Nomenclature",
      },

      mainImage: PortfolioGrayPaperLecture,
      // wideImage: PortfolioImgWide,
      // imagesLightbox: {
      //   image: PortfolioImg,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: PortfolioImg,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      trending: false,
    },
    {
      title: "Esmalbesserhabenin",
      slug: "esmalbesserhabenin",
      description:
        "Created a 3D web experience for a anti-racist theater play about immigration in Germany, that originally took place during the covid lockdown 2021. The producer wanted to port it into the virtual space to reach a larger audience.",
      keywords: "3D, Web Experience, Anti-Racist, Theater Play, Immigration",
      categories: [{ name: "React" }, { name: "Figma" }, { name: "Shadcn" }],
      services: [
        { name: "Web Development" },
        { name: "UX Design" },
        { name: "3D" },
      ],
      client: "Esmalbesserhabenin",
      duration: "1 month",
      projectLink: {
        title: "esmalbesserhabenin.de",
        url: "https://www.esmalbesserhabenin.de",
      },
      content: (
        <>
          <p>
            Created a 3D web experience for a anti-racist theater play about
            immigration in Germany, that originally took place during the covid
            lockdown 2021. The producer wanted to port it into the virtual space
            to reach a larger audience.
          </p>
          <p>
            We created the UI + UX together with the team of producers and
            dramaturgists.
          </p>
        </>
      ),

      mainImage: PortfolioEsmalbesserhabenin,
      // wideImage: PortfolioImgWide,
      // imagesLightbox: {
      //   image: PortfolioImg,
      //   alt: "Image Alt",
      // },
      // video: {
      //   thumbnail: PortfolioImg,
      //   url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      // },
      trending: false,
    },
  ],
};

export const blogData = {
  mainData: {
    title: "Journal",
    title2: "Blog",
    title2Span: "Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  posts: [
    {
      title: "Blog Post Title",
      slug: "blog-post-title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
    {
      title: "Blog Post Title",
      slug: "blog-post-title-2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
      keywords: "key1, key2, key3",
      category: "Category",
      date: "Jan 12",
      postedBy: "admin",
      content:
        '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      mainImage: BlogImg,
      wideImage: BlogImgWide,
      imagesLightbox: {
        image: BlogImg2x,
        alt: "Image Alt",
      },
      video: {
        thumbnail: BlogImg2x,
        url: "https://www.youtube.com/watch?v=V8yu12uRpBA",
      },
      tags: [{ name: "Tag1" }, { name: "Tag2" }],
    },
  ],
};

export const awardsData = {
  mainData: {
    title: "Achievements",
    title2: "Achieve",
    title2Span: "ments",
  },
  awards: [
    {
      title: "Open Source Grants Evaluator",
      date: "2025",
      description:
        "I joined the Open Source Grants Evaluator program to help evaluate and fund open source projects that are building on the Polkadot ecosystem of up to $30.000.",
    },
    {
      title: "UX Bounty Curator",
      date: "2025",
      description:
        "As one of the best bounties in Polkadot, we are responsible for ensuring good UX in Polkadot and have started many successful initiatives. My focus is DevEx, Hackathons, Grants and helping with all things UX.",
    },
    {
      title: "PBA Graduate",
      date: "2021",
      description:
        "As a student of the Polkadot Blockchain Academy in Buenos Aires, Argentina, I learned alot about the Polkadot ecosystem, studied RUST and ink! smart contracts, and built custom runtimes and pallets. It was before there was a dApp track and I was 1 of 2 building frontends at that time :)",
    },
    {
      title: "400k Downloads WP Plugin",
      date: "2021-2024",
      description:
        "When WordPress switched to react based Gutenberg, I was one of the first to build a slider plugin within the native editor. It has ~400k downloads today (discontinued).",
    },
  ],
};

export const testimonialData = {
  testimonial: [
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      name: "Alexander Warren",
      avatar: TestimonialAvatar,
      jobTitle: "CTO - Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ],
};

export const contactData = {
  mainData: {
    title: "Contact",
    title2: "Let's",
    title2Span: "Talk",
    phone: "+123 456 7890",
    email: "niklas@eedee.net",
  },
};

export const footerData = {
  copyWriteText: "Niklas Jurij Plessing, All Rights Reserved.",
};
