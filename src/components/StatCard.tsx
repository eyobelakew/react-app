import React from "react";

type StatCardProps = {
  title: string;
  value: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="col-md-4 mb-4">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text fs-4">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;
