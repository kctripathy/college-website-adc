import React from "react";
import { Card, Image } from "react-bootstrap";

const ProfileCard = ({ photo, name, designation, department, role }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header className="m-0 p-0">
        <Image src={photo} className="w-100 m-0 p-0" rounded />
      </Card.Header>
      <Card.Body>
        <Card.Title className="m-0 p-0">{name}</Card.Title>
        <Card.Subtitle className="m-0 mb-1 p-0 text-muted">
          {role}
        </Card.Subtitle>

        <Card.Text>
          {designation} - {department}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
