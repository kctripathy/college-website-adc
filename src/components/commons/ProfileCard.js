import React from 'react';
import { Card, Image } from 'react-bootstrap';

const ProfileCard = ({ photo, name, designation, department, role }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header className="m-0 p-0">
                <Image src={photo} className="w-100 m-0 p-0" rounded />
            </Card.Header>
            <Card.Body>
                <Card.Title className="m-0 p-0">
                    {name}
                </Card.Title>
                <Card.Subtitle className="m-0 mb-1 p-0 text-muted">
                    {role}
                </Card.Subtitle>

                <Card.Text>
                    {designation} - {department}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default ProfileCard;


{/* <Card syle={{ width: '18rem' }}>
    <Image src={PrincipalPhoto} style={{ height: "175px" }} rounded />
    <Card.Body>
        <Card.Title>{profile.Principal_cum_Secratary.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            Principal cum Secretary
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
        </Card.Subtitle>
        <Card.Text>
            {profile.Principal_cum_Secratary.designation} - {profile.Principal_cum_Secratary.department}

        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
</Card> */}