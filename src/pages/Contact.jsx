import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formState)
        alert('Thank you! We will get back to you soon.')
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="pt-20">
            <Section className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Let’s bring your ideas to life. Whether you need a website, app, or a complete digital marketing strategy — we’re here to help.
                </p>
            </Section>

            <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <p className="text-gray-400">info@digitalagency.com</p>
                                    <p className="text-gray-400">support@digitalagency.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Call Us</h3>
                                    <p className="text-gray-400">+91 XXXXX XXXXX</p>
                                    <p className="text-gray-400">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-secondary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Visit Us</h3>
                                    <p className="text-gray-400">Your Company Address Here</p>
                                    <p className="text-gray-400">City, State, Country</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Map Placeholder */}
                    <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/50" />
                        <span className="relative z-10 font-bold text-lg">Map Integration</span>
                    </div>
                </div>

                {/* Contact Form */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Service Interested In</label>
                            <select
                                name="service"
                                value={formState.service}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none"
                            >
                                <option value="" className="bg-surface">Select a service</option>
                                <option value="web" className="bg-surface">Web Development</option>
                                <option value="app" className="bg-surface">Mobile App Development</option>
                                <option value="marketing" className="bg-surface">Digital Marketing</option>
                                <option value="design" className="bg-surface">UI/UX Design</option>
                                <option value="software" className="bg-surface">Software Development</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Send Message <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </Card>
            </Section>
        </div>
    )
}

export default Contact
