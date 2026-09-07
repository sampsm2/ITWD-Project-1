//IMPORT

//COMPONENT CODES
export const privacy = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative" id="privacy-card" >
            <div class="flip-card-inner position-relative w-100 h-100">

                <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
                        align-items-center text-center text-primary p-3 rounded" >
                    <h3 class="fw-bold">Privacy and Privacy Policy</h3>
                </div>

                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

                    <p>
						A privacy policy is a statement or legal document that discloses the ways a party (in this case, the operator of a website) gathers, uses, discloses, and manages a customer, client, or user's data. 
                    </p>
					<p>
						The 13 Principles of the <a href="https://www.privacy.org.nz/privacy-principles/">Privacy Act 2020</a> are as follows:
						<ul>
							<li><a href="https://www.privacy.org.nz/privacy-principles/1/">Principle 1: Purpose for Collection</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/2/">Principle 2: Source of information - collection from the individual</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/3/">Principle 3: What to tell the individual when you collect their information directly</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/3a/">Principle 3A: What to tell the individual when you collect their information from another source</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/4/">Principle 4: Manner of collection</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/5/">Principle 5: Storage and security of information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/6/">Principle 6: Providing people access to their information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/7/">Principle 7: Correction of personal information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/8/">Principle 8: Ensure accuracy before using information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/9/">Principle 9: Limits on retention of personal information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/11/">Principle 10: Use of personal information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/11/">Principle 11: Disclosing personal information</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/12/">Principle 12: Disclosure outside New Zealand</a></li>
							<li><a href="https://www.privacy.org.nz/privacy-principles/13/">Principle 13: Unique identifiers</a></li>
						</ul>
					</p>
					<p>
						The major privacy problem with this website is the fact it sends unencrypted data to Supabase, and while it is currently only an address, which can be deliberately mis-inputted, 
						other websites might use email or phone numbers, inviting spam calls or mail, or even passwords and bank details.
					</p>
                </div>

            </div>
        </div>    
        `;

        //Return HTML view
        return ui;
    },

    //------------------------------------
    //Functions
    addEvent() {
        // Flip cards on click
        document.getElementById('privacy-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
