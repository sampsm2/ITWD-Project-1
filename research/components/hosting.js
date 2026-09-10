//IMPORT

//COMPONENT CODES
export const hosting = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative" id="hosting-card" >
            <div class="flip-card-inner position-relative w-100 h-100">

                <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
                        align-items-center text-center text-primary p-3 rounded" >
                    <h3 class="fw-bold">Hosting</h3>
                </div>

                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

                    <p>
                        5 major factors to consider when choosing a hosting provider are:
                        <ul>
                            <li>Performance is an important area to consider, a badly performing website results in poor visitor experience. Part of this is <strong>uptime</strong>, a host that guarantees 
                                99.9% or greater uptime will keep the site accessible year-round. Another part is **speed**, as a slow website will result in frustrated users backing out 
                                before viewing the whole thing.</li>
                            <li>Security is another field that is important, especially on sites that operate with user data. <strong>Encryption and malware protection</strong> will keep user data safe, and <strong>automated 
                                backups</strong> can help keep your website operational if the worst happens and it gets taken down by an attack.</li>
                            <li>The <strong>level of support from the hosting provider</strong> is also an important consideration, as any form of unplanned downtime or other technical issue can result in lost visits, 
                                so minimising the time it takes to solve is important</li>
                        </ul>
                    </p>
                    <p>
                        This site will be published via GitHub as it's basically just the front end, with the back end provided by Supabase. Uptime on a service as widely-used as GitHub Pages should be 
                        excellent, and support is widely available both from administrators and community members via forums.
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
        document.getElementById('hosting-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
