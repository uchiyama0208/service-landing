import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'NightBaseの導入やデモに関するお問い合わせを受け付けています。',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Section title="NightBaseへのお問い合わせ" subtitle="Contact" align="left">
        <p className="max-w-2xl text-base text-slate-600">
          店舗やグループでの導入をご検討中の方は、以下のフォームよりご連絡ください。2営業日以内に担当者からご連絡いたします。
        </p>
      </Section>
      <Section className="pt-0" align="left">
        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
