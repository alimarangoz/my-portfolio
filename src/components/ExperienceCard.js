import { Col } from "react-bootstrap";

export const ExperienceCard = ({firmName, title, description, workingYears, imgUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="exp-imgbx">
                <img src={imgUrl} />
                <div className="exp-txtx">
                    <h3>{firmName}</h3>
                    <h4>{title}</h4>
                    <span>{description}</span> 
                    <br />
                    <span>{workingYears}</span>
                </div>
            </div>
        </Col>
    )
}