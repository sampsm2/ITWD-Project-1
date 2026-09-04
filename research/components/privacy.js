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

                    <p>Privacy & Privacy Policy:  describe what is a privacy policy, 
                        13 principles with image as illustration? Create a short privacy policy to your website.
                        Analyze the potential of privacy problems with your project-1 website? How do you handle it?
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
