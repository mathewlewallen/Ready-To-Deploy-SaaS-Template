import { cn } from "../../client/cn"
import React from "react"
import { routes, Link as WaspRouterLink } from 'wasp/client/router';

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    quote: string
    href?: string
  }>
  className?: string
}

export interface TestimonialAuthor {
  name: string;
  role: string;
  avatarSrc: string;
  socialUrl: string;
}

export function TestimonialCard({ author, quote, href }: { author: TestimonialAuthor; quote: string; href?: string }) {
  return (
<figure className="relative bg-gradient-to-b from-boxdark to-boxdark-2  w-[500px] flex-none rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6">
  <blockquote className="text-lg dark:text-white">
    <p>{quote}</p>
  </blockquote>
  <figcaption className=" mt-6 text-base text-white">
    <a href={href || author.socialUrl} className="flex items-center gap-x-2">
      <img src={author.avatarSrc} alt={author.name} className="h-12 w-12 rounded-full" />
      <div>
        <div className="font-semibold hover:underline">{author.name}</div>
        <div className="mt-1">{author.role}</div>
      </div>
    </a>
  </figcaption>
</figure>

  );
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <div className="text-center">
          <WaspRouterLink 
  to={routes.ContactPageRoute.to} 
  className="group relative inline-flex items-center px-8 py-4 rounded-lg 
            bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 
            border border-primary/20 hover:border-primary/40
            shadow-lg hover:shadow-primary/20 transition-all duration-300"
>
  <div className="flex items-center space-x-3">
    <svg 
      className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
    <span className="text-xl font-medium text-primary">
      Share your story with us to be featured here!
    </span>
  </div>
</WaspRouterLink>
  </div>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}