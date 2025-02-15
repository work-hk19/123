import React, { useState, useEffect } from "react";

// Utility function for random number generation
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Animation timing utility
const getStaggeredDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};

// Custom hook for animation
const useAnimationTrigger = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

// Shared styles for all components
const sharedStyles = {
  baseContainer:
    "relative overflow-hidden transition-all duration-500 ease-in-out",
  innerContainer: "transition-all duration-300 ease-in-out",
  hoverEffect:
    "hover:shadow-lg hover:scale-[1.02] transform transition-all duration-300",
  textStyle: "font-semibold tracking-wide",
  animationBase: "animate-fade-in transition-opacity duration-500",
};

// Component 1: Ocean Depths
export const Component1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rippleCount, setRippleCount] = useState(0);
  const isVisible = useAnimationTrigger(100);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    setRippleCount((prev) => (prev + 1) % 5);
  };

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={createRipple}
    >
      <div
        className={`p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-blue-100 rounded-lg transform transition-transform duration-300">
          <div className="p-3 bg-blue-200 rounded-lg">
            <div className="p-3 bg-blue-300 rounded-lg">
              <div className="p-3 bg-blue-400 rounded-lg">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <div className="p-3 bg-blue-700 rounded-lg">
                      <div className="p-3 bg-blue-800 rounded-lg">
                        <div
                          className={`p-3 bg-blue-900 rounded-lg text-white text-center relative overflow-hidden ${
                            isHovered ? "scale-105" : ""
                          } transition-transform duration-300`}
                        >
                          <span
                            className={`${sharedStyles.textStyle} relative z-10`}
                          >
                            Ocean Depths
                          </span>
                          {isHovered && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 transition-opacity duration-300" />
                          )}
                          {Array.from({ length: rippleCount }).map(
                            (_, index) => (
                              <div
                                key={index}
                                className="absolute inset-0 bg-white opacity-20 rounded-full animate-ripple"
                                style={{
                                  animationDelay: `${index * 200}ms`,
                                  transform: `scale(${1 + index * 0.2})`,
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 2: Forest Layers
export const Component2 = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const isVisible = useAnimationTrigger(200);

  const handleLayerClick = (index: number) => {
    setActiveLayer(index);
  };

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div
          className="p-3 bg-green-100 rounded-lg"
          onClick={() => handleLayerClick(0)}
        >
          <div
            className="p-3 bg-green-200 rounded-lg"
            onClick={() => handleLayerClick(1)}
          >
            <div
              className="p-3 bg-green-300 rounded-lg"
              onClick={() => handleLayerClick(2)}
            >
              <div
                className="p-3 bg-green-400 rounded-lg"
                onClick={() => handleLayerClick(3)}
              >
                <div
                  className="p-3 bg-green-500 rounded-lg"
                  onClick={() => handleLayerClick(4)}
                >
                  <div
                    className="p-3 bg-green-600 rounded-lg"
                    onClick={() => handleLayerClick(5)}
                  >
                    <div
                      className="p-3 bg-green-700 rounded-lg"
                      onClick={() => handleLayerClick(6)}
                    >
                      <div
                        className="p-3 bg-green-800 rounded-lg"
                        onClick={() => handleLayerClick(7)}
                      >
                        <div
                          className={`p-3 bg-green-900 rounded-lg text-white text-center relative ${
                            activeLayer === 8 ? "scale-105" : ""
                          } transition-transform duration-300`}
                        >
                          <span className={sharedStyles.textStyle}>
                            Forest Layers
                          </span>
                          {activeLayer > 0 && (
                            <div
                              className="absolute top-0 left-0 w-full h-1 bg-green-400 transition-all duration-500"
                              style={{ width: `${(activeLayer / 8) * 100}%` }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 3: Royal Depths
export const Component3 = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const isVisible = useAnimationTrigger(300);

  const addParticle = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setParticles((prev) => [...prev, { id: Date.now(), x, y }]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== Date.now()));
    }, 1000);
  };

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={addParticle}
    >
      <div
        className={`p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-purple-100 rounded-lg">
          <div className="p-3 bg-purple-200 rounded-lg">
            <div className="p-3 bg-purple-300 rounded-lg">
              <div className="p-3 bg-purple-400 rounded-lg">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <div className="p-3 bg-purple-700 rounded-lg">
                      <div className="p-3 bg-purple-800 rounded-lg">
                        <div className="p-3 bg-purple-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Royal Depths
                          </span>
                          {particles.map((particle) => (
                            <div
                              key={particle.id}
                              className="absolute w-2 h-2 bg-purple-300 rounded-full animate-particle"
                              style={{
                                left: particle.x,
                                top: particle.y,
                                transform: "translate(-50%, -50%)",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 4: Ruby Cascade
export const Component4 = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const isVisible = useAnimationTrigger(400);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-red-100 rounded-lg">
          <div className="p-3 bg-red-200 rounded-lg">
            <div className="p-3 bg-red-300 rounded-lg">
              <div className="p-3 bg-red-400 rounded-lg">
                <div className="p-3 bg-red-500 rounded-lg">
                  <div className="p-3 bg-red-600 rounded-lg">
                    {/*blitz{AHJD3927ld#&*$u#$&dSLC}*/}
                    <div className="p-3 bg-red-700 rounded-lg">
                      <div className="p-3 bg-red-800 rounded-lg">
                        <div className="p-3 bg-red-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Ruby Cascade
                          </span>
                          <div
                            className="absolute w-32 h-32 bg-red-400 rounded-full filter blur-xl opacity-30 pointer-events-none transition-all duration-200"
                            style={{
                              left: glowPosition.x,
                              top: glowPosition.y,
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 5: Solar Descent
export const Component5 = () => {
  const [rotation, setRotation] = useState(0);
  const isVisible = useAnimationTrigger(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-yellow-100 rounded-lg">
          <div className="p-3 bg-yellow-200 rounded-lg">
            <div className="p-3 bg-yellow-300 rounded-lg">
              <div className="p-3 bg-yellow-400 rounded-lg">
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <div className="p-3 bg-yellow-600 rounded-lg">
                    <div className="p-3 bg-yellow-700 rounded-lg">
                      <div className="p-3 bg-yellow-800 rounded-lg">
                        <div className="p-3 bg-yellow-900 rounded-lg text-white text-center relative">
                          <span className={sharedStyles.textStyle}>
                            Solar Descent
                          </span>
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-30"
                            style={{ transform: `rotate(${rotation}deg)` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 6: Rose Petals
export const Component6 = () => {
  const [petals, setPetals] = useState<
    Array<{ id: number; rotation: number; scale: number }>
  >([]);
  const isVisible = useAnimationTrigger(600);

  const addPetal = () => {
    const newPetal = {
      id: Date.now(),
      rotation: getRandomNumber(0, 360),
      scale: getRandomNumber(8, 12) / 10,
    };
    setPetals((prev) => [...prev, newPetal]);
    setTimeout(() => {
      setPetals((prev) => prev.filter((p) => p.id !== newPetal.id));
    }, 2000);
  };

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={addPetal}
    >
      <div
        className={`p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-pink-100 rounded-lg">
          <div className="p-3 bg-pink-200 rounded-lg">
            <div className="p-3 bg-pink-300 rounded-lg">
              <div className="p-3 bg-pink-400 rounded-lg">
                <div className="p-3 bg-pink-500 rounded-lg">
                  <div className="p-3 bg-pink-600 rounded-lg">
                    <div className="p-3 bg-pink-700 rounded-lg">
                      <div className="p-3 bg-pink-800 rounded-lg">
                        <div className="p-3 bg-pink-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Rose Petals
                          </span>
                          {petals.map((petal) => (
                            <div
                              key={petal.id}
                              className="absolute w-8 h-8 bg-pink-300 rounded-full opacity-50 animate-float"
                              style={{
                                left: "50%",
                                top: "50%",
                                transform: `rotate(${petal.rotation}deg) scale(${petal.scale})`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 7: Twilight Path
export const Component7 = () => {
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);
  const isVisible = useAnimationTrigger(700);

  useEffect(() => {
    const createStar = () => {
      const newStar = {
        id: Date.now(),
        x: getRandomNumber(0, 100),
        y: getRandomNumber(0, 100),
        size: getRandomNumber(1, 3),
      };
      setStars((prev) => [...prev.slice(-20), newStar]);
    };

    const interval = setInterval(createStar, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-indigo-100 rounded-lg">
          <div className="p-3 bg-indigo-200 rounded-lg">
            <div className="p-3 bg-indigo-300 rounded-lg">
              <div className="p-3 bg-indigo-400 rounded-lg">
                <div className="p-3 bg-indigo-500 rounded-lg">
                  <div className="p-3 bg-indigo-600 rounded-lg">
                    <div className="p-3 bg-indigo-700 rounded-lg">
                      <div className="p-3 bg-indigo-800 rounded-lg">
                        <div className="p-3 bg-indigo-900 rounded-lg text-white text-center relative">
                          <span className={sharedStyles.textStyle}>
                            Twilight Path
                          </span>
                          {stars.map((star) => (
                            <div
                              key={star.id}
                              className="absolute bg-white rounded-full animate-twinkle"
                              style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 8: Ocean Waves
export const Component8 = () => {
  const [wavePhase, setWavePhase] = useState(0);
  const isVisible = useAnimationTrigger(800);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-teal-100 rounded-lg">
          <div className="p-3 bg-teal-200 rounded-lg">
            <div className="p-3 bg-teal-300 rounded-lg">
              <div className="p-3 bg-teal-400 rounded-lg">
                <div className="p-3 bg-teal-500 rounded-lg">
                  <div className="p-3 bg-teal-600 rounded-lg">
                    <div className="p-3 bg-teal-700 rounded-lg">
                      <div className="p-3 bg-teal-800 rounded-lg">
                        <div className="p-3 bg-teal-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Ocean Waves
                          </span>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <div
                              key={index}
                              className="absolute inset-0 bg-teal-500 opacity-20"
                              style={{
                                transform: `translateY(${
                                  Math.sin(
                                    ((wavePhase + index * 120) * Math.PI) / 180
                                  ) * 10
                                }px)`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 9: Sunset Glow
export const Component9 = () => {
  const [sunPosition, setSunPosition] = useState(0);
  const isVisible = useAnimationTrigger(900);

  useEffect(() => {
    const interval = setInterval(() => {
      setSunPosition((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-orange-100 rounded-lg">
          <div className="p-3 bg-orange-200 rounded-lg">
            <div className="p-3 bg-orange-300 rounded-lg">
              <div className="p-3 bg-orange-400 rounded-lg">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <div className="p-3 bg-orange-600 rounded-lg">
                    <div className="p-3 bg-orange-700 rounded-lg">
                      <div className="p-3 bg-orange-800 rounded-lg">
                        <div className="p-3 bg-orange-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Sunset Glow
                          </span>
                          <div
                            className="absolute w-12 h-12 bg-yellow-300 rounded-full blur-lg"
                            style={{
                              left: "50%",
                              top: `${sunPosition}%`,
                              transform: "translate(-50%, -50%)",
                              opacity: 1 - sunPosition / 100,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 10: Arctic Depths
export const Component10 = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; x: number; delay: number }>
  >([]);
  const isVisible = useAnimationTrigger(1000);

  useEffect(() => {
    const createSnowflake = () => {
      const newSnowflake = {
        id: Date.now(),
        x: getRandomNumber(0, 100),
        delay: getRandomNumber(0, 2000),
      };
      setSnowflakes((prev) => [...prev.slice(-15), newSnowflake]);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${sharedStyles.baseContainer} ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg ${sharedStyles.hoverEffect}`}
      >
        <div className="p-3 bg-cyan-100 rounded-lg">
          <div className="p-3 bg-cyan-200 rounded-lg">
            <div className="p-3 bg-cyan-300 rounded-lg">
              <div className="p-3 bg-cyan-400 rounded-lg">
                <div className="p-3 bg-cyan-500 rounded-lg">
                  <div className="p-3 bg-cyan-600 rounded-lg">
                    <div className="p-3 bg-cyan-700 rounded-lg">
                      <div className="p-3 bg-cyan-800 rounded-lg">
                        <div className="p-3 bg-cyan-900 rounded-lg text-white text-center relative overflow-hidden">
                          <span className={sharedStyles.textStyle}>
                            Arctic Depths
                          </span>
                          {snowflakes.map((snowflake) => (
                            <div
                              key={snowflake.id}
                              className="absolute w-2 h-2 bg-white rounded-full animate-snowfall"
                              style={{
                                left: `${snowflake.x}%`,
                                animationDelay: `${snowflake.delay}ms`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
