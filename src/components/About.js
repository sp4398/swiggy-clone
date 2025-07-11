import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="ml-16 mt-16">
      <User name="Saurav Pandey" />
      <UserClass name="Saurav Pandey" location="UP" />
    </div>
  );
};

export default About;
