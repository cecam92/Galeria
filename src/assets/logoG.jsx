import * as React from "react"

const logoG =(props)=>{
  return (
    <svg
      width={80}
      height={70}
      viewBox="183.942 -25.313 132.115 200.625"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-hole"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#f5bb16" result="black" />
          <feMorphology
            operator="dilate"
            radius={2}
            in="SourceGraphic"
            result="erode"
          />
          <feGaussianBlur in="erode" stdDeviation={4} result="blur" />
          <feOffset in="blur" dx={2} dy={2} result="offset" />
          <feComposite operator="atop" in="offset" in2="black" result="merge" />
          <feComposite
            operator="in"
            in="merge"
            in2="SourceGraphic"
            result="inner-shadow"
          />
        </filter>
      </defs>
      <g filter="url(#prefix__editing-hole)">
        <path
          d="M289.6 90.48q-.59 4.69-1.91 8.37-1.32 3.69-3.17 6.57 0 1.56.02 3.27.03 1.71.08 3.4.05 1.68.14 3.24.1 1.56.25 2.79l-11.28 1.66-2-3.76q-4.45 1.85-9.06 2.56-4.62.71-8.77.71-8.74 0-16.01-2.49-7.28-2.49-12.84-7.47-5.57-4.98-9.31-12.48-3.73-7.49-5.34-17.46 1.12.4 2.39.74 1.27.34 2.54.58.88-9.91 5.18-17.4 4.29-7.5 11.15-12.55 6.86-5.06 15.87-7.62 9.01-2.56 19.36-2.56 4.74 0 10.13.48 5.4.49 11.6 1.62-1.42 4.44-2.12 8.91-.71 4.47-.71 8.91 0 4.69.73 9.28-2.88-2.15-5.76-3.59t-5.64-2.3q-2.76-.85-5.4-1.22-2.63-.36-5.02-.36-4.55 0-9.28 1.22-4.74 1.22-8.96 3.58-4.23 2.37-7.57 5.82-3.35 3.44-5.1 7.88 2-.29 3.81-.71 1.8-.41 3.61-1-.29 2.15-.29 4.01 0 4.88 1.66 8.49 1.66 3.62 4.59 5.98 2.93 2.37 6.91 3.54 3.97 1.18 8.61 1.18h1.57q.78 0 1.56-.1-1.95-5.47-3.22-10.99-1.27-5.52-2.2-11.82 2.34.44 4.59.69 2.24.24 4.44.24 4.74 0 9.23-1.02 4.49-1.03 9.23-2.98-2.35 9.18-3.08 17.97 1.22-.83 2.37-1.78 1.15-.96 2.42-2.03z"
          fill="#f5bb16"
        />
      </g>
      <style />
    </svg>
  )
}

export default logoG
