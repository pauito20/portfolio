export function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 6]} intensity={1.1} color="#dbe8ff" />
      <directionalLight
        position={[-5, -2, -4]}
        intensity={0.35}
        color="#7b61ff"
      />
    </>
  );
}
