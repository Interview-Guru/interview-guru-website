import { FooterSection, HeaderSection } from "@/app/page";
import BlogPageContentComponent from "@/components/BlogPageContentComponent";

const title = "Terms of Service";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `
### 1. Agreement to Terms

By accessing or using InterviewGuru.io ("we," "us," "our," "Service," or "Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.

### 2. Description of Service

InterviewGuru.io is an AI-powered interview preparation platform that provides:
- Practice questions for technical interviews
- AI-powered feedback on your responses
- Community-customized learning pathways
- Timeframe-specific preparation plans
- Company-specific interview preparation

### 3. Account Registration

#### 3.1 Account Creation
To access our Service, you must create an account by providing:
- Your full name
- A valid email address

#### 3.2 Account Security
- You are responsible for maintaining the confidentiality of your account credentials
- You agree to notify us immediately of any unauthorized access to your account
- Each account is strictly for individual use only
- Sharing accounts with others is prohibited and may result in account termination

#### 3.3 Accuracy of Information
You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.

### 4. Subscription and Payment

#### 4.1 Subscription Plans
We offer the following subscription options:
- Monthly subscription
- Quarterly subscription

#### 4.2 Payment Terms
- All subscriptions are paid in advance
- Payments are processed through our third-party payment processor, Stripe
- By subscribing, you authorize us to charge your payment method on a recurring basis

#### 4.3 Billing Cycle
Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.

#### 4.4 Cancellation
- You may cancel your subscription at any time
- Upon cancellation, you will retain access to the Service until the end of your current billing period
- No partial refunds will be provided for unused portions of a subscription period

#### 4.5 Refunds
Please refer to our separate Refund and Cancellation Policy page for detailed information about refunds.

### 5. Use of Service

### 5.1 Acceptable Use
You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree not to:
- Share your account with others
- Use the Service for any illegal or unauthorized purpose
- Attempt to probe, scan, or test the vulnerability of our systems
- Interfere with or disrupt the Service or servers

#### 5.2 No Usage Limits
Currently, there are no limits on the number of practice questions, AI feedback requests, or other features you can access during your subscription period.

### 6. Intellectual Property Rights

#### 6.1 Our Content
All content provided on InterviewGuru.io, including but not limited to:
- Interview questions
- AI algorithms and responses
- Learning pathways
- Course materials (when available)
- Platform design and functionality

is owned by InterviewGuru.io and is protected by copyright, trademark, and other intellectual property laws.

#### 6.2 Limited License
We grant you a limited, non-exclusive, non-transferable license to access and use our Service for your personal, non-commercial use only.

#### 6.3 Restrictions
You may not:
- Copy, modify, or distribute our content
- Use our content for commercial purposes
- Create derivative works based on our content

### 7. User Interactions and Data

#### 7.1 AI Chatbot Interactions
- Your conversations with our AI chatbot are stored for 24 hours
- We may use anonymized interaction data to improve our Service

#### 7.2 Practice Session Data
- Your practice session results, attempts, and progress are saved indefinitely in your account
- You can toggle the status of your submissions as needed
- This data is accessible only to you through your account

### 8. Privacy and Data Protection

#### 8.1 Data Collection
We collect only the information necessary to provide our Service:
- Full name and email address (during registration)
- Payment information (processed by Stripe)
- Practice session data and AI interaction logs

#### 8.2 Data Use
We handle all user data in accordance with applicable laws. We do not sell, rent, or share your personal information with third parties except as necessary to provide our Service.

#### 8.3 Third-Party Integrations
Our Service integrates with:
- OpenAI (ChatGPT) for AI-powered features
- Stripe for payment processing
- AWS for hosting and infrastructure

### 9. Disclaimers

#### 9.1 No Employment Guarantee
InterviewGuru.io is an educational and preparation tool. We do not guarantee:
- Job placement or employment
- Interview success
- Specific outcomes from using our Service

Your success depends on many factors beyond our control, including your effort, skills, and market conditions.

#### 9.2 Service Availability
While we strive to provide uninterrupted access to our Service, we do not guarantee:
- Continuous, uninterrupted, or error-free operation
- That defects will be corrected
- That the Service is free of viruses or harmful components

#### 9.3 Browser and Device Support
Our Service is designed as a standard web application and should work on most modern browsers and devices. However, we cannot guarantee compatibility with all browsers, devices, or operating systems.

### 10. Limitation of Liability

To the maximum extent permitted by law, InterviewGuru.io shall not be liable for:
- Any indirect, incidental, special, consequential, or punitive damages
- Loss of profits, data, use, goodwill, or other intangible losses
- Damages exceeding the amount you paid to us in the twelve (12) months prior to the claim

### 11. Indemnification

You agree to indemnify and hold harmless InterviewGuru.io, its operators, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
- Your use of the Service
- Your violation of these Terms
- Your violation of any rights of another party

### 12. Modifications to Service and Terms

#### 12.1 Service Modifications
We reserve the right to modify, suspend, or discontinue any part of our Service at any time without notice.

#### 12.2 Terms Modifications
We may update these Terms from time to time. We will notify you of any changes by:
- Posting the new Terms on this page
- Updating the "Last Updated" date
- Sending an email notification (for material changes)

Your continued use of the Service after changes constitutes acceptance of the modified Terms.

### 13. Termination

#### 13.1 Termination by You
You may terminate your account at any time by canceling your subscription and requesting account deletion.

#### 13.2 Termination by Us
We reserve the right to suspend or terminate your account if:
- You violate these Terms
- You engage in fraudulent or illegal activities
- You share your account with others
- We discontinue the Service

### 14. General Provisions

#### 14.1 Governing Law
These Terms shall be governed by the laws of Queensland, Australia, without regard to its conflict of law provisions.

#### 14.2 Dispute Resolution
Any disputes arising from these Terms or your use of the Service shall be resolved through good faith negotiations. If negotiations fail, disputes shall be submitted to the courts of Queensland, Australia.

#### 14.3 Severability
If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.

### 14.4 Entire Agreement
These Terms constitute the entire agreement between you and InterviewGuru.io regarding the use of our Service.

#### 14.5 No Waiver
Our failure to enforce any right or provision of these Terms shall not be considered a waiver of those rights.

#### 14.6 Assignment
You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction.

### 15. Contact Information

If you have any questions about these Terms and Conditions, please contact us at:

**InterviewGuru.io**  
Brisbane, Queensland, Australia  
Email: contact@interviewguru.io

---

By using InterviewGuru.io, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
`;

const TermsPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default TermsPage;
