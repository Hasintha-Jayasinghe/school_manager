import React from "react";

interface Props {
  label: string;
  teacher: string;
}

const ClassCard: React.FC<Props> = ({ label, teacher }) => {
  return (
    <div className="teachercard">
      <h1 className="card-text">{label}</h1>
      <h3 className="card-text">{teacher}</h3>
    </div>
  );
};

export default ClassCard;
