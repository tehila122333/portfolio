# Portfolio

A clean, professional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features an AI-powered chat assistant that answers questions about the portfolio content.

## Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS
- **Professional Dark Theme**: Clean, minimalistic design optimized for recruiters
- **AI Chat Assistant**: OpenAI-powered chat that answers questions about projects, skills, and experience
- **Fully Responsive**: Works seamlessly on desktop and mobile devices
- **Type-Safe**: Full TypeScript coverage for better development experience
- **Production-Ready**: Optimized for deployment on Vercel

## Pages

- **Home**: Hero section with featured projects and quick navigation
- **Projects**: Detailed view of all projects with technologies and highlights
- **Experience**: Professional work history and achievements
- **Skills**: Technical skills organized by category
- **Education**: Educational background
- **Ask My Portfolio**: AI chat assistant for portfolio Q&A

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenAI API key (for the AI chat feature)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - The `.env.local` file is already configured with your API key
   - If you need to change it, edit `.env.local` (this file is gitignored)
   - Get your API key from: https://platform.openai.com/api-keys

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customizing Your Portfolio

All portfolio content is centralized in one file for easy editing:

**File**: `data/portfolio.ts`

Update the following sections:
- **Personal Information**: Name, title, bio, contact details (lines 47-54)
- **Projects**: Add/edit your projects with descriptions and technologies (lines 56-93)
- **Experience**: Your work history and achievements (lines 95-112)
- **Skills**: Technical skills grouped by category (lines 114-133)
- **Education**: Academic background (lines 135-142)

Simply edit this file and your entire portfolio will update automatically across all pages.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add your environment variables in Vercel:
   - `OPENAI_API_KEY`: Your OpenAI API key
5. Deploy

Vercel will automatically deploy your portfolio with zero configuration.

### Environment Variables for Production

Make sure to add these environment variables in your deployment platform:
- `OPENAI_API_KEY`: Your OpenAI API key (get one at https://platform.openai.com/api-keys)

**IMPORTANT**: Never commit your actual API key to git. The `.env.local` file is gitignored for this reason.

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router pages
│   ├── api/chat/        # AI chat API endpoint
│   ├── ask/             # AI chat page
│   ├── education/       # Education page
│   ├── experience/      # Experience page
│   ├── projects/        # Projects page
│   ├── skills/          # Skills page
│   ├── layout.tsx       # Root layout with navigation
│   └── page.tsx         # Home page
├── components/          # Reusable React components
│   └── Navigation.tsx   # Navigation bar
├── data/                # Portfolio content
│   └── portfolio.ts     # All portfolio data (edit this!)
├── public/              # Static assets
├── .env.example         # Environment variables template
├── .env.local           # Your actual API key (gitignored)
└── README.md            # This file
```

## Tech Stack Details

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **AI**: OpenAI API (GPT-4o-mini)
- **Deployment**: Vercel-ready
- **Font**: Inter (Google Fonts)

## Next Steps

1. **Update Portfolio Content**: Edit `data/portfolio.ts` with your actual information
2. **Test the AI Chat**: Run `npm run dev` and visit `/ask` to test the AI assistant
3. **Customize Styling**: Modify colors in `app/globals.css` if desired
4. **Deploy**: Push to GitHub and deploy on Vercel

## License

This project is open source and available for personal use.
