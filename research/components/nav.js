//IMPORT

//COMPONENT CODES
export const nav = {
    //------------------------------------
    //Data properties

    //------------------------------------
    //Component User Interface (UI)
    renderUI() {
        //Build HTML view
        let ui= `
            <div class="collapse" id="searchCollapse">
                <div class="card card-body" style="background-color: var(--navbar-color)">
                    <form class="d-flex" role="search" method="get" action="https://www.google.com/search">
                        <input class="form-control me-2" type="text" name="q" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <nav class="navbar navbar-expand-md" style="background-color: var(--navbar-color)">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <span class="bi bi-globe2"></span>
                        ITWD6.408
                    </a>
                    <button class="btn d-inline d-md-none btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse">
                        <span class="bi bi-search"></span>
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-md-flex justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav float-end">
                            <a class="nav-link"href="index.html">Home</a>
                            <a class="nav-link" href="forms.html">Forms</a>
                            <a class="nav-link" href="webAPI.html">WebAPI</a>
                            <a class="nav-link" href="demos.html">JavaScript</a>
                            <a class="nav-link active" aria-current="page" href="research.html">Research</a>
                        </div>
                    </div>
                    <button class="btn d-inline d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse">
                        <span class="bi bi-search"></span>
                    </button>
                </div>
            </nav>
        `;

        //return HTML view
        return ui;    
    },

    //Functions
    //------------------------------------

}
