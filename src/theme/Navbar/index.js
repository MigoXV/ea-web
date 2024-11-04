import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common'; // 引入 Docusaurus 的 useColorMode 钩子
import NavbarOriginal from '@theme-original/Navbar'; // 保留原始导航栏内容和接口
import './Navbar.css';

const Navbar = () => {
    const { colorMode } = useColorMode(); // 获取当前颜色模式
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const controls = useAnimation();

    // 防抖函数，用于减少滚动事件触发频率
    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    useEffect(() => {
        const handleScroll = debounce(() => {
            const currentScrollPos = window.pageYOffset;
            setIsScrollingUp(currentScrollPos < scrollPosition);
            setScrollPosition(currentScrollPos);
        }, 50); // 50ms 防抖延迟

        window.addEventListener('scroll', handleScroll);

        // 根据滚动方向触发动画，使用线性过渡
        if (isScrollingUp) {
            controls.start({ y: 0, transition: { duration: 0.3, ease: "linear" } });
        } else {
            controls.start({ y: -60, transition: { duration: 0.3, ease: "linear" } });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition, isScrollingUp, controls]);

    return (
        <motion.div
            className={`custom-navbar ${colorMode === 'light' ? 'light-mode-navbar' : 'dark-mode-navbar'}`} // 自定义样式
            initial={{ y: 0 }}
            animate={controls}
        >
            <NavbarOriginal /> {/* 保留 Docusaurus 原始导航栏内容 */}
        </motion.div>
    );
};

export default Navbar;
