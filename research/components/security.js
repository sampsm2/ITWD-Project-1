//IMPORT

//COMPONENT CODES
export const security = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
        <div class="flip-card position-relative" id="security-card" >
            <div class="flip-card-inner position-relative w-100 h-100">

                <div class="flip-card-front position-absolute w-100 h-100 d-flex flex-column justify-content-center 
                        align-items-center text-center text-primary p-3 rounded" >
                    <h3 class="fw-bold">Security</h3>
                </div>

                <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">

                    <p>describe 5 common cyber attacks (threats) and preventive measures against those attacks. Analyze the potential threats of your project-1 website and explain why?
                    </p>
                    <p>5 common cyber attacks and preventative measures are:
                        <ul>
                            <li><strong>Denial-of-service (DoS) and Distributed-denial-of-service (DDoS)</strong> - executed by flooding a server, application, or network with junk traffic to cause lag or crashes, denying service to legitimate users.<br>
                                Web-application firewalls and DDoS migration services can help to mitigate the effects or block junk traffic.</li>
                            <li><strong>SQL injection attack</strong> - a common attack that can affect any web database that allows user inputs, that can allow an attacker to retrieve or destroy data.<br>
                                A developer can use multiple strategies, such as using stored procedures or prepared inputs, or escaping user inputs. Web-application firewalls can also block SQL injection attacks.</li>
                            <li><strong>Cross-site scripting and cross-site request forgery</strong> - targeting browser activity, this is when an attacker attaches malicious code to a website, that executes when the website is loaded by a client or user.<br>
                                Web-application firewalls can block many types of these attacks, developers should keep these sorts of attacks in mind when building sites.</li>
                            <li><strong>Supply chain attack</strong> - an indirect attack against third-party application dependencies, like integrated application or APIs, third-party software, open-source code, or hardware and software vendors.<br>
                                Supply chain attacks are very difficult to defend against, as it compromises a trusted party. Implementing zero-trust security, running third-party assessments, applying vulnerability patches ASAP, or loading third-party code outside the user's browser, can be effective ways to defend against this type of attack.</li>
                            <li><strong>On-path attack</strong> - by positioning between two parties that trust each other and impersonating them to each other, an attacker can intercept secure data.<br>
                                One of the most foundational security measures against on-path attacks is the use of Transport Layer Security (TLS), previously called Secure Socket Layer (SSL), to verify the identity of both parties via a digital signature.</li>
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
        document.getElementById('security-card').addEventListener('click', function() {
            // toggle('flipped') adds the CSS class 'flipped' 
            // to an HTML element if it is missing, or removes it if it is already there.
            this.classList.toggle("flipped");
        });
    },

}
