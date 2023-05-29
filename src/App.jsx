function HeadFunction() {

  return (
    <>
      <h1>This is the headings!</h1>
      <h2> This is second heading </h2>
      <img src = "https://i.imgur.com/MK3eW3Am.jpg" ></img>
    </>
  );
}

function BodyFunction() {

  return (
    <section>
      <HeadFunction/>
      <HeadFunction/>
      <HeadFunction/>
      <HeadFunction/>

      <h2> This is a body of webpage </h2>
    </section>
  );
}

export default BodyFunction;
