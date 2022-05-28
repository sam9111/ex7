const css = `
        details{
          margin: 20px;
        }
        /* descendant selectors */
        details p{
          color: black;
        }
`;

function ExtraCurriculars() {
  return (
    <section>
      <style>{css}</style>
      <h2>Extra-Curriculars</h2>
      <h3>Events Organized</h3>
      <article>
        <details>
          <summary>SSN ACM Student Chapter</summary>
          <img
            src="../assets/acm.png"
            alt="ACM"
            width="80"
            height="80"
            id="image"
          />
          <p>
            As the Vice-Chair, I am responsible for managing the committee and
            the affairs of the club as well as overseeing and guiding all
            decisions taken by the chapter. I organized a inter-college CTF
            contest called "Cyber Paradox" in December 2021.
          </p>
        </details>
        <details>
          <summary>SSN ACM-W Student Chapter</summary>
          <img
            src="../assets/acmw.png"
            alt="ACM-W"
            width="80"
            height="80"
            id="image"
          />
          <p>
            As the Vice-Chair, I led a team of 10 developers and designers to
            build the official website for the chapter. We organized many talks
            and webinars with professionals for the student community.
          </p>
        </details>
      </article>
    </section>
  );
}

export default ExtraCurriculars;
