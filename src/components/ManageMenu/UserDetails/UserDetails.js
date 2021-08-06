import "./style.css";

const UserDetails = ({ data }) => {
  const { id, address, age, email, username, card_info } = data;
  return (
    <>
      <div className="card-content">
        <div className="card-title">
          <strong>ID </strong>
          <span>{id}</span>
        </div>
        <div className="card-title">
          <strong>이름 </strong>
          <span>{username || "등록되지 않음"}</span>
        </div>
        <div className="card-title">
          <strong>나이 </strong>
          <span>{age || "등록되지 않음"}</span>
        </div>
        <div className="card-title">
          <strong>주소 </strong>
          <span>{address || "등록되지 않음"}</span>
        </div>
        <div className="card-title">
          <strong>카드 INFO </strong>
          <span>{card_info || "등록되지 않음"}</span>
        </div>
        <div className="card-title">
          <strong>이메일 </strong>
          <span>{email || "등록되지 않음"}</span>
        </div>
      </div>
    </>
  );
};

export { UserDetails };
