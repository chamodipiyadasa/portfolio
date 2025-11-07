import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"
import { send } from "@emailjs/browser"


export const ContactSection = () => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  // EmailJS config via Vite env variables (set these in your .env as VITE_...)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const message = formData.get('message') || ''

    // Build a mailto link so the user's mail client opens with the message prefilled.
    const subject = `Message from ${name}`
    const body = `From: ${name} <${email}>\n\n${message}`
    const mailto = `mailto:chamodipiyadasa@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSending(true)
    setError(false)

    // If EmailJS config is present, use it to send the email from the client
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      }
      send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then(() => {
          setSending(false)
          setSent(true)
          form.reset()
          setTimeout(() => setSent(false), 3000)
        })
        .catch(() => {
          // On failure, fallback to mailto behavior
          setSending(false)
          setError(true)
        })
      return
    }

    // Fallback: open mail client with mailto or copy mailto to clipboard
    try {
      const newWindow = window.open(mailto, '_self') || window.open(mailto)
      setSending(false)
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 3000)
      if (!newWindow && navigator.clipboard) {
        navigator.clipboard.writeText(mailto).catch(() => {})
      }
    } catch (err) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(mailto).catch(() => {})
      }
      setSending(false)
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 3000)
    }
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      Get In <span className="text-primary"> Touch</span>
     </h2>
     <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto"> 
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!

     </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6">
          Contact Information
        </h3>
        <div className="space-y-6 justify-center">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail  className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a href="mailto:chamodipiyadasa@icloud.com" className="text-muted-foreground hover:text-primary transition-colors"> 
               chamodipiyadasa@icloud.com
              </a>
            </div>

          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone  className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a href="tel:+94778000768" className="text-muted-foreground hover:text-primary transition-colors"> 
               077 ##### ###
              </a>
            </div>

          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin  className="h-6 w-6 text-primary"/>
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <a  className="text-muted-foreground hover:text-primary transition-colors"> 
              Colombo ,Sri Lanka
              </a>
            </div>


          </div>

        </div>

        <div className="pt-8">
        <h4 className="font-medium mb-4"> Connect With Me</h4>
        <div className="flex space-x-4 justify-center">
          <a href=" http://www.linkedin.com/in/chamodi-piyadasa-b5248324a" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
            <Linkedin />
          </a>
          

        </div>
        </div>
      </div>

      <div className="bg-card p-8 rounded-lg shadow-xs">
        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>
           <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
           <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Message</label>
            <textarea
              
              id="message"
              name="message"
              required
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={cn(
              "cosmic-button w-full flex items-center justify-center gap-2",
              sending && 'opacity-70 cursor-not-allowed'
            )}
          >
            {sending ? 'Sending...' : 'Send Message'}
            <Send size={16} />
          </button>

          {sent && (
            <p className="text-center text-sm text-green-400 mt-2">Message prepared in your mail client.</p>
          )}
          {error && (
            <p className="text-center text-sm text-amber-400 mt-2">Failed to send via EmailJS — fallback mail link copied to clipboard.</p>
          )}
          </form>

      </div>
     </div>
      </div>
     
     
     
      </section>
  )}