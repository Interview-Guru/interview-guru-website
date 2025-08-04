"use client";

import BlogPageContentComponent from "@/components/BlogPageContentComponent";
import { FooterSection } from "@/components/Footer";
import { HeaderSection } from "@/components/Header";

const title = "Privacy Policy";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `

InterviewGuru.io ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services (collectively, the "Services").

### Information We Collect

#### Information You Provide
- **Account Information:** Full name and email address when you create an account
- **Payment Information:** Processed and stored by our payment provider Stripe. We do not store your payment details
- **Practice Session Data:** Your coding attempts, submissions, and progress
- **AI Interactions:** Conversations with our AI chatbot

#### Information Collected Automatically
- **Usage Data:** How you interact with our Services, including pages viewed and features used
- **Device Information:** Browser type, operating system, and device type
- **Analytics Data:** Performance metrics and usage patterns (no IP addresses collected)

### How We Use Your Information

We use your information to:
- Provide and improve our Services
- Process payments through Stripe
- Send you important account updates
- Send marketing communications (you can unsubscribe anytime)
- Analyze usage patterns to enhance our platform
- Respond to your support requests
- Comply with legal obligations

### Data Storage and Retention

- **AI Conversations:** Stored for 24 hours only
- **Practice Session Data:** Stored indefinitely unless you request deletion
- **Account Data:** Deleted upon account cancellation
- **Backups:** May be retained for disaster recovery purposes

### Third-Party Services

We use the following third-party services:
- **OpenAI (ChatGPT):** For AI-powered features
- **Stripe:** For payment processing ([Stripe Privacy Policy](https://stripe.com/privacy))
- **AWS:** For hosting and infrastructure
- **Judge0:** For code execution (if applicable)

### Your Rights

You have the right to:
- **Access:** Request a copy of your personal data
- **Delete:** Request deletion of your account and data
- **Export:** Receive your data in a portable format
- **Opt-out:** Unsubscribe from marketing communications

To exercise these rights, email us at contact@interviewguru.io

### Data Security

We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.

### International Data Transfers

We operate from Brisbane, Australia, but serve users globally. By using our Services, you consent to the transfer of your information to Australia and other countries where we operate.

### Marketing Communications

We may send you promotional emails about new features or updates. You can unsubscribe at any time by:
- Clicking the "unsubscribe" link in any marketing email
- Updating your preferences in your account settings

### Children's Privacy

We do not knowingly collect information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.

### Regional Disclosures

#### European Users (GDPR)
We process your data based on:
- Your consent
- Performance of our contract with you
- Our legitimate business interests

You have additional rights under GDPR, including the right to:
- Rectification of inaccurate data
- Restriction of processing
- Data portability
- Lodge a complaint with supervisory authorities

#### California Users
California residents have specific rights under state law. We do not sell personal information.

### Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by:
- Posting the updated policy on our website
- Sending an email to registered users

### Contact Us

For privacy-related questions or to exercise your rights, contact us at:

**Email:** contact@interviewguru.io  
**Location:** Brisbane, Queensland, Australia

---

By using InterviewGuru.io, you acknowledge that you have read and understood this Privacy Policy.
`;

const PrivacyPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default PrivacyPage;
