import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import chevronLeft from '@/assets/icons/chevron-left.svg';
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';

export default function OrderTickets() {
  useEffect(() => {

    const emailSent = sessionStorage.getItem("sentcontactform");

    if (emailSent === "yes"){
        document.querySelector(".orderform").classList.add("displaynone");
        document.querySelector(".formsent").classList.remove("displaynone");
        document.querySelector(".successtate").classList.remove("displaynone");
      } 

  }, []);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }


  const [formData, setFormData] = useState({
    'event-date': '',
    'seat-count': '',
    'budget': '',
    'sittinglevel': [],
    'nbaornfl': '',
    'nbaornflquestion': '',
    'your-email': '',
    'phone-number': '',
    'interested-in-season-tickets': '',
    'teams-for-season-tickets': '',
  });

  const handleChange = (e) => {
    document.querySelector("#event-date").classList.remove("emptystate");
    document.querySelector(".howmanyseatsneed").classList.remove("emptystate2");
    document.querySelector(".sittingcountlevel").classList.remove("emptystate2");
    document.querySelector("#your-email").classList.remove("emptystate");
    document.querySelector("#phone-number").classList.remove("emptystate");
    document.querySelector("#teams-for-season-tickets").classList.remove("emptystate");
    document.querySelector("#antwoordform").classList.remove("emptystate");
    document.querySelector(".nbaornflh2").classList.remove("emptystate2");
    document.querySelector(".checkednbaornflquestionh2").classList.remove("emptystate2");
    document.querySelector(".checkedinterestedinseasonticketsh2").classList.remove("emptystate2");

    const { name, value, type, checked, options } = e.target;
    let newValue;
    if (type === 'checkbox') {
      if (checked) {
        newValue = [...formData[name], value];
      } else {
        newValue = formData[name].filter(item => item !== value);
      }
    } else {
      newValue = value;
    }
    const newFormData = {
      ...formData,
      [name]: type === 'select-multiple' ? Array.from(options).filter(option => option.selected).map(option => option.value) : newValue,
    };
    setFormData(newFormData);
  };

  const sendForm = () => {
  
    const seatAmountCheckboxes = document.querySelectorAll('.seatamount');
    let checkedCount = 0;
    seatAmountCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    const sittingLevelCheckboxes = document.querySelectorAll('input[name="sittinglevel"]');
    let checkedCountSittingLevel = 0;
    sittingLevelCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCountSittingLevel++;
      }
    });

    const nbaornflRadios = document.querySelectorAll('input[name="nbaornfl"]');
    let checkedNbaornfl = 0;
    nbaornflRadios.forEach(checkbox => {
      if (checkbox.checked) {
        checkedNbaornfl++;
      }
    });

    const nbaornflquestionRadios = document.querySelectorAll('input[name="nbaornflquestion"]');
    let checkednbaornflquestion = 0;
    nbaornflquestionRadios.forEach(checkbox => {
      if (checkbox.checked) {
        checkednbaornflquestion++;
      }
    });

    const interestedinseasonticketsRadios = document.querySelectorAll('input[name="interested-in-season-tickets"]');
    let checkedinterestedinseasontickets = 0;
    interestedinseasonticketsRadios.forEach(checkbox => {
      if (checkbox.checked) {
        checkedinterestedinseasontickets++;
      }
    });


    





  
    let eventDate = document.querySelector("#event-date").value.trim();
    let email = document.querySelector("#your-email").value.trim();
    let teamsforseasons = document.querySelector("#teams-for-season-tickets").value.trim();
    let numberform = document.querySelector("#phone-number").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( eventDate === '' || checkedCount === 0 || checkedCountSittingLevel === 0 || !isValidEmail(email) || numberform === '' || teamsforseasons === '' || antwoord === ''){
 

    if (document.querySelector("#event-date").value.length === 0){
      window.scrollTo(0,0);
      document.querySelector("#event-date").classList.add("emptystate");
    }

    if (checkedCount === 0) {
      document.querySelector(".howmanyseatsneed").classList.add("emptystate2");
      window.scrollTo(0,0);
    } 

    if (checkedCountSittingLevel === 0) {
      document.querySelector(".sittingcountlevel").classList.add("emptystate2");
      window.scrollTo(0,0);
    }

    
    if (checkedNbaornfl === 0) {
      document.querySelector(".nbaornflh2").classList.add("emptystate2");
      window.scrollTo(0,0);
    }


    if (checkednbaornflquestion === 0) {
      document.querySelector(".checkednbaornflquestionh2").classList.add("emptystate2");
      window.scrollTo(0,0);
    }

    if (checkedinterestedinseasontickets === 0) {
      document.querySelector(".checkedinterestedinseasonticketsh2").classList.add("emptystate2");
      window.scrollTo(0,0);
    }
    

    if (document.querySelector("#your-email").value.length === 0){
      window.scrollTo(0,0);
      document.querySelector("#your-email").classList.add("emptystate");
    } 

    if (!isValidEmail(email)){
      window.scrollTo(0,0);
      document.querySelector("#your-email").classList.add("emptystate");     
    }

    if (document.querySelector("#phone-number").value.length === 0){
      window.scrollTo(0,0);
      document.querySelector("#phone-number").classList.add("emptystate");
    }

    if (document.querySelector("#teams-for-season-tickets").value.length === 0){
      window.scrollTo(0,0);
      document.querySelector("#teams-for-season-tickets").classList.add("emptystate");
    }

    if (antwoord === "") {
      document.querySelector("#antwoordform").classList.add("emptystate");
  }

    alert('Please check for empty input fields, and verify that you have entered a valid email.');

   
  } else if (parseInt(antwoord) !== 4) {

    alert("The answer to the mathematical question is incorrect. Try again");

    if (antwoord !== 4) {
        document.querySelector("#antwoordform").classList.add("emptystate");
    }
    
} else {

    document.querySelector("#antwoordform").classList.remove("emptystate");
    window.scrollTo(0,0);

    console.log("sending email", formData)

    emailjs.send("service_fwb77fb","template_vmwpreg", formData, "JrLFpTLCcwJhfeGcZ");

    document.querySelector(".orderform").classList.add("displaynone");
    document.querySelector(".formsent").classList.remove("displaynone");
    document.querySelector(".loadingstate").classList.remove("displaynone");

    sessionStorage.setItem("sentcontactform", "yes");

    setTimeout(() => {
        document.querySelector(".loadingstate").classList.add("displaynone");
        document.querySelector(".successtate").classList.remove("displaynone");
    }, 1000);
    
  }


  };

  return (
    <>
        <Head>
        <title>Tickety | Order Tickets</title>
        <meta name="description" content="Order Tickets by simply filling out the form available on the website.."/>
        <meta name="og:description" content="Order Tickets by simply filling out the form available on the website."/>
        <meta property="og:url" content="https://www.tickety.com/order-tickets/"/>
        <meta property="og:title" content="Tickety | Order Tickets"/>
      </Head>
      <div className="pageheader">
        <div>
          <h1>Order Tickets</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon" /></Link>
        </div>
      </div>

      <div className="pagecontent">
        <div>
          <div className="orderform">
            <section>
              <h2>Please tell us what event you would like to attend and the date:</h2>
              <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="event-date" type="text" name="event-date" onChange={handleChange} />
            </section>

            <section>
              <h2 className="howmanyseatsneed">How many seats do you need?</h2>
              <div>
                <input className="seatamount" id="seat1" type="radio" name="seat-count" value="1" onChange={handleChange}/>
                <label for="seat1"className="wpcf7-list-item-label">1</label>
                <input className="seatamount" id="seat2" type="radio" name="seat-count" value="2" onChange={handleChange} />
                <label for="seat2" className="wpcf7-list-item-label">2</label>
                <input className="seatamount" id="seat3" type="radio" name="seat-count" value="3" onChange={handleChange} />
                <label for="seat3" className="wpcf7-list-item-label">3</label>
                <input className="seatamount" id="seat4" type="radio" name="seat-count" value="4" onChange={handleChange} />
                <label for="seat4" className="wpcf7-list-item-label">4</label>
                <input className="seatamount" id="seat5" type="radio" name="seat-count" value="5" onChange={handleChange} />
                <label for="seat5" className="wpcf7-list-item-label">5</label>
                <input className="seatamount" id="seat6" type="radio" name="seat-count" value="6" onChange={handleChange} />
                <label for="seat6" className="wpcf7-list-item-label">6</label>
                <input className="seatamount" id="seat7" type="radio" name="seat-count" value="7" onChange={handleChange} />
                <label for="seat7" className="wpcf7-list-item-label">7</label>
                <input className="seatamount" id="seat8" type="radio" name="seat-count" value="8" onChange={handleChange} />
                <label for="seat8" className="wpcf7-list-item-label">8</label>
                <input className="seatamount" id="seat9" type="radio" name="seat-count" value="Corporate Group" onChange={handleChange} />
                <label for="seat9" className="wpcf7-list-item-label">Corporate Group</label>
              </div>
            </section>

            <section>
              <h2>What is your budget per ticket:</h2>
              <select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="budget" onChange={handleChange}>
                <option value="">Please select a budget</option>
                <option value="Under $150">Under $150</option>
                <option value="$151 - $350">$151 - $350</option>
                <option value="$351 - $500">$351 - $500</option>
                <option value="$501 - $750">$501 - $750</option>
                <option value="$750 - $1,000">$750 - $1,000</option>
                <option value="$1,001 - $5,000">$1,001 - $5,000</option>
                <option value="$5,001 - $10,000">$5,001 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </section>

            <section>
              <h2 className='sittingcountlevel'>Please select the levels you are interested in sitting in:</h2>
              <div>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Floor" id="floor" />
                <label className="wpcf7-list-item-label" htmlFor="floor">Floor</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Pit" id="pit" />
                <label className="wpcf7-list-item-label" htmlFor="pit">Pit</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="General Admission" id="general-admission" />
                <label className="wpcf7-list-item-label" htmlFor="general-admission">General Admission</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="VIP/Premium Seating" id="vip-premium-seating" />
                <label className="wpcf7-list-item-label" htmlFor="vip-premium-seating">VIP/Premium Seating</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Suites" id="suites" />
                <label className="wpcf7-list-item-label" htmlFor="suites">Suites</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Club Level" id="club-level" />
                <label className="wpcf7-list-item-label" htmlFor="club-level">Club Level</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Paddock Club" id="paddock-club" />
                <label className="wpcf7-list-item-label" htmlFor="paddock-club">Paddock Club</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Delta Club" id="delta-club" />
                <label className="wpcf7-list-item-label" htmlFor="delta-club">Delta Club</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Chase Lounge" id="chase-lounge" />
                <label className="wpcf7-list-item-label" htmlFor="chase-lounge">Chase Lounge</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="100s" id="100s" />
                <label className="wpcf7-list-item-label" htmlFor="100s">100s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="200s" id="200s" />
                <label className="wpcf7-list-item-label" htmlFor="200s">200s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="300s" id="300s" />
                <label className="wpcf7-list-item-label" htmlFor="300s">300s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="400s" id="400s" />
                <label className="wpcf7-list-item-label" htmlFor="400s">400s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="500s" id="500s" />
                <label className="wpcf7-list-item-label" htmlFor="500s">500s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="600s" id="600s" />
                <label className="wpcf7-list-item-label" htmlFor="600s">600s</label>
                <input type="checkbox" onChange={handleChange} name="sittinglevel" value="Standing Room Only" id="standing-room-only" />
                <label className="wpcf7-list-item-label" htmlFor="standing-room-only">Standing Room Only</label>
              </div>
            </section>

            <section>
              <h2 className='nbaornflh2'>Are you inquiring about NBA or NFL tickets?</h2>
              <div>
                <input type="radio" id="nbaornfl1" name="nbaornfl" value="No" onChange={handleChange}/>
                <label for="nbaornfl1">No</label>
                <input type="radio" id="nbaornfl2" name="nbaornfl" value="Yes" onChange={handleChange} />
                <label for="nbaornfl2">Yes</label>
              </div>
            </section>

            <section className="nhlornflquestion">
              <p className='checkednbaornflquestionh2'>Are you interested in the opportunity to acquire our coveted Field/Floor Pass add-on, granting you privileged pre/post-game access for just $200 per person?<br /><br /> Revel in the chance to capture captivating moments and be present on the field/floor alongside the players as they gear up for the game.<br /><br /> Take unlimited photos without impeding their warmup routine.</p>
              <div>
                <input type="radio" id="nbaornflquestion1" name="nbaornflquestion" value="No" onChange={handleChange} />
                <label for="nbaornflquestion1">No</label>
                <input type="radio" id="nbaornflquestion2" name="nbaornflquestion" value="Yes" onChange={handleChange} />
                <label for="nbaornflquestion2">Yes</label>
              </div>
            </section>

            <section>
              <h2>Please enter the email address that is best to contact you at:</h2>
              <input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="your-email" type="email" name="your-email" onChange={handleChange} />
            </section>

            <section>
              <h2>Please enter your mobile phone number:</h2>
              <input size="40" className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" id="phone-number" type="tel" name="phone-number" onChange={(event) => {handleChange(event); restrictToNumbers(event);}}/>
            </section>

            <section>
              <h2 className='checkedinterestedinseasonticketsh2'>Are you interested in season tickets?</h2>
              <div>
                <input type="radio" id="interested-in-season-tickets1" name="interested-in-season-tickets" value="No" onChange={handleChange} />
                <label for="interested-in-season-tickets1">No</label>
                <input type="radio" id="interested-in-season-tickets2" name="interested-in-season-tickets" value="Yes" onChange={handleChange} />
                <label for="interested-in-season-tickets2">Yes</label>
              </div>
            </section>

            <section id="season-teams">
              <h2>Enter the teams you would like to learn more about season ticket pricing for:</h2>
              <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" id="teams-for-season-tickets" aria-invalid="false" name="teams-for-season-tickets" onChange={handleChange}></textarea>
            </section>

            <section>
              <h2>Anti-bot question: What is 3 + 1?</h2>
              <input type="text" id="antwoordform" onChange={restrictToNumbers} />
            </section>

            <input className="wpcf7-form-control wpcf7-submit has-spinner sendformbtn" onClick={sendForm} type="submit" value="Send" />
          </div>
          <div className='formsent displaynone'>
            <section className='loadingstate displaynone'>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </section>
            <section className='successtate displaynone'>
            <p>Your request has been successfully sent.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
