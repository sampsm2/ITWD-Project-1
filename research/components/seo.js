//IMPORT

//COMPONENT CODES
export const seo = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative" id="seo-card" >
            <div class="flip-card-inner position-relative w-100 h-100">

                <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
                        align-items-center text-center text-primary p-3 rounded" >
                    <h3 class="fw-bold">Search Engine Optimization</h3>
                </div>

                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

                    <p>Search Engine Optimization (SEO): describe at least 5 ways to improve the visibility 
                        of your website on search engine.
                        What actions do you plan to take to improve the SEO of your Project 1 website?
                    </p>
                    <p>
                        Search Engine Optimisation (SEO) is the way a website becomes easier to find for users via search engines such as Google.<br>
                        5 ways to improve SEO are:
                        <ul>
                            <li><strong>Make an interesting or useful site</strong> - if a site gains more traffic, it will be higher on a broad search, and the best way for that is to have interesting, useful, up-to-date content.</li>
                            <li><strong>Use keywords in URLs and titles</strong> - most search engines use these to find web pages, and users will be more likely to open a web page if it looks more relevant.</li>
                            <li><strong>Optimise for mobile as well as desktop</strong> - it's quite likely someone looking at your page is using a mobile phone. Bootstrap is excellent for responsive layouts.</li>
                            <li><strong>Use relevant images with descriptive alt text</strong> - having relevant, high-quality images encourages users to find your site. Alt text can help a search engine to find a relevant image to display on a search.</li>
                            <li><strong>Promote the website</strong> - social media advertising, community engagement, and word of mouth are some of the most effective ways to bring users to the site, improving traffic.</li>
                        </ul>
                    </p>
                    <p>
                        I do not plan to improve the SEO of this site, but if I did I would likely make the URLs more readable and promote it via community methods. For its purpose as a small-scale "portfolio", providing a link should be sufficient.
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
        document.getElementById('seo-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
