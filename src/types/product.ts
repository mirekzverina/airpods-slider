export interface ProductSpec {
    label: string;
    value: string;
    icon: 'battery' | 'charging' | 'bluetooth' | 'controls';
}

export interface ProductFeature {
    label: string;
    icon: 'sound' | 'comfort' | 'adaptive' | 'battery';
}

export interface Product {
    id: number;
    name: string;
    shortName: string;
    series: string;
    image: string;
    description: string;
    features: ProductFeature[];
    specs: ProductSpec[];
    accent: string;
    glow: string;
    textAccent?: string;
    textGlow?: string;
}
