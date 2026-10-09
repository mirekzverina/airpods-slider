import { useEffect, useRef, type CSSProperties } from 'react';
import type { Product } from '../../types/product';
import { products } from '../../data/products';
import { motion, useReducedMotion } from 'motion/react';

import TechStack from '../TechStack/TechStack';

import {
    HiOutlineSpeakerWave,
    HiOutlineHeart,
    HiOutlineAdjustmentsHorizontal,
    HiOutlineBattery100,
    HiOutlineBolt,
    HiOutlineDevicePhoneMobile,
    HiOutlineSignal,
    HiOutlineHandRaised,
    HiOutlineArrowLeft,
} from 'react-icons/hi2';

import './ProductDetail.scss';

const featureIcons = {
    sound: HiOutlineSpeakerWave,
    comfort: HiOutlineHeart,
    adaptive: HiOutlineAdjustmentsHorizontal,
    battery: HiOutlineBattery100,
};

const specIcons = {
    battery: HiOutlineBolt,
    charging: HiOutlineDevicePhoneMobile,
    bluetooth: HiOutlineSignal,
    controls: HiOutlineHandRaised,
};

interface ProductDetailProps {
    product: Product;
    activeIndex: number;
    onProductChange: (index: number) => void;
    onBack: () => void;
}

const ProductDetail = ({
    product,
    activeIndex,
    onProductChange,
    onBack,
}: ProductDetailProps) => {
    const shouldReduceMotion = useReducedMotion();
    const backButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        backButtonRef.current?.focus();
    }, []);

    return (
        <motion.section
            className="product-detail"
            style={
                {
                    '--product-accent': product.accent,
                    '--product-glow': product.glow,
                    '--product-text-accent':
                        product.textAccent ?? product.accent,
                    '--product-text-glow': product.textGlow ?? product.glow,
                } as CSSProperties
            }
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: shouldReduceMotion ? 0.2 : 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <TechStack />

            <div className="product-detail__glow" />

            <button
                ref={backButtonRef}
                type="button"
                className="product-detail__back"
                onClick={onBack}
            >
                <HiOutlineArrowLeft aria-hidden="true" /> Back to slider
            </button>

            <div className="product-detail__container">
                <div className="product-detail__left">
                    <div className="product-detail__thumbnails">
                        {products.map((thumbnailProduct, index) => (
                            <button
                                type="button"
                                key={thumbnailProduct.id}
                                className={
                                    index === activeIndex
                                        ? 'product-detail__thumbnail product-detail__thumbnail--active'
                                        : 'product-detail__thumbnail'
                                }
                                onClick={() => onProductChange(index)}
                                aria-label={`Show ${thumbnailProduct.name}`}
                                aria-pressed={index === activeIndex}
                            >
                                <img src={thumbnailProduct.image} alt="" />
                            </button>
                        ))}
                    </div>

                    <div className="product-detail__visual">
                        <motion.img
                            key={product.id}
                            src={product.image}
                            alt={product.name}
                            className="product-detail__image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: shouldReduceMotion ? 0.2 : 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />
                    </div>
                </div>

                <motion.div
                    key={product.id}
                    className="product-detail__content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: shouldReduceMotion ? 0.2 : 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span className="product-detail__series">
                        {product.series}
                    </span>

                    <h1 className="product-detail__title">
                        <span>AirPods</span>

                        <span className="product-detail__product-name">
                            {product.shortName}
                        </span>
                    </h1>

                    <p className="product-detail__description">
                        {product.description}
                    </p>
                    <div className="product-detail__features">
                        {product.features.map((feature) => {
                            const Icon = featureIcons[feature.icon];

                            return (
                                <div
                                    className="product-detail__feature"
                                    key={feature.label}
                                >
                                    <div className="product-detail__feature-icon">
                                        <Icon aria-hidden="true" />
                                    </div>

                                    <span>{feature.label}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="product-detail__separator" />

                    <div className="product-detail__specs">
                        {product.specs.map((spec) => {
                            const Icon = specIcons[spec.icon];

                            return (
                                <div
                                    className="product-detail__spec"
                                    key={spec.label}
                                >
                                    <div className="product-detail__spec-icon">
                                        <Icon aria-hidden="true" />
                                    </div>

                                    <div>
                                        <strong>{spec.label}</strong>
                                        <span>{spec.value}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProductDetail;
