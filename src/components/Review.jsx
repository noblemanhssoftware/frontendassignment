import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Review = () => {
    return (
        <Container style={{ marginTop: "20px", marginBottom: "20px", overflowY: "hidden" }} >
            <h3>Reviews</h3>
            <ListGroup>
                <ListGroup.Item>
                    <div>
                        <h5>John Doe</h5>
                        <p>
                            I recently purchased this shirt and I have to say, I'm really impressed with the quality. The fabric is soft and breathable, and it fits me perfectly. The color is also true to the picture on the website. I would definitely recommend this shirt to anyone looking for a comfortable and stylish option.
                        </p>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div>
                        <h5>Jane Smith</h5>
                        <p>
                            I was hesitant to buy this shirt at first, but I'm so glad I did. It looks great on and the material is really high-quality. It's held up well in the wash too, which is a huge plus. I would definitely buy this again in other colors.
                        </p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
};

export default Review;
