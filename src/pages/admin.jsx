import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BASE_URL } from '../utils/config';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const usersResponse = await fetch(`${BASE_URL}/admin/users`, {
          credentials: 'include', // Include cookies for authentication
        });
        const usersData = await usersResponse.json();
        setUsers(usersData.data);

        const toursResponse = await fetch(`${BASE_URL}/admin/tours`, {
          credentials: 'include', // Include cookies for authentication
        });
        const toursData = await toursResponse.json();
        setTours(toursData.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching admin data:', error);
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <Container>
      <h1>Admin Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Row>
            <Col>
              <h2>Users</h2>
              <ul>
                {users.map(user => (
                  <li key={user._id}>{user.username} - {user.email}</li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Tours</h2>
              <ul>
                {tours.map(tour => (
                  <li key={tour._id}>{tour.title}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default AdminDashboard;
