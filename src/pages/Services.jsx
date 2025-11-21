import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Globe, Smartphone, Code2, Share2, Palette } from 'lucide-react'

const servicesData = [
    {
        id: 1,
        title: "Website Development",
        icon: <Globe className="w-10 h-10 text-primary" />,
        description: "Modern, responsive, and high-performance websites that represent your brand and convert visitors.",
        features: [
            "Business Websites",
            "E-commerce Platforms",
            "Portfolio & Personal Websites",
            "Custom Web Applications",
            "CMS Development (WordPress, Shopify)"
        ]
    },
    {
        id: 2,
        title: "Mobile App Development",
        icon: <Smartphone className="w-10 h-10 text-accent" />,
        description: "Seamless mobile experiences designed for speed, usability, and growth.",
        features: [
            "Android & iOS Apps",
            "Hybrid Apps (Flutter/React Native)",
            "Custom App Development",
            "App UI/UX Design"
        ]
    },
    {
        id: 3,
        title: "Software Development",
        icon: <Code2 className="w-10 h-10 text-secondary" />,
        description: "Tailor-made software solutions for businesses looking to automate, scale, and innovate.",
        features: [
            "Business Management Software",
            "ERP & CRM Solutions",
            "SaaS Applications",
            "Automation Tools"
        ]
    },
    {
        id: 4,
        title: "Social Media Marketing",
        icon: <Share2 className="w-10 h-10 text-pink-500" />,
        description: "Grow your online presence with content, strategy, and targeted campaigns.",
        features: [
            "Social Media Management",
            "Paid Ad Campaigns",
            "Content Creation & Branding",
            "Influencer Marketing",
            "Analytics & Performance Tracking"
        ]
    },
    {
        id: 5,
        title: "UI/UX Design",
        icon: <Palette className="w-10 h-10 text-purple-500" />,
        description: "Beautiful, intuitive designs that deliver seamless user experiences.",
        features: [
            "Wireframes & Prototypes",
            "Interface Design",
            "User Journey Mapping",
            "Brand Visual Identity"
        ]
    }
]

const Services = () => {
    return (
        <div className="pt-20">
            <Section className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
                <h2 className="text-2xl text-primary font-medium mb-4">Building Digital Experiences That Grow Your Business</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We provide end-to-end digital solutions combining creativity, strategy, and technology.
                </p>
            </Section>

            <Section className="space-y-20">
                {servicesData.map((service, index) => (
                    <div
                        key={service.id}
                        className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-lg mb-8">{service.description}</p>
                            <Card className="bg-surface/50 border-none">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                        <div className="flex-1">
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-0 transition-opacity duration-500" />
                                <img
                                    src={`https://source.unsplash.com/random/800x600?tech,${service.title.split(' ')[0]}`}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Section>
        </div>
    )
}

export default Services
