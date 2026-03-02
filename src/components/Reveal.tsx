import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

interface Props {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export const Reveal = ({ children, width = '100%', delay = 0 }: Props) => {
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    );
};
