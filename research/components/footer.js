//IMPORT

//COMPONENT CODES
export const footer = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui = `
            <footer class="fixed-bottom" style="background-color: var(--navbar-color)">
                <div class="row">
                    <div class="d-flex justify-content-center col-12 col-md-4">
                        <span class="bi bi-linkedin"></span>
                        <span class="bi bi-facebook"></span>
                        <span class="bi bi-twitter-x"></span>
                        <span class="bi bi-youtube"></span>
                        <span class="bi bi-instagram"></span>
                        <span class="bi bi-telegram"></span>
                        <span class="bi bi-discord"></span>
                        <span class="bi bi-skype"></span>
                        <span class="bi bi-vimeo"></span>
                    </div>
                    <div class="d-flex justify-content-center col-8 col-md-4">
                        <span class="bi bi-c-circle"></span>
                        Maxwell Sampson EIT
                    </div>
                    <div class="d-flex justify-content-center col-4 col-md-4">
                        <a type="button" class="link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span class="bi bi-journal-text"></span>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </footer>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Privacy Policy</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div class="modal-body">
                        <h4>Privacy Policy</h4>
                        <p>
                            This Privacy Policy outlines how we collect, store, and use your personal information.
                            <h5>PERSONAL INFORMATION</h5>
                            Personal information has the same meaning as defined in the Privacy Act 1993. This can include any information that can be used to personally identify you.
                            <h5>TYPES OF PERSONAL INFORMATION COLLECTED</h5>
                            Types of personal information collected can include, but is not limited to:
                            <ul>
                                    <li>Name</li>
                                    <li>Address</li>
                                    <li>Location</li>
                                    <li>Email address</li>
                                    <li>Telephone number</li>
                                    <li>Age or date of birth</li>
                                    <li>Profession</li>
                            </ul>
                            <h5>HOW INFORMATION IS COLLECTED</h5>
                            By filling out and submitting any forms on this webpage, you agree that we may collect the information provided by you.
                            <h5>USE OF PERSONAL INFORMATION</h5>
                            The personal information collected from you will be used for research and study purposes, to better understand trends in society.
                            <h5>COOKIES</h5>
                            Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings, but this may affect the functionality of our site.
                            <h5>USE OF PERSONAL INFORMATION FOR COMMUNICATION</h5>
                            By providing your email address, you agree to receive follow up emails, promotional or informational, from. You can opt out at any time through the unsubscribe link in the emails.
                            <h5>DISCLOSURE OF PERSONAL INFORMATION</h5>
                            We do not sell, trade, or otherwise transfer your personal information to outside parties, except when required by law or to provide services you requested.
                            <h5>PROTECTION OF PERSONAL INFORMATION</h5>
                            We take responsibility of your personal information seriosuly, and will ensure that the personal information we hold is protected from misuse, loss or unauthorised access.
                            <h5>YOUR RIGHTS TO ACCESS YOUR PERSONAL INFORMATION</h5>
                            You have the right to access, correct, or delete your personal information. You can request this by contacting us through the details provided on our website.
                            <h5>CHANGES TO THIS POLICY</h5>
                            We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.
                            <h5>CONTACT INFORMATION</h5>
                            If you have any questions or concerns regarding this Privacy Policy, please contact us at ddang@eit.ac.nz.
                            Last modified: Thursday, 30 July 2026, 10:19 PM
                        </p>
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        //Return HTML view
        return ui;
    },

    //------------------------------------
    //Functions

}
