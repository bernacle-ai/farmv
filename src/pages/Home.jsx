import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Brain, ChartColumn, Cpu, Leaf, Plane, Quote, TrendingUp, Mail, MapPin, MessageSquare, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/assets/hero-agriculture-DXB7Fjsp.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/60 via-green-700/50 to-teal-700/60" />
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-300/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-teal-300/15 rounded-full blur-xl animate-pulse" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Revolutionizing Agriculture,
            <br />
            <span className="text-emerald-100">One Farm at a Time</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50 max-w-4xl mx-auto mb-12 leading-relaxed">
            We're a startup on a mission to transform farming with cutting-edge AI, automation, and direct market access. Join us in building the future of sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/get-app">
              <Button size="lg" className="bg-white text-green-700 hover:bg-emerald-50 hover:text-green-800 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                Explore Our Solutions
                <ArrowRight className="ml-2 hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/connect">
              <Button variant="outline" size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold">
                <MessageSquare className="mr-2" />
                Speak to an Expert
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission: Scaling Change in Agriculture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a passionate startup building technology that empowers farmers at every scale. From smallholder farmers to large cooperatives, we're creating tools that make precision agriculture accessible, profitable, and sustainable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              Our platform bridges traditional farming wisdom with modern AI and automation—helping you make data-driven decisions, reduce waste, and connect directly to global markets. We're not just building software; we're building a movement toward smarter, fairer agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: ChartColumn, title: "AI-Powered Insights", description: "Real-time data analytics that turn your farm into a smart operation." },
              { icon: Globe, title: "Direct Market Access", description: "Connect directly to buyers worldwide—no middlemen, maximum profit." },
              { icon: Cpu, title: "Smart Automation", description: "Drones and robotics that scale with your ambitions." },
              { icon: Leaf, title: "Sustainable Growth", description: "Profitability and planet protection go hand in hand." }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Solutions Built for Modern Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable, scalable technology that grows with your farm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Smart Farming Platform",
                description: "Our AI-powered platform gives you actionable insights from satellite imagery, drone data, and IoT sensors. Get real-time alerts on crop health, optimize resource usage, and make confident decisions backed by data. Start with our free tier and scale as you grow.",
                gradient: "from-primary to-primary/80"
              },
              {
                icon: Plane,
                title: "Drone & Automation Services",
                description: "Access cutting-edge farming automation without the massive investment. Our drone-as-a-service model provides precision spraying, seeding, and monitoring at a fraction of traditional costs. Book on-demand or subscribe for regular service.",
                gradient: "from-accent to-accent/80"
              },
              {
                icon: TrendingUp,
                title: "Direct Market Platform",
                description: "Skip the middlemen. Our digital marketplace connects you directly with verified buyers—from local wholesalers to international exporters. Set your prices, track your shipments, and get paid faster with complete transparency.",
                gradient: "from-secondary to-secondary/80"
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border group">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-muted to-muted/50 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our Impact, By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "800+", label: "Acres Under Management" },
              { value: "123", label: "Farmers & Partners in Our Network" },
              { value: "30%", label: "Average Reduction in Water & Chemical Use" },
              { value: "2", label: "Countries of Operation (India & Sri Lanka - Growing)" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 backdrop-blur-sm bg-primary-foreground/5 rounded-lg hover:bg-primary-foreground/10 transition-all">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-secondary">{stat.value}</div>
                <div className="text-lg text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Farmers Already Seeing Results
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of farmers transforming their operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
            {[
              {
                quote: "I was skeptical about tech on my small farm, but their platform is so easy to use. Now I know exactly when to water and fertilize. My yields are up 35% and I'm saving money on inputs. Best decision I made this year.",
                author: "Rajesh Patel",
                role: "Small-scale Farmer, Gujarat"
              },
              {
                quote: "The drone service is incredible. We used to spend days manually inspecting our fields. Now we get detailed health reports in hours. Early pest detection alone saved us thousands this season.",
                author: "Carlos M.",
                role: "Farm Manager, Brazil"
              },
              {
                quote: "Finally, a platform that connects us directly to serious buyers. No more dealing with local traders who dictate prices. We're exporting internationally and getting fair market rates.",
                author: "Amara K.",
                role: "Cooperative Leader, Kenya"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-card relative">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-card-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Transform Your Farm Together
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
              Whether you're just starting out or scaling up, we're here to help. Get in touch and let's discuss how our platform can work for you.
            </p>
            <Link to="/get-app">
              <Button variant="hero" size="lg" className="mb-16 hover:scale-105">
                Start Your Free Trial
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:info@farmv.in" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@farmv.in
                </a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a href="tel:+918754055442" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 8754055442
                </a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-primary-foreground/80">
                  Serving partners in India & Sri Lanka (Growing)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
export { Home }
