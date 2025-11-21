import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Lightbulb, Eye, Target, TrendingUp, Search, Map, PenTool, Rocket } from 'lucide-react'

const About = () => {
    return (
        <div className="pt-20">
            {/* Hero */}
            <Section className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Who We Are</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    A modern digital agency dedicated to helping brands grow through technology, creativity, and strategy. We partner with businesses to build powerful digital products and marketing campaigns that deliver measurable results.
                </p>
            </Section>

            {/* Mission & Vision */}
            <Section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <Card className="p-8 bg-gradient-to-br from-surface to-surface/50 border-primary/20">
                    <Target className="w-12 h-12 text-primary mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-400 text-lg">
                        To empower businesses with innovative digital solutions that drive growth, enhance visibility, and create meaningful customer connections.
                    </p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-surface to-surface/50 border-accent/20">
                    <Eye className="w-12 h-12 text-accent mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-400 text-lg">
                        To become a global digital partner for brands and businesses transforming through technology.
                    </p>
                </Card>
            </Section>

            {/* Values */}
            <Section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Lightbulb className="w-8 h-8 text-yellow-400" />, title: "Innovation", desc: "Always exploring the next big idea." },
                        { icon: <Search className="w-8 h-8 text-blue-400" />, title: "Transparency", desc: "Clear communication and honest processes." },
                        { icon: <Target className="w-8 h-8 text-green-400" />, title: "Quality", desc: "Delivering excellence in every project." },
                        { icon: <TrendingUp className="w-8 h-8 text-red-400" />, title: "Growth Mindset", desc: "Helping brands grow while growing together." }
                    ].map((value, index) => (
                        <Card key={index} className="text-center p-6 hover:bg-white/5">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-gray-400 text-sm">{value.desc}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Process */}
            <Section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Process</h2>
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { icon: <Search />, title: "Discovery", step: "01" },
                            { icon: <Map />, title: "Strategy", step: "02" },
                            { icon: <PenTool />, title: "Design & Dev", step: "03" },
                            { icon: <Rocket />, title: "Launch", step: "04" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl relative group">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                                        {item.step}
                                    </div>
                                    <div className="text-gray-300 group-hover:text-primary transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default About
