# 🎨 VibeForge Frontend Guidelines (front-giba.md)

Este documento serve como o guia mestre para o desenvolvimento e manutenção do ecossistema **VibeForge**. Siga estas diretrizes para garantir consistência, performance e a estética "Premium Tech" da plataforma.

---

## 🚀 Arquitetura e Tech Stack

- **Framework:** Next.js 15+ (App Router).
- **Estilização:** Tailwind CSS v4 (Mobile-first).
- **Animações:** `motion/react` (Framer Motion).
- **Ícones:** `lucide-react` (Sempre use estes para consistência).
- **Componentes UI:** Radix UI (Primitivos acessíveis).
- **Gerenciamento de Estado:** React Context para UI, TanStack Query para dados.

---

## 💎 Princípios de Design (The Vibe)

### 1. Paleta de Cores (Neon Cyber)
- **Navy 950 (`#050505`):** Fundo principal.
- **Navy 900 (`#0a0a0a`):** Cards e superfícies.
- **Neon Lime (`#bef264`):** Ações primárias (Studio, Sucesso).
- **Neon Cyan (`#22d3ee`):** Ações secundárias (Arena, Info).
- **Neon Gold (`#fbbf24`):** Marketplace, Premium, Moeda (VibeCredits).
- **Neon Red (`#ef4444`):** Admin, Erros, Alertas.

### 2. Tipografia
- **Display:** Fontes com tracking apertado e peso bold para títulos (ex: `font-display`).
- **Mono:** Use para dados técnicos, contadores e labels secundárias (ex: `font-mono`).
- **Sans:** Inter para corpo de texto e legibilidade.

### 3. Efeitos Visuais
- **Glassmorphism:** `bg-white/5 backdrop-blur-xl border border-white/10`.
- **Glows:** Use `shadow-[color]/20` para dar profundidade aos elementos neon.
- **Borders:** Bordas sutis são essenciais. Nunca use bordas sólidas pesadas.

---

## 🛠️ Recomendações para o Programador

### Estrutura de Componentes
- **Atomicidade:** Mantenha componentes pequenos. Se um componente passar de 150 linhas, quebre-o.
- **Server Components:** Use por padrão. `'use client'` apenas para interatividade.
- **Layouts:** O `StudioLayout` deve envolver todas as páginas internas para manter a barra lateral e o cabeçalho consistentes.

### Performance
- **Imagens:** Sempre use o componente `next/image` com `referrerPolicy="no-referrer"`.
- **Loading States:** Use Skeletons ou o componente de "Forging Art" (Zap animado) para feedbacks de carregamento.
- **Math.random:** Nunca use no render. Gere IDs ou use índices estáveis.

### Interatividade
- **Feedback Tátil:** Adicione `hover:scale-[1.02] active:scale-[0.98] transition-all` em todos os botões.
- **Modais:** Use Radix Dialog com `AnimatePresence` para transições suaves.

---

## 📂 Organização de Arquivos

- `/components/ui`: Componentes base reutilizáveis.
- `/components/studio`: Componentes específicos da ferramenta de geração.
- `/app/(pages)`: Rotas da aplicação.
- `/lib/utils.ts`: Utilitários de Tailwind (`cn`).

---

## 🎯 Próximos Passos (Backlog)
1. Implementar integração real com a API do Gemini para geração de prompts.
2. Conectar o Marketplace ao banco de dados Prisma.
3. Criar sistema de notificações em tempo real via WebSockets para vendas e alertas da Arena.
4. Implementar sistema de "Dark/Light" mode (embora o Dark seja o foco).

---
*Documento gerado para direcionar a excelência técnica do VibeForge.*
