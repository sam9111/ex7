const css = `
    ol,ul{
            text-align: justify;
          }
/* child selector */
          ul > li {
            color: black;
       
          }
          ul > li:hover {
                 transform: rotate(-5deg);
          }
`;
function Interests() {
  return (
    <section>
      <style>{css}</style>
      <h2>Skills</h2>
      <div className="center">
        <ol type="1">
          <h3>
            {" "}
            <li>Web Development</li>
          </h3>
          <ul>
            <li>Ruby on Rails</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Rescript</li>
            <li>Django</li>
          </ul>
          <h3>
            {" "}
            <li>Programming</li>
          </h3>
          <ul>
            <li>Java</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>C</li>
          </ul>
        </ol>
      </div>
      <h2>Area of Interests</h2>

      <div className="center">
        <ul>
          <li>Internet of Things</li>
          <li>Human Computer Interaction</li>
        </ul>
      </div>
    </section>
  );
}

export default Interests;
