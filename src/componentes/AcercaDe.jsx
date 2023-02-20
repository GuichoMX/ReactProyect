import "./AcercaDe"
const AcercaDe = () => (

    <main id="main">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
                <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

                    <section id="acercaDe" class="acercaDe">
                        <div class="section-caja" data-aos="fade-up">
                            <div class="row gx-0">
                                <div class="col-lg-6 caja-info">
                                    <h1>About us</h1>
                                    <div class="contenido">
                                        <h3>¿Qué es este sitio?</h3>
                                        <h2>Desarrollado como un proyecto personal para la resolución de un problema</h2>
                                        <p>
                                            Este es el resultado del desarrollo de un proyecto personal en un curso de programación.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 acercaDeImagen">
                                    <img src="assets/img/about_section.jpg" class="img-fluid" alt="About_section" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contacto" class="contacto">
                        <div class="section-caja">
                            <div class="section-contacto" data-aos="fade-down">
                                <span>Contáctame</span>
                                <h2>Contáctame</h2>
                            </div>

                            <div class="contacto-params">
                                <div class="col-lg-4 col-md-12">
                                    <div class="info-box">
                                        <iconify-icon icon="fluent:globe-location-20-regular"></iconify-icon>
                                        <h3>Dirección</h3>
                                        <p>Cancún, Quintana Roo</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div class="info-box">
                                        <iconify-icon icon="clarity:email-outline-alerted"></iconify-icon>
                                        <h3>Escríbeme!</h3>
                                        <p>escobedotrenado@gmail.com</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div class="info-box">
                                        <iconify-icon icon="bx:phone-call"></iconify-icon>
                                        <h3>Contáctame</h3>
                                        <p>99 81 86 43 48</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                )

                export default AcercaDe;