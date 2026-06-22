import * as React from "react"
import { Bell, CheckCircle, Smartphone, Zap, Users, Globe } from "lucide-react"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const GetApp = () => {
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Show local success toast/alert
    alert(`Thank you! ${email} has been added to the waitlist.`)
    setEmail("")
    setPhone("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
              <Smartphone className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FarmV Mobile App
              <br />
              Coming Soon
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your entire farm operation in your pocket. Get early access to our revolutionary mobile app built for farmers worldwide.
            </p>

            <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur">
              <h3 className="text-xl font-semibold text-foreground mb-4">Join the Waitlist</h3>
              <p className="text-sm text-muted-foreground mb-4">Be the first to know when we launch globally</p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background text-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone number (optional)"
                  className="bg-background text-foreground"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button type="submit" className="w-full" size="lg">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me at Launch
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-3">
                🎁 Early access users get 3 months free premium features
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What's Inside the App?</h2>
            <p className="text-lg text-muted-foreground">Powerful features designed specifically for modern farmers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">Track crop health, weather, soil moisture, and more—all in real-time with AI alerts</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Smart Task Manager</h3>
              <p className="text-muted-foreground">Get AI-powered recommendations on when to plant, irrigate, fertilize, and harvest</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Market Insights</h3>
              <p className="text-muted-foreground">Live crop prices, buyer connections, and direct marketplace access—all offline capable</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Community & Support</h3>
              <p className="text-muted-foreground">Connect with other farmers, share knowledge, and get expert advice in 20+ languages</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Offline-First Design</h3>
              <p className="text-muted-foreground">Works perfectly even with poor internet—syncs automatically when connected</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Smart Notifications</h3>
              <p className="text-muted-foreground">Weather alerts, pest warnings, and market opportunities delivered right when you need them</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-card-foreground mb-4">Building for Regional Farmers</h2>
              <p className="text-center text-muted-foreground mb-6">
                We're working hard to create an app that works for smallholder farmers to large operations across India and Sri Lanka. Whether you have 1 acre or 1,000, FarmV will speak your language and understand your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-2 bg-background rounded-full text-sm font-medium">🇮🇳 India</div>
                <div className="px-4 py-2 bg-background rounded-full text-sm font-medium">🇱🇰 Sri Lanka</div>
                <div className="px-4 py-2 bg-background/50 rounded-full text-sm font-medium text-muted-foreground">🌱 And Growing</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetApp
export { GetApp }
