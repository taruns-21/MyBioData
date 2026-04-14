import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Icons = {
  JavaScript: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path fill="currentColor" d="M3 3h18v18H3V3zm11.75 14.71c.71 0 1.28-.21 1.71-.62.43-.41.64-1 .64-1.78v-4.16h-1.66v4.14c0 .32-.07.55-.21.68-.14.13-.37.2-.68.2-.31 0-.58-.08-.81-.25-.23-.17-.41-.45-.53-.84l-1.5.58c.24.63.63 1.15 1.16 1.55.53.41 1.16.61 1.88.61zm-6.19 0c.93 0 1.63-.26 2.12-.79.48-.52.73-1.25.73-2.18v-2.31h-1.63v2.33c0 .48-.12.83-.35 1.05-.23.23-.55.34-.96.34-.41 0-.74-.15-.99-.44-.25-.29-.42-.71-.52-1.28l-1.57.43c.18.88.58 1.53 1.2 1.95.62.42 1.28.63 1.97.63v.27zM9.46 8.5v3.1h1.56V8.5H9.46zm5.83 0v1.54h-1.55V8.5h1.55z" />
    </svg>
  ),
  TypeScript: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M1.5 1.5v21h21v-21h-21zm9 10.9V14h-2.1v4.3H6.3v-4.3H4.2v-1.6h6.3zm8.2 2.6c0 .7-.2 1.2-.6 1.7-.4.5-1 .8-1.7 1-.7.2-1.5.3-2.3.3-1.2 0-2.2-.2-3.1-.7v-2.2c.5.4 1 .7 1.5.8.5.2 1 .2 1.4.2.5 0 .8-.1 1.1-.2.3-.1.4-.3.4-.6 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.3L12 15c-.4-.2-.7-.4-.9-.6-.3-.2-.4-.5-.6-.8-.1-.3-.2-.6-.2-1 0-.7.3-1.3.8-1.7.5-.4 1.2-.7 2.1-.7.8 0 1.6.2 2.3.5v2c-.5-.3-1-.5-1.5-.6-.5-.1-.9-.1-1.3-.1-.4 0-.7.1-1 .2-.2.1-.4.3-.4.6 0 .2.1.4.2.5.1.1.3.2.5.3l1.8.7c.4.2.8.4 1.1.6s.5.5.7.8c.2.3.3.6.3 1v.1z"/>
    </svg>
  ),
  React: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Nextjs: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 180 180" width={size} height={size} {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M90 0a90 90 0 100 180 90 90 0 000-180zm0 168A78 78 0 1090 12a78 78 0 000 156z"/>
      <path fill="currentColor" d="M57.65 119V61.12h11v40.35l40.45-40.35h13v57.88h-11V78.65L71.65 119h-14z"/>
    </svg>
  ),
  Vuejs: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M2 3h4l6 10 6-10h4L12 21 2 3zm9.6 4L12 6.3l.4.7 3.7 6.4h-8.2l3.7-6.4z"/>
    </svg>
  ),
  Python: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <path fill="currentColor" d="M12.053 2c-3.15 0-5.556 1.408-5.556 4.398v2.54h5.667v1.127H5.431c-3.23 0-4.8 1.637-4.8 4.673 0 3.036 1.547 4.618 4.544 4.887l1.01.077v-3.284c0-2.457 1.954-4.5 4.417-4.5h4.155c1.472 0 2.668-1.22 2.668-2.698V6.262C17.425 3.328 14.869 2 12.053 2zm-1.848 1.688a1.1 1.1 0 1 1 0 2.202 1.1 1.1 0 0 1 0-2.202zm8.358 4.22h-1.026v3.255c0 2.458-1.956 4.502-4.418 4.502h-4.148c-1.47 0-2.668 1.218-2.668 2.695v2.96c0 2.934 2.556 4.258 5.373 4.258 3.149 0 5.555-1.408 5.555-4.398v-2.54H11.57v-1.128h6.732c3.23 0 4.8-1.635 4.8-4.67 0-3.036-1.547-4.62-4.544-4.89l-1.004-.076V7.908zm-1.85 13.305a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/>
    </svg>
  ),
  CSharp: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M12.35 15.68c-.61.6-1.53 1.05-2.73 1.05-2.6 0-4.46-1.95-4.46-4.73 0-2.81 1.86-4.76 4.46-4.76 1.22 0 2.14.47 2.75 1.07l1.08-1.39c-.93-.89-2.31-1.52-3.83-1.52-3.71 0-6.44 2.68-6.44 6.6s2.73 6.6 6.44 6.6c1.55 0 2.9-.62 3.82-1.55l-1.09-1.37zm7.32-6.52V7.52h-1.3v1.64h-1.9V7.52H15.2v1.64h-1v1.54h1v1.6h-1v1.53h1.27v1.7h1.27v-1.7h1.9v1.7h1.3v-1.7h1v-1.53h-1v-1.6h1v-1.54h-1.02zm-1.3 3.14h-1.9v-1.6h1.9v1.6z" />
    </svg>
  ),
  DotNet: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <text x="0" y="16" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="currentColor">.NET</text>
    </svg>
  ),
  PostgreSQL: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <path fill="currentColor" d="M21.579 17.514C23.012 16.038 24 14.12 24 12c0-4.636-3.764-8.4-8.4-8.4S7.2 7.364 7.2 12c0 2.12.988 4.038 2.421 5.514L8.508 19.492a9.6 9.6 0 0 1-2.508-6.6a9.6 9.6 0 1 1 19.2 0 9.6 9.6 0 0 1-2.508 6.6l-1.113-1.978zM12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z"/>
       <path fill="currentColor" d="M12 4.8a7.2 7.2 0 0 1 4.793 12.56L15.352 14.6a4.8 4.8 0 1 0-6.704 0L7.207 17.36A7.2 7.2 0 0 1 12 4.8z"/>
    </svg>
  ),
  MySQL: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <text x="1" y="16" fontSize="9" fontWeight="bold" fontFamily="monospace" fill="currentColor">MySQL</text>
    </svg>
  ),
  Firebase: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M3.7 18.23l7.98 4.49a.63.63 0 00.62 0l8.01-4.51L17.58 2.5a.63.63 0 00-1.13-.1z"/>
      <path fill="currentColor" d="M9.19 14.53l-3.32-3.34a.63.63 0 00-1.04.4zm2.46-9.17l-1.74 3.32 7.15 7.15z"/>
    </svg>
  ),
  Supabase: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M12.637 1.258l9.645 5.258c.956.52.956 1.954 0 2.474L12.637 14.25a1.298 1.298 0 0 1-1.274 0L1.718 8.99c-.956-.52-.956-1.954 0-2.474l9.645-5.258a1.298 1.298 0 0 1 1.274 0zM12 15.5l9.645-5.258v7.508c0 .886-.47 1.688-1.22 2.096l-7.788 4.24a1.29 1.29 0 0 1-1.274 0l-7.788-4.24a2.38 2.38 0 0 1-1.22-2.096v-7.508L12 15.5z"/>
    </svg>
  ),
  Solr: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <text x="2" y="16" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Solr</text>
    </svg>
  ),
  RabbitMQ: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <path fill="currentColor" d="M14.6 20.3h6v3h-6zM3.4 12V3h6l1.2 5V21H1c0-4 1-7 2.4-9z"/>
    </svg>
  ),
  Docker: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M13.98 10.99H16v2.01h-2.02v-2.01zm-3 0h2.02v2.01h-2.02v-2.01zm-3 0h2.01v2.01H7.98v-2.01zm-3 0h2.01v2.01H4.98v-2.01zm9-3H16v2H13.98v-2zm-3 0h2.02v2h-2.02v-2zm-3 0h2.01v2H7.98v-2zm-3 0h2.01v2H4.98v-2zM2 13h19a2 2 0 0 1 2 2c0 2-4 3.99-9.5 3.99S1 17 1 15c0-1.05.47-1.42 1-2z"/>
    </svg>
  ),
  Kubernetes: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
       <path fill="currentColor" d="M12 2L4 6.54v11L12 22l8-4.46v-11zM7 16l5-11 5 11z"/>
    </svg>
  ),
  Git: ({ size = 24, ...props }: IconProps) => (
    <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <path fill="currentColor" d="M11.602 1.432l-10 10a2.22 2.22 0 0 0 0 3.134l8.288 8.288a2.22 2.22 0 0 0 3.135 0l10-10a2.22 2.22 0 0 0 0-3.134l-8.288-8.288a2.22 2.22 0 0 0-3.135 0zm-4.7 6.136a1.996 1.996 0 0 1 2.824 0l.006.006v.004l.43.43a1.997 1.997 0 1 1-.956 1.344l-.326-.328v2.664a2.003 2.003 0 1 1-1.342.368v-3.07a2.003 2.003 0 0 1-.636-1.422zM14.6 15.6a1.996 1.996 0 1 1-2.825 0 1.996 1.996 0 0 1 2.825 0zm.082-5.412l-1.956 1.958a2 2 0 1 1-1.41-1.416l1.956-1.957a2 2 0 1 1 1.41 1.415z"/>
    </svg>
  )
};
