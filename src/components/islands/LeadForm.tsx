'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string()
    .min(2, 'Nome precisa ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo')
    .regex(/^[a-zA-ZÀ-ÿ\\s]+$/, 'Nome deve conter apenas letras')
    .transform(val => val.trim()),
  email: z.string()
    .email('Email inválido')
    .max(254, 'Email muito longo')
    .transform(val => val.trim().toLowerCase()),
  phone: z.string()
    .min(10, 'Telefone muito curto')
    .max(20, 'Telefone muito longo')
    .regex(/^[\\d\\s\\-\\+\\(\\)]+$/, 'Telefone inválido')
    .transform(val => val.replace(/[^\\d+\\-]/g, '')),
  country: z.enum(['BR', 'PT', 'ES', 'OTHER'], {
    required_error: 'Selecione seu país'
  }),
  message: z.string()
    .max(500, 'Mensagem muito longa (máx 500 caracteres)')
    .transform(val => val.trim())
    .optional()
});

type LeadFormData = z.infer<typeof leadSchema>;

interface Props {
  whatsappNumber: string;
}

export default function LeadForm({ whatsappNumber }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields }
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      country: undefined,
      message: ''
    }
  });

  const onSubmit = (data: LeadFormData) => {
    const message = `Olá Patricia! Acabei de enviar uma mensagem pelo seu site.

*Nome:* ${data.name}
*Email:* ${data.email}
*Telefone:* ${data.phone}
*País:* ${data.country === 'BR' ? 'Brasil' : data.country === 'PT' ? 'Portugal' : data.country === 'ES' ? 'Espanha' : 'Outro'}

*Mensagem:*
${data.message || 'Sem mensagem adicional'}

Gostaria de saber mais sobre suas leituras de tarot.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className='text-center p-8 rounded-2xl bg-gold-950/30 border border-gold-800'>
        <div className='text-5xl mb-4'>✨</div>
        <h3 className='text-2xl font-[family-name:var(--font-heading)] text-gold-400 mb-2'>
          Mensagem Enviada!
        </h3>
        <p className='text-muted-foreground'>
          Sua mensagem foi aberta no WhatsApp. Complete o envio para que a Patricia possa responder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 max-w-md mx-auto'>
      <div>
        <label className='block text-sm font-semibold mb-2 text-foreground'>
          Nome *
        </label>
        <input
          {...register('name')}
          type='text'
          placeholder='Seu nome completo'
          className={`w-full px-4 py-3 bg-background-card border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'}`}
        />
        {errors.name && (
          <p className='text-red-500 text-sm mt-1' role='alert'>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold mb-2 text-foreground'>
          Email *
        </label>
        <input
          {...register('email')}
          type='email'
          placeholder='seu@email.com'
          className={`w-full px-4 py-3 bg-background-card border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'}`}
        />
        {errors.email && (
          <p className='text-red-500 text-sm mt-1' role='alert'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold mb-2 text-foreground'>
          Telefone/WhatsApp *
        </label>
        <input
          {...register('phone')}
          type='tel'
          placeholder='+55 11 99999-9999'
          className={`w-full px-4 py-3 bg-background-card border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'}`}
        />
        {errors.phone && (
          <p className='text-red-500 text-sm mt-1' role='alert'>{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold mb-2 text-foreground'>
          País *
        </label>
        <select
          {...register('country')}
          className={`w-full px-4 py-3 bg-background-card border-2 rounded-lg text-foreground transition-all focus:outline-none ${errors.country ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'}`}
        >
          <option value=''>Selecione seu país</option>
          <option value='BR'>Brasil 🇧🇷</option>
          <option value='PT'>Portugal 🇵🇹</option>
          <option value='ES'>Espanha 🇪🇸</option>
          <option value='OTHER'>Outro</option>
        </select>
        {errors.country && (
          <p className='text-red-500 text-sm mt-1' role='alert'>{errors.country.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-semibold mb-2 text-foreground'>
          Mensagem (opcional)
        </label>
        <textarea
          {...register('message')}
          rows={3}
          placeholder='Como posso te ajudar? Qual tema te interessa?'
          className='w-full px-4 py-3 bg-background-card border-2 border-border rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 resize-none'
        />
        {errors.message && (
          <p className='text-red-500 text-sm mt-1' role='alert'>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={!isValid}
        className={`w-full py-4 px-6 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-3 ${
          isValid
            ? 'bg-[#25D366] text-white hover:bg-[#20BD5A] active:bg-[#1DA851] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-105'
            : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
        }`}
      >
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
        </svg>
        {isValid ? 'Enviar via WhatsApp' : 'Preencha todos os campos'}
      </button>

      <p className='text-center text-xs text-muted-foreground'>
        Seus dados estão protegidos e não serão compartilhados.
      </p>
    </form>
  );
}