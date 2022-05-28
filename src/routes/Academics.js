const css = `

      table{
        width: 100%;border-collapse: collapse;
      }
      td,th{
        width: 100%; border: 1px solid;padding: 10px;
      }
      figcaption{
        color: black;
      }
      
td:nth-child(even) {background-color: lightslategray;}

`;

function Academics() {
  return (
    <section>
      <style>{css}</style>
      <table className="tableborder1 tableborder2">
        <caption>
          <h2>Academics</h2>
        </caption>
        <thead>
          <tr>
            <th colspan="2">Education</th>
            <th>Percentage/CGPA</th>
          </tr>
        </thead>

        <tr>
          <td rowspan="2">
            <figure>
              <img
                src="../assets/tlk.png"
                alt="The Little Kingdom Senior School"
                width="80"
                height="80"
              />
              <figcaption>The Little Kingdom Senior School</figcaption>
            </figure>
          </td>
          <td>ICSE examinations</td>
          <td>94%</td>
        </tr>

        <tr>
          <td>ISC examinations</td>
          <td>95.6%</td>
        </tr>
        <tr>
          <td>
            <figure>
              <img
                src="../assets/ssn.png"
                alt="SSN college of Engineering"
                width="120"
                height="52"
              />

              <figcaption>SSN college of Engineering</figcaption>
            </figure>
          </td>
          <td>Till 4th Semester</td>
          <td>8.89 CGPA</td>
        </tr>
        <tfoot></tfoot>
      </table>
    </section>
  );
}

export default Academics;
