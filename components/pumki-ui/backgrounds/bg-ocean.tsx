"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, steps } from "framer-motion";

const BIRD_IMG = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/bird.png";
const FOG_IMG = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/fog3.png";
const WATER_IMG = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/721952/waterDaytime.jpg";

const NUM_WAVES = 30;
const BIRDS = [
	{ scale: 0.7, top: 200 },
	{ scale: 0.65, top: 140 },
	{ scale: 0.6, top: 170 },
];

export const BgOcean: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const controls = useAnimation();

	// Mouse movement for compass and parallax
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.clientX / window.innerWidth;
			controls.start({ x: -1200 * x });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [controls]);

	return (
		<div
			ref={containerRef}
			style={{
				position: "relative",
				width: "200vw",
				height: "100vh",
				minWidth: 3200,
				overflow: "hidden",
				background:
					"linear-gradient(180deg, #aeefff 0%, #6ed7ff 40%, #b3e0ff 70%, #e0f7fa 100%)",
				opacity: 1,
			}}
		>
			{/* Sky clouds overlay */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					pointerEvents: "none",
					zIndex: 1,
				}}
			>
				{/* Simple clouds using SVG ellipses for a soft effect */}
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 1920 1080"
					style={{ position: "absolute", top: 0, left: 0 }}
					className="blur-3xl"
				>
					<ellipse cx="400" cy="120" rx="180" ry="60" fill="#fff" opacity="0.35" />
					<ellipse cx="600" cy="180" rx="120" ry="40" fill="#fff" opacity="0.25" />
					<ellipse cx="1200" cy="100" rx="200" ry="70" fill="#fff" opacity="0.32" />
					<ellipse cx="1500" cy="200" rx="140" ry="50" fill="#fff" opacity="0.28" />
					<ellipse cx="900" cy="220" rx="100" ry="35" fill="#fff" opacity="0.22" />
				</svg>
				{/* Fog overlay using the fog image */}
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundImage: `url(${FOG_IMG})`,
						backgroundRepeat: "repeat-x",
						backgroundSize: "cover",
						opacity: 0.35,
						pointerEvents: "none",
						zIndex: 2,
					}}
				/>
			</div>
			{/* Water waves */}
			<div
				style={{
					position: "absolute",
					width: "110%",
					height: 300,
					left: "-20%",
					bottom: 0,
					transform: "translateY(80px)", // Push ocean a bit below
					perspective: 500,
				}}
			>
				{[...Array(NUM_WAVES)].map((_, i) => (
					<motion.div
						key={i}
						initial={{
							y: i * 6.5,
							backgroundPositionY: -i * 5,
							scaleX: 1,
							scaleY: 1,
						}}
						animate={{
							y: [i * 6.5, i * 6.5 - 2 * (i / NUM_WAVES * 60), i * 6.5],
							x: [0, -100 * (i / NUM_WAVES * 2), 0],
							scaleX: [1, 0.95 + i / NUM_WAVES * 0.2, 1],
							scaleY: [1, 2 - i / NUM_WAVES, 1],
							rotate: [0, 0.01, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
							ease: "easeInOut",
							delay: i / NUM_WAVES,
						}}
						style={{
							position: "absolute",
							width: "100%",
							height: 50,
							backgroundImage: `url(${WATER_IMG})`,
							backgroundRepeat: "repeat-x",
							backgroundPosition: `0px -${i * 5}px`,
							opacity: 0.7,
							left: 0,
							borderRadius: 10,
						}}
					/>
				))}
			{/* Compass */}
			</div>
            /* Birds */
            {/* {BIRDS.map((bird, idx) => (
                <motion.div
                    key={idx}
                    initial={{
                        left: -60,
                        top: bird.top,
                        scale: bird.scale,
                        backgroundPositionY: -840, // Start at top of sprite sheet
                    }}
                    animate={{
                        left: [0, 3200],
                        backgroundPositionY: [
                            -840, // Start at top
                            -780, -720, -660, -600, -540, -480, -420, -360, -300, -240, -180, -120, -60, 0, // Step through sprite frames
                            -840 // Loop back
                        ],
                    }}
                    transition={{
                        left: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: idx * 0.4,
                        },
						backgroundPositionY: {
							duration: 10, // Slowed down from 0.65s to 1.5s per flap cycle
							repeat: Infinity,
							ease: steps(14),
							delay: idx * 0.2,
						},
                    }}
                    style={{
                        position: "absolute",
                        width: 60,
                        height: 60,
                        backgroundImage: `url(${BIRD_IMG})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        zIndex: 9999,
                    }}
                />
            ))} */}
            <motion.div
                style={{ position: "absolute", left: 30, bottom: 110, zIndex: 3 }} // <-- Pull compass up a bit (was 70)
                animate={controls}
            >
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle opacity="0.5" fill="#fff" cx="25" cy="25" r="25" />
                    <motion.path
                        className="cView"
                        fill="#fff"
                        d="M50,25c-14.33,0-25,0-25,0s0-7,0-25C38.81,0,50,11.19,50,25z"
                        initial={{ rotate: -90 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 1, ease: "linear" }}
                        style={{ transformOrigin: "0 100%" }}
                    />
                    <circle fill="#fff" cx="25" cy="25" r="4.67" />
                </svg>
            </motion.div>
        </div>
	);
};

export default BgOcean;
