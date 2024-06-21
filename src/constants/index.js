import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import { FaMedal } from "react-icons/fa6";
import { MdPriceChange } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";



export const whyus = [
    {
        Icon: FaMedal,
        label : "Excellence",
        subtext: "We specialize in understanding the unique needs of local businesses and startups.",
    },
    {
        Icon : MdPriceChange,
        label : "Competitive Pricing",
        subtext : "We offer competitive and transparent pricing models that provide excellent value for your investment.",
    },
    {
        Icon : TbTargetArrow,
        label : "Focus on Results",
        subtext : "We are results-driven. Every strategy we implement and every campaign we run is designed to deliver measurable results.",
    },
]


export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "/",
    },

]

export const footerLinks = [
    {
        title: "Services",
        links: [
            {
                name: "Graphic Design",
                link: "/",
            },
            {
                name: "Web Design",
                link: "/",
            },
            {
                name: "SMM",
                link: "/",
            },
        ],
    },
    {
        title: "Help",
        links: [
            {
                name: "About us",
                link: "/",
            },
            {
                name: "FAQs",
                link: "/",
            },
            {
                name: "How it works",
                link: "/",
            },
            {
                name: "Privacy policy",
                link: "/",
            },
            {
                name: "Payment policy",
                link: "/"
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                name: "Help Center",
                link: "/",
            },
            {
                name: "Partners",
                link: "/",
            },
            {
                name: "Suggestions",
                link: "/",
            },
            {
                name: "Blog",
                link: "/",
            },
            {
                name: "Newsletters",
                link: "/",
            },
        ]
    },
    {
        title: "Get in touch",
        links: [
            {
                name: "customer@ham.com",
                link: "/",
            },
            {
                name: "+9286390052",
                link: "/",
            },
        ],
    },
]

export const navLinks = [
    {
        id: "home",
        linker: "/",
        title: "Home",
    },
    {
        id: "services",
        title: "Services",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "about_us",
        title: "About Us",
    }
];

export const services =[
    {
        id: "pricegd",
        title: "Graphic Design",
        content: "Innovative graphic design studio delivering creative solutions and stunning visuals for brands and businesses worldwide.",
    },
    {
        id: "pricewd",
        title: "Web Design",
        content: "Expert UI/UX design agency crafting intuitive and engaging digital experiences for enhanced user satisfaction and business success.",
    },
    {
        id: "pricesmm",
        title: "Social Media Management",
        content: "Professional social media management firm boosting online presence, engagement, and growth for brands across all platforms.",
    },
];