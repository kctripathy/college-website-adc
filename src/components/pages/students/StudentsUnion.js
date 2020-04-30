import React from "react";
import Layout from "../Layout";
import Loading from "../../commons/Loading";
import StudentsUnionCard from "./StudentUnionCard";
import union from "../../../data/union.json";

export default function StudentsUnion() {
  const portfolio = union.portfolio;

  const showContent = () => (
    <ul className="list-group mb-4">
      <li className="list-group-item">
        <h6> Aims and objectives of the Students’ Union :</h6>
        <ul style={{ listStyleType: "disc" }}>
          <li>To represent the welfare and interest of the Students.</li>
          <li>
            To organise debates, discussions on general, cultural, academic,
            national and international programs
          </li>
          <li>
            To take up such other activities as proposed by the union and
            approved by the principle.
          </li>
          <li>
            To promote better relation between all the people through a
            framework of friendship and service.
          </li>
        </ul>
      </li>
    </ul>
  );

  const showStudentsUnion = () => {
    return portfolio && portfolio.length === 0 ? (
      <Loading text="Loading students union.." />
    ) : (
      portfolio.map((p) => <StudentsUnionCard key={p.year} portfolio={p} />)
    );
  };
  return (
    <Layout title={`Student's Union`}>
      {showContent()}
      {showStudentsUnion()}
    </Layout>
  );
}
