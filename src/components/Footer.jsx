import { Link } from 'react-router-dom'
import { Zap, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Zap className="text-white w-5 h-5" fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold font-heading">BuzzNBuild</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with innovative digital solutions that drive growth and create meaningful connections.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">Our Process</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} BuzzNBuild. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
