import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "emailjs-com"
import { toast } from "sonner"
import { Mail, Phone, MapPin, MessageSquare, Rocket, Clock, Loader2, CheckCircle2, Globe } from "lucide-react"

import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

const ConnectUs = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showThankYou, setShowThankYou] = React.useState(false)
  const [submittedName, setSubmittedName] = React.useState("")

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "Not provided",
        message: data.message,
        to_email: "info@farmv.in"
      }
      
      const response = await emailjs.send(
        "service_suyjxrc",
        "template_x8s6cnq",
        templateParams,
        "hZF-EGXxuUcI7zxeH"
      )

      if (response.status === 200) {
        setSubmittedName(data.name)
        setShowThankYou(true)
        form.reset()
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours."
        })
      } else {
        toast.error("Failed to send message", {
          description: `Email service returned status: ${response.status}`
        })
      }
    } catch (err) {
      toast.error("Failed to send message", {
        description: err.text || "An unexpected error occurred. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Let's Connect</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Want to partner with us? Or just curious about what we're building? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 xxxxx xxxxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us how we can help..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@farmv.in" className="text-muted-foreground hover:text-primary transition-colors">
                        info@farmv.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+918754055442" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 8754055442
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Serving farmers across India & Sri Lanka (Growing)</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Why Connect With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Ask Anything</h4>
                      <p className="text-sm text-muted-foreground">Questions about pricing, features, or how we can help your farm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Partner With Us</h4>
                      <p className="text-sm text-muted-foreground">Co-ops, agri-businesses, and investors—let's talk collaboration</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Join the Team</h4>
                      <p className="text-sm text-muted-foreground">Passionate about agri-tech? We're always looking for talent</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Thank You Dialog */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-bold text-green-800">
              Thank You, {submittedName}!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Your message has been successfully sent to our team.</p>
            <div className="bg-green-50 p-4 rounded-lg space-y-3">
              <div className="flex items-center gap-3 text-sm text-green-700">
                <Mail className="w-4 h-4" />
                <span>Message delivered to info@farmv.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-green-700">
                <Clock className="w-4 h-4" />
                <span>We'll respond within 24 hours</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              In the meantime, feel free to explore our solutions or check out our latest updates.
            </p>
            <Button onClick={() => setShowThankYou(false)} className="w-full">
              Continue Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ConnectUs
export { ConnectUs }
