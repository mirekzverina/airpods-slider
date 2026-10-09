import type { Product } from '../types/product';

import airpods1 from '../assets/images/products/airpods-1.png';
import airpods2 from '../assets/images/products/airpods-2.png';
import airpods3 from '../assets/images/products/airpods-3.png';
import airpods4 from '../assets/images/products/airpods-4.png';
import airpods5 from '../assets/images/products/airpods-5.png';
import airpods6 from '../assets/images/products/airpods-6.png';

export const products: Product[] = [
    {
        id: 1,
        name: 'AirPods Ultra',
        shortName: 'Ultra',
        series: 'Wireless Series',
        image: airpods1,
        description:
            'Next-level sound, redefined comfort and a design that moves with you. AirPods Ultra deliver an immersive audio experience for everyday life.',
        features: [
            {
                label: 'Immersive Sound',
                icon: 'sound',
            },
            {
                label: 'All-Day Comfort',
                icon: 'comfort',
            },
            {
                label: 'Adaptive Audio',
                icon: 'adaptive',
            },
            {
                label: '6h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '6 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.3',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#7c3aed',
        glow: '#ec4899',
    },
    {
        id: 2,
        name: 'AirPods Pulse',
        shortName: 'Pulse',
        series: 'Wireless Series',
        image: airpods2,
        description:
            'A bold audio experience built around clarity, comfort and expressive design. AirPods Pulse keep every detail close and every movement effortless.',
        features: [
            {
                label: 'Spatial Sound',
                icon: 'sound',
            },
            {
                label: 'Soft Comfort',
                icon: 'comfort',
            },
            {
                label: 'Smart Audio',
                icon: 'adaptive',
            },
            {
                label: '7h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '7 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.3',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#a855f7',
        glow: '#f472b6',
    },
    {
        id: 3,
        name: 'AirPods Ember',
        shortName: 'Ember',
        series: 'Wireless Series',
        image: airpods3,
        description:
            'Powerful sound meets a darker, performance-inspired design. AirPods Ember deliver punchy audio with responsive controls and lasting comfort.',
        features: [
            {
                label: 'Powerful Sound',
                icon: 'sound',
            },
            {
                label: 'Secure Comfort',
                icon: 'comfort',
            },
            {
                label: 'Dynamic Audio',
                icon: 'adaptive',
            },
            {
                label: '8h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '8 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.4',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#f97316',
        glow: '#7c3aed',
    },
    {
        id: 4,
        name: 'AirPods Clear',
        shortName: 'Clear',
        series: 'Wireless Series',
        image: airpods4,
        description:
            'A clean, lightweight design with balanced sound and effortless everyday controls. AirPods Clear bring simplicity and detail together.',
        features: [
            {
                label: 'Clear Sound',
                icon: 'sound',
            },
            {
                label: 'Light Comfort',
                icon: 'comfort',
            },
            {
                label: 'Adaptive Audio',
                icon: 'adaptive',
            },
            {
                label: '6h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '6 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.3',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#60a5fa',
        glow: '#c4b5fd',
        textAccent: '#2563eb',
        textGlow: '#7c3aed',
    },
    {
        id: 5,
        name: 'AirPods Flow',
        shortName: 'Flow',
        series: 'Wireless Series',
        image: airpods5,
        description:
            'Smooth curves, balanced acoustics and an easy everyday fit. AirPods Flow are designed for seamless listening wherever the day takes you.',
        features: [
            {
                label: 'Balanced Sound',
                icon: 'sound',
            },
            {
                label: 'Easy Comfort',
                icon: 'comfort',
            },
            {
                label: 'Smart Audio',
                icon: 'adaptive',
            },
            {
                label: '7h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '7 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.3',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#64748b',
        glow: '#93c5fd',
    },
    {
        id: 6,
        name: 'AirPods Nova',
        shortName: 'Nova',
        series: 'Wireless Series',
        image: airpods6,
        description:
            'A sculpted metallic design paired with rich, detailed sound. AirPods Nova combine a distinctive look with a refined wireless experience.',
        features: [
            {
                label: 'Detailed Sound',
                icon: 'sound',
            },
            {
                label: 'Sculpted Comfort',
                icon: 'comfort',
            },
            {
                label: 'Adaptive Audio',
                icon: 'adaptive',
            },
            {
                label: '8h Battery',
                icon: 'battery',
            },
        ],
        specs: [
            {
                label: 'Battery Life',
                value: '8 hours',
                icon: 'battery',
            },
            {
                label: 'Charging',
                value: 'USB-C',
                icon: 'charging',
            },
            {
                label: 'Bluetooth',
                value: '5.4',
                icon: 'bluetooth',
            },
            {
                label: 'Controls',
                value: 'Touch',
                icon: 'controls',
            },
        ],
        accent: '#ec4899',
        glow: '#94a3b8',
    },
];
