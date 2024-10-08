/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';

import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

import { CanvasLoader } from '../ui';

const Ball = props => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 0.06]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-6}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.35}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

BallCanvas.propTypes = {
    icon: PropTypes.string.isRequired,
};

Ball.propTypes = {
    imgUrl: PropTypes.string.isRequired,
};

export default BallCanvas;
