import { defineConfig } from 'unocss'


export default defineConfig({
    theme:{
        colors: {
            "primary" : "#008783",
            "secondary" : "#B48361",
        },
        fontFamily: {
            display: ['Montserrat', 'sans-serif']
        },
    },
    rules:[
        [/^mw-(\d+)$/, ([, d]) => ({ 'max-width': `${d}px` })],
        [/^mh-(\d+)$/, ([, d]) => ({ 'min-height': `${d}px` })],
        [/^w-(\d+)$/, ([, d]) => ({ 'width': `${d}px` })],
        [/^h-(\d+)$/, ([, d]) => ({ 'height': `${d}px` })],
        [/^text-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
        [/^grid-auto-(\d+)-(..)$/, ([, d, u]) => ({ 'grid-template-columns': `repeat(auto-fit, minmax(${d}${u}, 1fr))` })],
    ],
    blocklist: [
        'sr-only',
        'hidden',
        'container',
        'blur',
        'uppercase',
        'text-center',
        'block',
        'inline',
        'relative',
        'contents',
        'resize',
        'pb4',
        /^mb[1-4]$/,
    ]
})
