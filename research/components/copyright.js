//IMPORT

//COMPONENT CODES
export const copyright = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative flip-card-size" id="copyright-card" >
            <div class="flip-card-inner position-relative w-100 h-100">
                <!-- Card front-->
                <div class="flip-card-front position-absolute w-100 h-100
                            d-flex flex-column justify-content-center align-items-center 
                            text-center text-primary p-3 rounded">
                    <h3 class="fw-bold">Copyright, CC Licenses & Fair Use</h3>
                </div>

                <!-- Card back -->
                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
                    
                    <p class="fs-6 lh-base">
                        Copyright, Creative Common (CC) Licenses, Fair Use: describe basic principles of copyright, 
                        4 types of CC licences and Fair Use with image as illustration
                        Analyze the potential copyright issues associated with your Project 1. What type of Creative Commons (CC) license would you choose for your Project-1 website, and why?
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
        document.getElementById('copyright-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
