export function Heading() {

    return (
      <>
        <h1>This is first headings!</h1>
        <h2> This is second heading </h2>
      </>
    );
}

export function Photo() {
  
    return (
      <section>  
        <img src = "https://i.imgur.com/MK3eW3Am.jpg" ></img>
        <h2> This is an image </h2>
      </section>
    );
  }
  

export function PhotoDetails() {

    return (
        <section>
            <h3> Image Name </h3>
            <h4> Image Details</h4>
            <Photo/>

        </section>
    )
}
  


  