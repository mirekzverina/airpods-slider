import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { products } from '../../data/products';
import { motion, useReducedMotion } from 'motion/react';

import TechStack from '../TechStack/TechStack';
import ProductDetail from '../ProductDetail/ProductDetail';

import {
    HiOutlineSpeakerWave,
    HiOutlineHeart,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineBattery100,
    HiOutlineArrowLeft,
    HiOutlineArrowRight,
} from 'react-icons/hi2';

const featureIcons = {
    sound: HiOutlineSpeakerWave,
    comfort: HiOutlineHeart,
    adaptive: HiOutlineAdjustmentsHorizontal,
    battery: HiOutlineBattery100,
};

import './ProductSlider.scss';

const productMotion = {
    x: {
        '-2': 580,
        '-1': -320,
        '0': 0,
        '1': 300,
        '2': 470,
        '3': 580,
    },
    y: {
        '-2': 60,
        '-1': -20,
        '0': 0,
        '1': 20,
        '2': 40,
        '3': 60,
    },
    scale: {
        '-2': 0.35,
        '-1': 1.35,
        '0': 1,
        '1': 0.7,
        '2': 0.5,
        '3': 0.35,
    },
    opacity: {
        '-2': 0,
        '-1': 0,
        '0': 1,
        '1': 0.75,
        '2': 0.45,
        '3': 0.18,
    },
    blur: {
        '-2': 40,
        '-1': 30,
        '0': 0,
        '1': 8,
        '2': 18,
        '3': 30,
    },
    duration: {
        '-2': 0.95,
        '-1': 0.95,
        '0': 0.65,
        '1': 0.75,
        '2': 0.85,
        '3': 0.95,
    },
} as const;

function ProductSlider() {
    const shouldReduceMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const exploreButtonRef = useRef<HTMLButtonElement>(null);
    const shouldRestoreFocus = useRef(false);

    useEffect(() => {
        if (!isDetailOpen && shouldRestoreFocus.current) {
            exploreButtonRef.current?.focus();
            shouldRestoreFocus.current = false;
        }
    }, [isDetailOpen]);

    const activeProduct = products[activeIndex];

    const getProductPosition = (productIndex: number) => {
        let position =
            (productIndex - activeIndex + products.length) % products.length;

        if (position > products.length / 2) {
            position -= products.length;
        }

        return position;
    };

    const showPreviousProduct = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? products.length - 1 : currentIndex - 1,
        );
    };

    const showNextProduct = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === products.length - 1 ? 0 : currentIndex + 1,
        );
    };

    if (isDetailOpen) {
        return (
            <ProductDetail
                product={activeProduct}
                activeIndex={activeIndex}
                onProductChange={setActiveIndex}
                onBack={() => {
                    shouldRestoreFocus.current = true;
                    setIsDetailOpen(false);
                }}
            />
        );
    }

    return (
        <section
            className="product-slider"
            style={
                {
                    '--product-accent': activeProduct.accent,
                    '--product-glow': activeProduct.glow,
                    '--product-text-accent':
                        activeProduct.textAccent ?? activeProduct.accent,
                    '--product-text-glow':
                        activeProduct.textGlow ?? activeProduct.glow,
                } as CSSProperties
            }
        >
            <p className="product-slider__status" aria-live="polite">
                {activeProduct.name}, product {activeIndex + 1} of{' '}
                {products.length}
            </p>
            <TechStack />

            <div className="product-slider__glow" />

            <div className="product-slider__container">
                <motion.div
                    key={activeProduct.id}
                    className="product-slider__content"
                    initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.7,
                        delay: shouldReduceMotion ? 0 : 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span className="product-slider__series">
                        {activeProduct.series}
                    </span>

                    <h1 className="product-slider__title">
                        <span>AirPods</span>

                        <span className="product-slider__product-name">
                            {activeProduct.shortName}
                        </span>
                    </h1>

                    <p className="product-slider__description">
                        {activeProduct.description}
                    </p>

                    <button
                        ref={exploreButtonRef}
                        className="product-slider__explore"
                        type="button"
                        onClick={() => setIsDetailOpen(true)}
                    >
                        Explore product
                        <HiOutlineArrowRight aria-hidden="true" />
                    </button>

                    <div className="product-slider__features">
                        {activeProduct.features.map((feature) => {
                            const Icon = featureIcons[feature.icon];

                            return (
                                <div
                                    className="product-slider__feature"
                                    key={feature.label}
                                >
                                    <Icon aria-hidden="true" />

                                    <span>{feature.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <div className="product-slider__visual">
                    {products.map((product, index) => {
                        const position = getProductPosition(index);
                        const motionKey = String(
                            Math.max(-2, Math.min(3, position)),
                        ) as keyof typeof productMotion.x;

                        return (
                            <motion.img
                                key={product.id}
                                src={product.image}
                                alt={position === 0 ? product.name : ''}
                                aria-hidden={position !== 0}
                                className="product-slider__image"
                                animate={{
                                    x: productMotion.x[motionKey],
                                    y: productMotion.y[motionKey],
                                    scale: productMotion.scale[motionKey],
                                    opacity: productMotion.opacity[motionKey],
                                    filter: `blur(${productMotion.blur[motionKey]}px)`,
                                }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.75,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="product-slider__controls">
                <button
                    type="button"
                    onClick={showPreviousProduct}
                    aria-label="Previous product"
                >
                    <HiOutlineArrowLeft aria-hidden="true" />
                </button>

                <div
                    className="product-slider__pagination"
                    aria-label="Product position"
                >
                    {products.map((product, index) => (
                        <span
                            key={product.id}
                            className={
                                index === activeIndex
                                    ? 'product-slider__dot product-slider__dot--active'
                                    : 'product-slider__dot'
                            }
                            aria-hidden={index !== activeIndex}
                        >
                            {index === activeIndex && (
                                <span className="product-slider__status">
                                    Current product: {index + 1} of{' '}
                                    {products.length}
                                </span>
                            )}
                        </span>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={showNextProduct}
                    aria-label="Next product"
                >
                    <HiOutlineArrowRight aria-hidden="true" />
                </button>
            </div>
        </section>
    );
}

export default ProductSlider;
