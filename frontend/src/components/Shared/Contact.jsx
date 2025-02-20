// import NavBar from './NavBar.jsx'

function Contact() {
  return (
    <div>
      {/* <NavBar /> */}
      <div className="mx-auto max-w-7xl ">
        <div className="grid  grid-cols-2">
          <div className="left flex flex-col ">
            <input type="text" placeholder="Name" className="" />
            <input type="email" className="" placeholder="Email" />
            <input type="text" placeholder="Message" className="" />
            <button type="submit" className="p-2 w-full ">
              Send
            </button>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
