import React, { useId } from "react";

interface Features {
  name: string
  description: string
  icon: string
  href: string | null
}

export default function Features({ features }: { readonly features: Features[] }) {
  return (
    <div className="pt-20 grid grid-cols-1 max-w-7xl transparent mx-auto">
      <div className="max-w-7xl mx-auto mb-10 relative">
        <div className="relative bg-gradient-to-b from-boxdark to-boxdark2 p-6 rounded-3xl overflow-hidden transition-transform transform hover:scale-105">
        <Grid size={25} />
        <h2 className="text-2xl font-bold text-white">
            .context
          </h2>
          <p className=" text-neutral-400 mt-4">
            The .context ecosystem is designed to enhance developer productivity
            by maintaining your project&apos;s real-time metadata, enabling seamless
            collaboration, and providing actionable insights.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative bg-gradient-to-b from-boxdark to-boxdark2 p-6 rounded-3xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="absolute top-4 left-4 text-primary text-2xl">
              {feature.icon}
              </div>
            <Grid size={25} />
            <p className="pt-5 text-base sm:text-lg font-bold text-white relative z-20">
              {feature.name}
            </p>
            <p className="text-sm sm:text-base text-neutral-400 mt-4 relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface GridProps {
  readonly size?: number;
}

export const Grid = ({ size }: GridProps) => {
  const p: [number, number][] = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps {
  readonly width: number;
  readonly height: number;
  readonly x: string;
  readonly y: string;
  readonly squares?: readonly [number, number][];
  readonly className?: string;
}

export function GridPattern({ width, height, x, y, ...props }: GridPatternProps) {
  const patternId = useId();

  const uniqueSquares = [
    { id: `square-${Math.random()}`, x: 7, y: 6 },
    { id: `square-${Math.random()}`, x: 7, y: 6 },
    { id: `square-${Math.random()}`, x: 7, y: 6 },
    { id: `square-${Math.random()}`, x: 7, y: 6 },
    { id: `square-${Math.random()}`, x: 7, y: 6 },
  ];

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {uniqueSquares.map(square => (
        <rect
          key={square.id}
          strokeWidth="0"
          width={width + 1}
          height={height + 1}
          x={square.x * width}
          y={square.y * height}
        />
      ))}
    </svg>
  );
}