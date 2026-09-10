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
                    
                    <p>
                        Copyright protects the intellectual property of the individual or organisation that created a work.<br>
                        Fair Use permits the use of copyrighter material without seeking permission from the holder, usually in uses such as education, parody, and criticism, for non-profit reasons.<br>
                        Creative Commons (CC) provides a public liense for distribution of an otherwise copyrighted work, and can be used when the author wants people to share, use, and build from their work.
                    </p>
                    <p>
                        There are 4 main types of CC license:
                        <ul>
                            <li>CC-BY: Attribution - the work can be modified and the derivative displayed or distributed if the original author is given credit</li>
                            <li>CC-SA: ShareAlike - derivative works must be distributed under a license not more restrictive than the original work</li>
                            <li>CC-NC: NonCommercial - the work and derivative works cannot be used for commercial purposes</li>
                            <li>CC-ND: NoDerivatives - the work can be used and distributed, but only the original, and derivatives must not be shared</li>
                        </ul>
                    </p>
                    <p>
                        Some potential copyright issues in this project may be some of the images and code used in the project, as for some of it I have somewhat blindly trusted the content in the handouts to be free to use.<br>
                        The CC license I would choose for this project is CC-BY-SA. I don't see a reason to restrict the use of the code, and none of the images belong to me.
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
