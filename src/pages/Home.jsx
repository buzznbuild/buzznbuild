import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Code2, Smartphone, Globe, Palette, BarChart3, Layers } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Empowering Your <br />
                            <span className="text-gradient">Digital Growth</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            We help businesses scale with cutting-edge digital solutions — from web & mobile development to complete digital marketing and branding.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto">
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Link to="/services">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <Section className="bg-surface/50 rounded-3xl my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Innovative. Strategic. <br />
                            <span className="text-primary">Results-Driven.</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            We combine creativity with technology to deliver solutions that truly make an impact. Every project is tailored for your goals and audience.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Full-Service Digital Expertise",
                                "Custom-Built Solutions",
                                "Performance-Focused Results",
                                "Modern Technologies Stack"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg"
                                >
                                    <CheckCircle2 className="text-secondary w-6 h-6" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team working"
                            className="relative rounded-2xl border border-white/10 shadow-2xl"
                        />
                    </div>
                </div>
            </Section>

            {/* Core Services */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions to elevate your brand and business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Globe className="w-8 h-8 text-primary" />,
                            title: "Web Development",
                            desc: "Modern, responsive, and high-performance websites that convert."
                        },
                        {
                            icon: <Smartphone className="w-8 h-8 text-accent" />,
                            title: "Mobile Apps",
                            desc: "Seamless mobile experiences designed for speed and growth."
                        },
                        {
                            icon: <BarChart3 className="w-8 h-8 text-secondary" />,
                            title: "Digital Strategy",
                            desc: "Data-driven marketing campaigns to grow your online presence."
                        },
                        {
                            icon: <Palette className="w-8 h-8 text-pink-500" />,
                            title: "UI/UX Design",
                            desc: "Beautiful, intuitive designs that deliver seamless user experiences."
                        },
                        {
                            icon: <Code2 className="w-8 h-8 text-blue-500" />,
                            title: "Software Dev",
                            desc: "Tailor-made software solutions to automate and scale."
                        },
                        {
                            icon: <Layers className="w-8 h-8 text-purple-500" />,
                            title: "Branding",
                            desc: "Create a unique identity that resonates with your audience."
                        }
                    ].map((service, index) => (
                        <Card key={index} className="p-8 hover:bg-white/5">
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.desc}</p>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/services">
                        <Button variant="outline" size="lg">View All Services</Button>
                    </Link>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="bg-gradient-to-b from-transparent to-surface/50 py-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
                    <p className="text-gray-400">Trusted by Startups, SMEs & Enterprises</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="bg-background border-white/5">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">"Exceptional service, modern designs, and measurable results. Highly recommended for anyone looking to scale their digital presence."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10" />
                                <div>
                                    <h4 className="font-bold">Client Name</h4>
                                    <p className="text-sm text-gray-500">CEO, Tech Company</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </>
    )
}

export default Home
