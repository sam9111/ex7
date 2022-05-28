const css = `

    .button{
background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
      color: white;
  border: 1px solid white;
  padding: 10px;
  border-radius: 15px;
    }
    .button:hover{
      background: lightslategray
    }`;

function Feedback() {
  return (
    <section>
      <style>{css}</style>
      <h2>Your Feedback</h2>
      <form action="/action_page.php">
        <label for="name">Name</label>
        <br />
        <input type="text" id="name" name="name" value="" />
        <br />
        <label for="email">Email</label>
        <br />
        <input type="email" id="email" name="email" value="" />
        <br />
        <label for="feedback">Feedback</label>
        <br />
        <textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
        <br />
        <input type="submit" value="Submit" className="button" />
      </form>
    </section>
  );
}

export default Feedback;
