'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const paymentSchema = z.object({
  name: z.string()
    .min(2, 'Nome precisa ter pelo menos 2 caracteres')
    .transform(val => val.trim()),
  email: z.string()
    .email('Email inválido')
    .transform(val => val.trim().toLowerCase()),
  package: z.enum(['brazil', 'europe'], {
    required_error: 'Selecione um pacote'
  }),
  nif: z.string()
    .regex(/^[0-9]{9}$/, 'NIF deve ter 9 dígitos')
    .optional()
    .or(z.literal(''))
}).refine(data => {
  if (data.package === 'europe' && !data.nif) {
    return false;
  }
  return true;
}, {
  message: 'NIF é obrigatório para clientes europeus',
  path: ['nif']
});

type PaymentFormData = z.infer<typeof paymentSchema>;

const packages = {
  brazil: {
    name: 'Leitura Brasil',
    price: 'R$ 260,00',
    description: 'Sessão completa + fotos + áudio + análise escrita'
  },
  europe: {
    name: 'Leitura Europa',
    price: '€ 150,00',
    description: 'Complete session + photos + audio + written analysis'
  }
};

export default function PaymentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    mode: 'onChange'
  });

  const selectedPackageValue = watch('package');

  const onSubmit = async (data: PaymentFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          package: data.package,
          email: data.email,
          name: data.name,
          country: data.package === 'brazil' ? 'BR' : 'PT',
          nif: data.nif || undefined
        })
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      if (result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao processar pagamento');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='space-y-8 max-w-2xl mx-auto'>
      <fieldset>
        <legend className='sr-only'>Selecione um pacote de leitura</legend>
        <div className='grid md:grid-cols-2 gap-4'>
          {Object.entries(packages).map(([key, pkg]) => (
            <button
              key={key}
              type='button'
              role='radio'
              aria-checked={selectedPackageValue === key}
              onClick={() => {
                setValue('package', key as 'brazil' | 'europe');
              }}
              className={`p-6 rounded-2xl border-2 transition-all text-left ${
                selectedPackageValue === key
                  ? 'border-gold-500 bg-gold-950/30'
                  : 'border-border bg-background-card hover:border-gold-700'
              }`}
            >
              <div className='text-2xl font-bold text-gold-400 font-[family-name:var(--font-display)] mb-1'>
                {pkg.price}
              </div>
              <div className='font-semibold text-foreground mb-2'>{pkg.name}</div>
              <div className='text-sm text-muted-foreground'>{pkg.description}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {selectedPackageValue && (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 p-6 bg-background-card rounded-2xl border border-border' aria-label='Formulário de pagamento'>
          <h3 className='text-xl font-[family-name:var(--font-heading)] text-center mb-4'>
            Dados para Pagamento
          </h3>

          <div>
            <label htmlFor='payment-name' className='block text-sm font-semibold mb-2 text-foreground'>
              Nome completo *
            </label>
            <input
              {...register('name')}
              id='payment-name'
              type='text'
              placeholder='Seu nome completo'
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'payment-name-error' : undefined}
              aria-required='true'
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-border focus:border-gold-500'
              }`}
            />
            {errors.name && <p id='payment-name-error' className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor='payment-email' className='block text-sm font-semibold mb-2 text-foreground'>
              Email *
            </label>
            <input
              {...register('email')}
              id='payment-email'
              type='email'
              placeholder='seu@email.com'
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'payment-email-error' : undefined}
              aria-required='true'
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-border focus:border-gold-500'
              }`}
            />
            {errors.email && <p id='payment-email-error' className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          {selectedPackageValue === 'europe' && (
            <div>
              <label htmlFor='payment-nif' className='block text-sm font-semibold mb-2 text-foreground'>
                NIF / Tax ID *
              </label>
              <input
                {...register('nif')}
                id='payment-nif'
                type='text'
                placeholder='123456789'
                maxLength={9}
                aria-invalid={!!errors.nif}
                aria-describedby={errors.nif ? 'payment-nif-error' : 'nif-hint'}
                aria-required='true'
                className={`w-full px-4 py-3 bg-background border-2 rounded-lg text-foreground placeholder:text-muted-foreground transition-all focus:outline-none ${
                  errors.nif ? 'border-red-500' : 'border-border focus:border-gold-500'
                }`}
              />
              <p id='nif-hint' className='text-xs text-muted-foreground mt-1'>
                Obrigatório para emissão de fatura em Portugal
              </p>
              {errors.nif && <p id='payment-nif-error' className='text-red-500 text-sm mt-1'>{errors.nif.message}</p>}
            </div>
          )}

          {error && (
            <div className='p-4 bg-red-950/30 border border-red-800 rounded-lg text-red-400 text-sm' role='alert' aria-live='assertive'>
              {error}
            </div>
          )}

          <button
            type='submit'
            disabled={!isValid || isLoading}
            className={`w-full py-4 px-6 rounded-full font-semibold text-base transition-all duration-200 ${
              isValid && !isLoading
                ? 'bg-gold-500 text-background hover:bg-gold-400 shadow-[0_0_30px_rgba(212,161,44,0.3)] hover:shadow-[0_0_40px_rgba(212,161,44,0.5)]'
                : 'bg-muted text-muted-foreground cursor-not-allowed opacity-50'
            }`}
          >
            {isLoading ? 'Processando...' : 'Pagar com Cartão'}
          </button>

          <p className='text-center text-xs text-muted-foreground'>
            Pagamento seguro processado pela Stripe
          </p>
        </form>
      )}

      <div className='text-center'>
        <p className='text-muted-foreground mb-4'>Prefere pagar via transferência?</p>
        <a
          href='#contato'
          className='text-gold-400 hover:text-gold-300 underline'
        >
          Entre em contato para outras formas de pagamento
        </a>
      </div>
    </div>
  );
}