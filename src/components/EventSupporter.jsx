const EventSupporter = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>장소협찬: 리턴제로</div>
      <div
        style={{
          height: 20,
          background: "var(--color-text-blue)",
          width: 2,
        }}
      ></div>
      <div>다과협찬: LG 유플러스 아이들나라</div>
    </div>
  );
};

export default EventSupporter;
