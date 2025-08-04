"use client";

import BlogPageContentComponent from "@/components/BlogPageContentComponent";
import { HeaderSection } from "@/components/Header";
import { FooterSection } from "@/components/Footer";

const title = "Refund & Cancellation Policy";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `
### Refund Policy

We offer a **24-hour refund window** for technical issues ONLY. Refunds are not available for change of mind, non-use, or any reason other than platform malfunction.

To request a refund:
- Contact us at contact@interviewguru.io within 24 hours of purchase
- Provide video evidence or screenshots showing the platform is not working
- Include your account email and transaction details
- Refunds will be processed within 5-7 business days

**Note**: Issues like slow performance, personal preferences, or expected features are not eligible for refunds.

### Cancellation Policy

You can cancel your subscription at any time. Upon cancellation:
- Your subscription remains active until the end of your current billing period
- You will not be charged for the next billing cycle
- No partial refunds are provided for unused portions
- You can continue using the service until your billing period ends

To cancel your subscription, go to your Profile > Subscription Settings in your account.

### Subscription Details

Our service is priced at:
- **Monthly Plan**: $29.99 USD per month
- **Quarterly Plan**: $69.99 USD per quarter

The subscription includes:
- Full access to InterviewGuru.io platform
- AI-powered interview preparation tools
- Customized learning pathways
- All future updates and features

### Failed Payments

If your payment fails, you have a 7-day grace period to update your payment information before account suspension.

### Duplicate Purchases

Accidental duplicate purchases on the same account will be refunded upon verification.

---

**Contact**: contact@interviewguru.io
`;

const RefundsPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default RefundsPage;
