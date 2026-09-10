//IMPORT

//COMPONENT CODES
export const maintenance = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative" id="maintenance-card" >
            <div class="flip-card-inner position-relative w-100 h-100">

                <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
                        align-items-center text-center text-primary p-3 rounded" >
                    <h3 class="fw-bold">Maintenance</h3>
                </div>

                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

                    <p>
                        5 ways to improve page loading times are:
                        <ul>
                            <li><strong>Optimise assets</strong> - Reducing the filesize of images with compression, reduction in resolution, and minimising the number of assets the page has to load.</li>
                            <li><strong>Minimise render-blocking scripts</strong> - Unnecessary code that loads before more important page content, or scripted elements loaded from somewhere else, can block the page loading and slow down load times.</li>
                            <li><strong>Limit redirect usage</strong> - Redirects, depending on the loading time of the page, can add fractions of a second to whole seconds to load times.</li>
                            <li><strong>Minify file size</strong> - Minifying code by removing any code not required to run the script, including comments and whitespace, can gain marginal improvements, but is usually considered a best practise.</li>
                            <li><strong>Choose effective external services for important functions</strong> - Choosing your server provider, location, and security can minimise user downtime between pages loading.</li>
                        </ul>
                    </p>
                    <p>
                        5 important tasks when maintaining a website are:
                        <ul>
                            <li><strong>Monitor website uptime</strong> - detecting uptime issues early is important for preventing unplanned downtime for extended periods.</li>
                            <li><strong>Monitor security alerts and vulnerabilities</strong> - to keep the site's security up to scratch and make changes early and efficiently.</li>
                            <li><strong>Test key functionality</strong> - making sure important site features continue to work correctly, such as forms and external API connections.</li>
                            <li><strong>Check website performance</strong> - ensuring updates executed by the host or other provider, or by an internal team, aren't affecting performance.</li>
                            <li><strong>Ensure backups are working</strong> - important to keep backups available if the site needs to be restored due to a security or technical failure.</li>
                        </ul>
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
        document.getElementById('maintenance-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
