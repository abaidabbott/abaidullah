import { calendlyUrl } from "../../lib/booking";
export interface EmailTemplate {
    id: string
    name: string
    subject: string
    content: string
    variables: string[]
}

export interface EmailData {
    to: string
    subject: string
    template?: string
    variables?: Record<string, string>
    attachments?: Array<{
        filename: string
        content: string
        type: string
    }>
}

export const emailTemplates: Record<string, EmailTemplate> = {
    quote_form: {
        id: "quote_form",
        name: "Project Quote Form",
        subject: "Project Quote Request",
        content: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Project Quote Request</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .form-section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .button { display: inline-block; background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Project Quote Request</h1>
            <p>Let's bring your vision to life!</p>
        </div>
        
        <div class="content">
            <p>Hello {{userName}},</p>
            
            <p>Thank you for your interest! We're excited to learn about your project and provide you with a detailed quote.</p>
            
            <div class="form-section">
                <h3>📋 Project Details Form</h3>
                <p>Please fill out our comprehensive project form to help us understand your requirements:</p>
                
                <a href="https://abaidbutt.website/#contact" class="button">
                    Complete Project Form →
                </a>
                
                <p style="margin-top: 15px; font-size: 14px; color: #666;">
                    ⏱️ Takes 5-10 minutes to complete<br>
                    🔒 Your information is secure and confidential
                </p>
            </div>
            
            <div class="form-section">
                <h3>💬 What's Next?</h3>
                <ul>
                    <li><strong>Form Review:</strong> Our team will analyze your requirements (24 hours)</li>
                    <li><strong>Initial Quote:</strong> You'll receive a preliminary estimate (48 hours)</li>
                    <li><strong>Consultation:</strong> We'll schedule a call to discuss details</li>
                    <li><strong>Final Proposal:</strong> Detailed project proposal with timeline</li>
                </ul>
            </div>
            
            <div class="form-section">
                <h3>📞 Need Immediate Assistance?</h3>
                <p>Our team is available to answer any questions:</p>
                <ul>
                    <li>📧 Email: bestabaidullahbutt@gmail.com</li>
                    <li>💬 Live Chat: Available on the website</li>
                    <li>WhatsApp: Open it from the website contact button so the correct regional number is selected</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p>Best regards,<br><strong>Abaid Ullah</strong></p>
            <p>Driving Tomorrow's Possibilities</p>
        </div>
    </div>
</body>
</html>
    `,
        variables: ["userName", "sessionId"],
    },

    contact_info: {
        id: "contact_info",
        name: "Contact Information",
        subject: " Contact Information & Next Steps",
        content: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Contact Information</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .contact-card { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-left: 4px solid #14b8a6; }
        .button { display: inline-block; background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📞 Contact Information</h1>
            <p>Multiple ways to reach our team</p>
        </div>
        
        <div class="content">
            <p>Hello {{userName}},</p>
            
            <p>Here are all the ways you can connect with me:</p>
            
            <div class="contact-card">
                <h3>🚀 Immediate Support</h3>
                <p><strong>📧 Email:</strong> bestabaidullahbutt@gmail.com</p>
                <p><strong>💬 Live Chat:</strong> Available on the website</p>
                <p><strong>WhatsApp:</strong> Open it from the website contact button so the correct regional number is selected.</p>
                <p><strong>⏰ Response Time:</strong> Within 2 hours during business hours</p>
            </div>
            
            <div class="contact-card">
                <h3>📅 Schedule a Meeting</h3>
                <p>Book a consultation that fits your schedule:</p>
                <a href="${calendlyUrl}" class="button">Book a Meeting</a>
            </div>
            
            <h3>🌍 International Collaboration</h3>
            <p>I have worked with international teams and companies in the USA, Canada, Europe and Asia, including the UAE. My experience includes work with Summitcrew and Snootme.</p>

            <div class="contact-card">
                <h3>🎯 What's Your Next Step?</h3>
                <p>Choose the option that works best for you:</p>
                <a href="mailto:bestabaidullahbutt@gmail.com?subject=Project Inquiry" class="button">Send Email</a>
                <a href="https://abaidbutt.website/#contact" class="button">Open WhatsApp</a>
                <a href="https://abaidbutt.website/#contact" class="button">Start Live Chat</a>
            </div>
        </div>
    </div>
</body>
</html>
    `,
        variables: ["userName"],
    },

    calendar_link: {
        id: "calendar_link",
        name: "Meeting Scheduler",
        subject: "Schedule Your Consultation with me",
        content: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Meeting Scheduler</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .meeting-option { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border-left: 4px solid #14b8a6; }
        .button { display: inline-block; background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        .prep-list { background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📅 Schedule Your Consultation</h1>
            <p>Let's discuss your project in detail</p>
        </div>
        
        <div class="content">
            <p>Hello {{userName}},</p>
            
            <p>Thank you for your interest in scheduling a meeting with me! Open my Calendly page to see the available meeting options and times.</p>

            <div class="meeting-option">
                <h3>Meet with Abaid Ullah</h3>
                <p>Choose an available time and confirm your booking on Calendly.</p>
                <a href="${calendlyUrl}" class="button">Book a Meeting →</a>
            </div>

            <div class="prep-list">
                <h3>📋 How to Prepare for Your Meeting</h3>
                <ul>
                    <li>✅ Brief project description or goals</li>
                    <li>✅ Current challenges or pain points</li>
                    <li>✅ Timeline expectations</li>
                    <li>✅ Budget considerations (if applicable)</li>
                    <li>✅ Key stakeholders who should be involved</li>
                </ul>
            </div>
            
            <div class="meeting-option">
                <h3>🚀 What Happens Next?</h3>
                <ol>
                    <li><strong>Confirmation:</strong> You'll receive a calendar invite with meeting details</li>
                    <li><strong>Preparation:</strong> We'll send a brief questionnaire to maximize our time</li>
                    <li><strong>Meeting:</strong> Productive discussion about your project</li>
                    <li><strong>Follow-up:</strong> Detailed proposal and next steps within 24 hours</li>
                </ol>
            </div>
            
            <p><strong>Questions before scheduling?</strong> Reply to this email or open WhatsApp from the website contact button.</p>
        </div>
    </div>
</body>
</html>
    `,
        variables: ["userName"],
    },

    brochure: {
        id: "brochure",
        name: "Company Brochure",
        subject: " Company Information & Capabilities",
        content: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title> Company Brochure</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0; }
        .service-card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; }
        .button { display: inline-block; background: linear-gradient(135deg, #14b8a6, #06b6d4); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Abaid Ullah</h1>
            <p>Driving Tomorrow's Possibilities</p>
        </div>
        
        <div class="content">
            <p>Hello {{userName}},</p>
            
            <p>Thank you for your interest! Here is an overview of my experience and services.</p>
            
            <h3>🌟 About Me</h3>
            <p>I’m Abaid Ullah, a full-stack developer and AI engineer. I have worked with international teams and companies in the USA, Canada, Europe and Asia, including the UAE. My experience includes work with Summitcrew and Snootme.</p>

            <h3>💼 My Services</h3>
            <div class="service-grid">
                <div class="service-card">
                    <h4>🌐 Web Apps</h4>
                    <p>React, Next.js, Vue.js, Full-stack solutions</p>
                </div>
                <div class="service-card">
                    <h4>📱 Mobile Apps</h4>
                    <p>iOS, Android, React Native, Flutter</p>
                </div>
                <div class="service-card">
                    <h4>🤖 AI & ML</h4>
                    <p>Custom AI solutions, Chatbots, Analytics</p>
                </div>
                <div class="service-card">
                    <h4>☁️ DevOps & Cloud</h4>
                    <p>AWS, Azure, GCP, CI/CD, Automation</p>
                </div>
                <div class="service-card">
                    <h4>🔒 Cybersecurity</h4>
                    <p>Security audits, Compliance, Consulting</p>
                </div>
                <div class="service-card">
                    <h4>🎨 UI/UX Design</h4>
                    <p>User-centered design, Prototyping</p>
                </div>
            </div>
            
            <h3>🏆 Why Choose Me?</h3>
            <ul>
                <li><strong>Proven Expertise:</strong> 10+ years of industry experience</li>
                <li><strong>International Experience:</strong> Collaboration with teams and companies across the USA, Canada, Europe and Asia, including the UAE</li>
                <li><strong>Agile Methodology:</strong> Fast, iterative development</li>
                <li><strong>24/7 Support:</strong> Round-the-clock assistance</li>
                <li><strong>Scalable Solutions:</strong> From startups to enterprises</li>
                <li><strong>Quality Assurance:</strong> Rigorous testing and QA processes</li>
            </ul>
            
            <h3>📞 Ready to Get Started?</h3>
            <p>Let's discuss how we can help transform your business:</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="${calendlyUrl}" class="button">Book a Meeting</a>
                <a href="https://abaidbutt.website/#contact" class="button">Get Project Quote</a>
                <a href="mailto:bestabaidullahbutt@gmail.com" class="button">Send Email</a>
            </div>
            
            <p style="text-align: center; margin-top: 30px;">
                <strong>Contact Information:</strong><br>
                📧 bestabaidullahbutt@gmail.com<br>
                WhatsApp: open from the website contact button<br>
                🌐 abaidbutt.website
            </p>
        </div>
    </div>
</body>
</html>
    `,
        variables: ["userName"],
    },
}

export class EmailService {
    private static instance: EmailService

    public static getInstance(): EmailService {
        if (!EmailService.instance) {
            EmailService.instance = new EmailService()
        }
        return EmailService.instance
    }

    async sendEmail(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
        try {


            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Generate template content if template is specified
            let content = ""
            if (emailData.template && emailTemplates[emailData.template]) {
                content = this.generateEmailContent(emailData.template, emailData.variables || {})
            }

            // In production, integrate with services like:
            // - SendGrid
            // - Mailgun
            // - AWS SES
            // - Resend
            // - Postmark

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...emailData,
                    content,
                }),
            })

            if (response.ok) {
                const result = await response.json()
                return { success: true, messageId: result.messageId }
            } else {
                return { success: false, error: "Failed to send email" }
            }
        } catch (error) {
            console.error("Email sending error:", error)
            return { success: false, error: "Email service unavailable" }
        }
    }

    private generateEmailContent(templateId: string, variables: Record<string, string>): string {
        const template = emailTemplates[templateId]
        if (!template) {
            throw new Error(`Template ${templateId} not found`)
        }

        let content = template.content

        // Replace variables in template
        template.variables.forEach((variable) => {
            const value = variables[variable] || `{{${variable}}}`
            content = content.replace(new RegExp(`{{${variable}}}`, "g"), value)
        })

        return content
    }

    getAvailableTemplates(): EmailTemplate[] {
        return Object.values(emailTemplates)
    }
}
