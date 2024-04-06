import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/hero";
import About from "@/components/about";
import Partners from "@/components/partners";
import chevronLeft from "@/assets/icons/chevron-left.svg"

export default function orderTickets() {


  useEffect(() => {


  });

  return (
    <>
      <div className="pageheader">
        <div>
          <h1>Order Tickets</h1>
          <Link href="/"><Image src={chevronLeft} alt="Chevron Left Icon"/></Link>
        </div>
      </div>

      <div className="pagecontent">
        <div>


          <div className="orderform">
            <section>
              <label for="event-date">Please tell us what event you would like to attend and the date:</label>
              <input size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" id="event-date" aria-required="true" aria-invalid="false" value="" type="text" name="event-date" />
            </section>

            <section>
              <label for="seat-count">How many seats do you need?</label>
              <div>
              <input type="radio" name="seat-count" value="1" checked="checked" />
              <span class="wpcf7-list-item-label">1</span>
              <input type="radio" name="seat-count" value="2" />
              <span class="wpcf7-list-item-label">2</span>
              <input type="radio" name="seat-count" value="3" />
              <span class="wpcf7-list-item-label">3</span>
              <input type="radio" name="seat-count" value="4" />
              <span class="wpcf7-list-item-label">4</span>
              <input type="radio" name="seat-count" value="5" />
              <span class="wpcf7-list-item-label">5</span>
              <input type="radio" name="seat-count" value="6" />
              <span class="wpcf7-list-item-label">6</span>
              <input type="radio" name="seat-count" value="7" />
              <span class="wpcf7-list-item-label">7</span>
              <input type="radio" name="seat-count" value="8" />
              <span class="wpcf7-list-item-label">8</span>
              <input type="radio" name="seat-count" value="Corporate Group" />
              <span class="wpcf7-list-item-label">Corporate Group</span>
              </div>
            </section>

            <section>
              <label for="budget">What is your budget per ticket:</label>
              <select class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="dropdownmenu">
                <option value="">—Please choose an option—</option>
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
              <label for="sittinglevel">Please select the levels you are interested in sitting in:</label>
              <div>
              <input type="checkbox" name="sittinglevel[]" value="Floor" />
              <span class="wpcf7-list-item-label">Floor</span>
              <input type="checkbox" name="sittinglevel[]" value="Pit" />
              <span class="wpcf7-list-item-label">Pit</span>
              <input type="checkbox" name="sittinglevel[]" value="General Admission" />
              <span class="wpcf7-list-item-label">General Admission</span>
              <input type="checkbox" name="sittinglevel[]" value="VIP/Premium Seating" />
              <span class="wpcf7-list-item-label">VIP/Premium Seating</span>
              <input type="checkbox" name="sittinglevel[]" value="Suites" />
              <span class="wpcf7-list-item-label">Suites</span>
              <input type="checkbox" name="sittinglevel[]" value="Club Level" />
              <span class="wpcf7-list-item-label">Club Level</span>
              <input type="checkbox" name="sittinglevel[]" value="Paddock Club" />
              <span class="wpcf7-list-item-label">Paddock Club</span>
              <input type="checkbox" name="sittinglevel[]" value="Delta Club" />
              <span class="wpcf7-list-item-label">Delta Club</span>
              <input type="checkbox" name="sittinglevel[]" value="Chase Lounge" />
              <span class="wpcf7-list-item-label">Chase Lounge</span>
              <input type="checkbox" name="sittinglevel[]" value="100s" />
              <span class="wpcf7-list-item-label">100s</span>
              <input type="checkbox" name="sittinglevel[]" value="200s" />
              <span class="wpcf7-list-item-label">200s</span>
              <input type="checkbox" name="sittinglevel[]" value="300s" />
              <span class="wpcf7-list-item-label">300s</span>
              <input type="checkbox" name="sittinglevel[]" value="400s" />
              <span class="wpcf7-list-item-label">400s</span>
              <input type="checkbox" name="sittinglevel[]" value="500s" />
              <span class="wpcf7-list-item-label">500s</span>
              <input type="checkbox" name="sittinglevel[]" value="600s" />
              <span class="wpcf7-list-item-label">600s</span>
              <input type="checkbox" name="sittinglevel[]" value="Standing Room Only" />
              <span class="wpcf7-list-item-label">Standing Room Only</span>
              </div>
            </section>

          <section>
            <label for="nbaornfl">Are you inquiring about NBA or NFL tickets?</label>
            <div>
            <input type="radio" name="nbaornfl" value="No" checked="checked" />
            <span class="wpcf7-list-item-label">No</span>
            <input type="radio" name="nbaornfl" value="Yes" />
            <span class="wpcf7-list-item-label">Yes</span>
            </div>
          </section>


          <section class="nhlornflquestion">
            <label for="nbaornflquestion">Are you interested in the opportunity to acquire our coveted Field/Floor Pass add-on, granting you privileged pre/post-game access for just $200 per person?<br/><br/> Revel in the chance to capture captivating moments and be present on the field/floor alongside the players as they gear up for the game.<br/><br/> Take unlimited photos without impeding their warmup routine.</label>
            <div>
            <input type="radio" name="nbaornflquestion" value="No" checked="checked" />
            <span class="wpcf7-list-item-label">No</span>
            <input type="radio" name="nbaornflquestion" value="Yes" />
            <span class="wpcf7-list-item-label">Yes</span>
            </div>
          </section>

          <section>
            <label for="your-email">Please enter the email address that is best to contact you at:</label>
            <input size="40" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" id="your-email" aria-required="true" aria-invalid="false" value="" type="email" name="your-email" />
          </section>

          <section>
            <label for="phone-number">Please enter your mobile phone number:</label>
            <input size="40" class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel" id="phone-number" aria-required="true" aria-invalid="false" value="" type="tel" name="phone-number" />
          </section>

          <section>
            <label>Are you interested in season tickets?</label>
            <div>
            <input type="checkbox" name="interested-in-season-tickets[]" value="Yes" />
            <span class="wpcf7-list-item-label">Yes</span>
            </div>
          </section>
          
          <section id="season-teams">
            <label for="teams-for-season-tickets">Enter the teams you would like to learn more about season ticket pricing for:</label>
            <textarea cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" id="teams-for-season-tickets" aria-invalid="false" name="teams-for-season-tickets"></textarea>
          </section>
            
            <span class="wpcf7-form-control-wrap recaptcha" data-name="recaptcha"></span>
            <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Send" />



          </div>


        </div>
      </div>
    </>
  );
}

