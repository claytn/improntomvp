import React from 'react';


export default class HomePageWrapper extends React.Component {
  render() {
    return(
      <div>
      <div id="navContainer">
        <nav className="navbar fixed-top">
          <div className="navbar-header">
            <a className="navbar-brand ubuntu" href="http://impronto.com"><font color="#FFCF09">im</font><font color="#FFFFFF">pronto</font></a>
            <button className="navbar-toggler hidden-sm-up pull-xs-right" type="button" data-toggle="collapse" data-target="#navCollapse">
              &#9776;
            </button>
          </div>
          <div className="collapse navbar-toggleable-xs" id="navCollapse">
            <ul className="nav navbar-nav pull-md-right">
              <li className="nav-item muli right-nav-item">
                <a className="nav-link" href="#infoContainer" id="listGigLink"><h4>How it works</h4></a>
              </li>
              <li className="nav-item muli right-nav-item">
                <a className="nav-link" href="#" id="supportButton"><h4>Support</h4></a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="modal fade" id="supportModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                <div className="typeform-widget" data-url="https://sidd4.typeform.com/to/nTzVYL" data-text="Impronto Support Form"></div>


              </div>
            </div>
          </div>
        </div>

      </div>

      <div id="mainContainer" className="container-fluid">
        <div className="mainContent">
          <div className="row need-space">
            <div className="text-xs-center">
              <h2 className="text-xs-center muli taglineTwo">
                <font color="#FFCF09">Friends busy? Want to do something fun?</font>
              </h2>
              <h2 className="text-xs-center muli taglineTwo">
                <font color="#FF7469">Hangout with like-minded people pronto!</font>
              </h2>
            </div>
          </div>
          <div className="row need-space">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3" >
              <p className="text-xs-left muli">
              <font color="#797979">Sign-up for a group activity. 4 to 8 people only. Or post something you are going to do,
              and have other people join you. Do things which you have always wanted to do with like-minded people!</font>
              <font color="#FF7469">Exclusive to U-Michigan students with a @umich.edu email.</font>
              </p>
            </div>
          </div>
          <div id="inputContainer">
             <div id="clock">
              <div className="row">
                <div className="center-block" id="clockdiv">
                  <div>
                    <span className="days"></span><br />
                    <div className="smallText muli white-font">Days</div>
                  </div>
                  <div>
                    <span className="hours"></span><br />
                    <div className="smallText muli white-font">Hours</div>
                  </div>
                  <div>
                    <span className="minutes"></span><br />
                    <div className="smallText muli white-font">Mins</div>
                  </div>
                  <div>
                    <span className="seconds"></span><br />
                    <div className="smallText muli white-font">Secs</div>
                  </div>
                </div>
              </div>
            </div>
           <h4 className="muli text-xs-center" id="betaText">
              Until the next 10 free activities
            </h4>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div id="message">

                </div>
                <p className="text-xs-center muli">
                  <font color="#FF7469">Sign up for a chance to win a free activity!</font>
                </p>
                <form role="form" method="post" id="emailForm">
                    <input type="text" name="email" className="form-control" placeholder="youremail@umich.edu" id="emailInput"/>
                    <div className="text-xs-center" id="buttonDiv">
                      <button type="submit" name="submit" className="btn btn-primary" id="accessButton">BETA ACCESS</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="thankYouModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h3 className="text-xs-left muli">
                  Hey! Thank you so much for signing up as a beta user.
                  <br /> <br />We will be in touch soon with some awesome activities for you to sign up for!
                  <br /> <br />Many thanks,
                  <br /><br />The Impronto Team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="eventsContainer" className="container-fluid">
        <div className="row">
          <div className="text-xs-center">
            <h3 className="ubuntu" id="eventsContainer-title">What can you do on <font color="#ffcf09">im</font>pronto?</h3>
          </div>
        </div>
        <div className="row">
          <div className="text-xs-center">
              <h5 className="muli">
                Try new <font color="#FFCF09">activities</font> | Explore new <font color="#FFCF09">experiences</font> | Build new <font color="#FFCF09">stories</font>
              </h5>
          </div>
        </div>
        <div id="imagesSection">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="assets/images/pic1.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <div className="center-block">
                    <figcaption className="figure-caption muli text-xs-center"><p>Try out a new restaurant with a bunch of people who share similar taste!</p></figcaption>
                  </div>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="assets/images/pic2.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Something more fun? Plan local short trips for activities such as skiing!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="assets/images/pic3.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Meet up before the movie for coffee, get into a huddle and take a pic!</p></figcaption>
                </div>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="assets/images/pic4.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Want some company to go see your favorite band live? Plan it with us!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 eventPicture">
              <figure className="figure">
                <div className="text-xs-center">
                  <img src="assets/images/pic5.png" className="figure-img img-fluid img-rounded center-block" alt="A generic square placeholder image with rounded corners in a figure."/>
                  <figcaption className="figure-caption muli text-xs-center"><p>Make new friends during an evening of bowling and share a great time!</p></figcaption>
                </div>
              </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <figure className="figure text-xs-center" id="figureButton">
                <h3 className="ubuntu">Have an idea for <br />your own activity?</h3>
                <br />
                <a href="#" id="squareButton"><i className="fa fa-plus-square fa-5x"></i></a>
                <br />
                <br />
                <h3 className="ubuntu">Add here!</h3>
              </figure>
            </div>
          </div>
        </div>
      </div>


      <div id="howItWorks" className="container-fluid">
        <div className="row">
          <h3 className="text-xs-center ubuntu hiw-title" id="hiw-title">How will <font color="#FF7469">im</font><font color="#FFCF09">pronto</font> work</h3>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="text-xs-center hiw-image">
              <img src="assets/images/iconpic2.png"/>
            </div>
            <div className="text-xs-center hiw-des">
              <h5 className="hiw-des-title muli"><span>1.</span> Join Impronto</h5>

                <p className="muli text-xs-left">Sign up with your umich email address.</p>

            </div>
          </div>
          <div className="col-md-3">
            <div className="text-xs-center hiw-image">
              <img src="assets/images/iconpic4.png"/>
            </div>
            <div className="text-xs-center hiw-des muli">
              <h5 className="hiw-des-title muli"><span>2.</span> Join an activity</h5>

                <p className="muli text-xs-left">Choose something that interests you from a list of paid or free.</p>

            </div>
          </div>
          <div className="col-md-3">
            <div className="text-xs-center hiw-image">
              <img src="assets/images/iconpic1.png"/>
            </div>
            <div className="text-xs-center hiw-des">
              <h5 className="hiw-des-title muli"><span>3.</span> Get in touch</h5>

                <p className="muli text-xs-left">Chat with other users who signed up for the same activity before meeting them.</p>

            </div>
          </div>
          <div className="col-md-3">
            <div className="text-xs-center hiw-image">
              <img src="assets/images/iconpic3.png"/>
            </div>
            <div className="text-xs-center hiw-des">
              <h5 className="hiw-des-title muli"><span>4.</span> Attend your activity!</h5>

                <p className="muli text-xs-left">Have fun at the activity. Keep in touch if you'd like. Build friendships and connections.</p>

            </div>
          </div>
        </div>
      </div>

      <div id="footer" className="container-fluid">
        <div className="row">
          <p className="text-xs-right muli"> Icons designed by <a href="http://www.freepik.com/">Freepik</a></p>
        </div>
      </div>


      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
      <script src="assets/js/main.js"></script>
    <script src="assets/js/clock.js"></script>
    </div>
    );
  }
}
