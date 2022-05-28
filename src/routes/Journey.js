const css = `

 span{
   font-weight: bold;
 }`;

function Journey() {
  return (
    <section>
      <style>{css}</style>
      <h2>Journey to College</h2>

      <img
        src="../assets/college.jpg"
        className="responsive"
        useMap="#collegemap"
        alt="Picture of College"
      />
      <map name="collegemap">
        <area
          shape="rect"
          coords="34,44,270,350"
          title="SSN College of Engineering"
          alt="Picture of College"
          href="https://www.ssn.edu.in/"
        />
      </map>

      <p>
        I am currently doing my junior year in{" "}
        <span>
          Computer Science and Engineering from SSN College of Engineering
        </span>{" "}
        and will be graduating in 2023. I have been studying in the college for
        the last three years. Moving to Chennai for college seemed scary at
        first but for someone who has been in a small town for years, I wanted
        the freedom to explore the city and at the same time build my career and
        that was why I chose SSN.
      </p>
    </section>
  );
}

export default Journey;
