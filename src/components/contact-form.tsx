'use client';

import { FormEvent, useState } from 'react';
import { Button } from './ui/button';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('success');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          お名前
          <input
            required
            name="name"
            placeholder="例: NightBase 太郎"
            className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-brand-primary focus:ring-brand-primary"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          メールアドレス
          <input
            required
            type="email"
            name="email"
            placeholder="example@nightbase.jp"
            className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-brand-primary focus:ring-brand-primary"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
        ご相談内容
        <textarea
          required
          name="message"
          rows={6}
          placeholder="課題やご相談内容をご記入ください。"
          className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-700 focus:border-brand-primary focus:ring-brand-primary"
        />
      </label>
      <Button type="submit">送信する</Button>
      {status === 'success' && (
        <p className="text-sm text-brand-secondary">
          送信が完了しました。担当者より2営業日以内にご連絡いたします。
        </p>
      )}
    </form>
  );
}
