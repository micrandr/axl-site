
import styles from '../../page.module.css'
import { CheckCircleIcon,HomeIcon,UserGroupIcon,BuildingOfficeIcon,BuildingOffice2Icon,BuildingLibraryIcon } from '@heroicons/react/20/solid';
import Link from 'next/link'
import React from "react";
import Counter from '@/app/components/counter/counter';
export const metadata = {
  title: "Création d'une association - Axcel company",  
}

export default function Page() {
    
  return (
    <>
      <div className={`${styles.hero} container-fluid py-5`}>
              <div className="container my-lg-5 py-5">
                    <div className="row justify-content-around px-3 align-items-center">   
                      <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
                                <div className="border-2 border-dark">
                                    <div>
                                        <img src="/hands-image.jpg" alt="prise en main" className={`${styles.image} img-fluid`}/>
                                    </div>                                    
                                </div>                                                     
                        </div>                     
                        <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
                            <div className="d-flex flex-column mb-3">
                                <h3 className="axel-text-orange fs-3 fw-bolder"><Link href="/" className="text-white">Accueil</Link> >>> <span>Création d'une association</span></h3>                            
                                <h1 className="text-white fw-bolder pt-3">Création d'une association</h1>
                                <div className="border border-info border-2 w-25 my-3"></div>   
                                <p className='text-white py-3'>En plus du conseil et de l'assistance administrative, nous proposons une gamme de services complets pour répondre aux besoins variés de nos clients en matière de gestion d'entreprise à Madagascar.</p>                        
                                                   
                            </div>   
                            <div className='d-block py-4 py-lg-4'>
                                <button type="button" className="btn btn-info text-white">Rentrons en contact</button>
                            </div>                          
                        </div>                                           
                        
                    </div>
            </div>
      </div>    
      
      <div className="container">
        <div className="container my-lg-5 py-5">
          <div className="row justify-content-around px-3 align-items-center"> 
            <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
              <div className="border-2 border-dark">
                <div>
                    <img src="/service/contact1.png" alt="prise en main" className="img-fluid"/>
                </div>                                    
              </div>                                                     
            </div> 
            <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
              <div className="d-flex flex-column mb-3">
                  <h3 className="axel-text-orange fs-3 fw-bolder">Nous vous offrons</h3>                            
                  <h2 className="axel-text-blue fw-bolder pt-3">Services professionnels aux entreprises</h2>
                  <div className="border border-info border-2 w-25 my-3"></div>   
                  <p className='py-3'>Nous accompagnons  les entrepreneurs, les investisseurs dans la formalisation de leurs entreprises.</p>  
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-lg-2">
                  <div className="col">
                    <div className="card mb-3 h-100 border-0">
                      <div className="row g-0">
                        <div className="col-1">
                        <CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
                        </div>
                        <div className="col-11">
                          <div className="card-body p-0 ps-2">
                            <h4 className="card-title text-info">Conseil et assistance</h4>
                            
                            <p className="card-text"><small>Choix stratégique, prise de décision</small></p>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>

                  <div className="col">
                    <div className="card mb-3 h-100 border-0">
                      <div className="row g-0">
                        <div className="col-1">
                        <CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
                        </div>
                        <div className="col-11">
                          <div className="card-body p-0 ps-2">
                            <h4 className="card-title text-info">Création d'entreprise</h4>
                            <p className="card-text"><small>EI / SARLU / Sarl</small></p>
                            
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="col">
                    <div className="card mb-3 h-100 border-0">
                      <div className="row g-0">
                        <div className="col-1">
                        <CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
                        </div>
                        <div className="col-11">
                          <div className="card-body p-0 ps-2">
                            <h4 className="card-title text-info">Accompagnement</h4>
                            
                            <p className="card-text"><small>Lors de la création, business model, développement</small></p>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className="col">
                    <div className="card mb-3 h-100 border-0">
                      <div className="row g-0">
                        <div className="col-1">
                          <CheckCircleIcon className={`${styles.icon} text-info fw-bolder`} />
                        </div>
                        <div className="col-11">
                          <div className="card-body p-0 ps-2">
                            <h4 className="card-title text-info">Coursier administratif </h4>
                            <p><small className="card-text">Livraisons administratives immédiates ou programmées</small></p>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>

                </div>
              </div>                                  
            </div>          
          </div>
        </div>
      </div>
      <div className="container-fluid bg-primary py-5 px-0">
        <div className={`${styles.bg} p-0 m-0`}>
          <div className='container py-5'>
            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Services</h5>
                    <h2 className="text-white fs-2 fw-bolder text-center">Création d'une association</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">INDIVIDUEL</h3>
                    <p className="card-text">Une entreprise individuelle, est une forme d'entreprise où une seule personne est responsable de toute l'activité de l'entreprise.</p>
                    
                  </div>
                  <div className="card-footer bg-transparent"><a href="#" className="card-link">En savoir plus</a></div>
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">SARL / SARLU</h3>
                    <p className="card-text">SARL : Société à responsabilité limitée au montant de leurs apports dans la société.<br></br>
                    SARLU : Société à responsabilité limitée Unipersonnelle, est une société où il n'y a qu'un seul associé.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">SA / SAU</h3>
                    <p className="card-text">SA : Société Anonyme, une forme juridique de société où la responsabilité des actionnaires est limitée aux apports qu'ils ont faits dans le capital social.<br></br>
                    SAU : Société Anonyme Unipersonnelle, une variante de la Société Anonyme (SA), mais avec un seul actionnaire.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>           
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <UserGroupIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">ASSOCIATION</h3>
                    <p className="card-text">Un groupement de personnes réunies autour d’un projet commun ou d’une activité, à but non lucratif. Cela signifie que l’objectif principal d’une association n’est pas de réaliser des profits à distribuer entre les membres.</p>
                    
                  </div>
                  <div className="card-footer bg-transparent"><a href="#" className="card-link">En savoir plus</a></div>
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOffice2Icon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">ONG</h3>
                    <p className="card-text">(Organisation Non Gouvernementale). Une organisation indépendante des gouvernements, à but non lucratif, qui œuvre pour des causes d’intérêt général comme les droits humains, l’environnement, la santé, l’éducation ou l’aide humanitaire.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingLibraryIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">ETABLISSEMENT</h3>
                    <p className="card-text">une unité de production ou un lieu d'activité qui dépend d'une entreprise. Il constitue une implantation géographique distincte, mais il n'a pas de personnalité juridique propre</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingLibraryIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">OUVERTURE SUCCURSALE / FILIALE</h3>
                    <p className="card-text">Succursale : un établissement secondaire rattaché directement à l'entreprise mère. Elle ne possède pas de personnalité juridique distincte.<br></br>Filiale : une société à part entière, dotée de sa propre personnalité juridique. Elle est contrôlée majoritairement par la société mère, qui détient au moins 50 % du capital.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    
                    <h2 className="text-white fs-2 fw-bolder text-center">Coursier professionnelle</h2>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Récupération et livraison de documents</h3>
                    <p className="card-text">Certificat de : résidence, existence, ...<br></br>
                      Extrait RCS, Attestation de non – faillite<br></br>
                      Acte de : naissance, mariage, ...<br></br>
                      Certificat de consommabilité<br></br>
                      Diplôme, Attestation de réussite
                    </p>                    
                  </div>
                  <div className="card-footer bg-transparent"><a href="#" className="card-link">En savoir plus</a></div>
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Dépôt de documents administratifs</h3>
                    <p className="card-text">Dépôts et récupération des déclarations fiscales, sociales,<br></br>
                    Dépôts des candidatures pour des concours administratifs</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Autres services</h3>
                    <p className="card-text">Toutes certifications et enregistrements dans des bureaux d’Etat<br></br>
                      Traductions des actes : naissance, mariage, ...<br></br>
                      Traduction livret de famille<br></br>
                      Elaboration du curriculum vitae (CV)<br></br>
                      Certification Diplôme, équivalence<br></br>
                    </p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">En savoir plus</a>
                  </div>                 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container">
        <div className="container my-lg-5 py-5">
          <div className="row justify-content-around px-3 align-items-center">              
            <div className="col-sm-12 col-lg-6 p-auto pe-lg-5">
              <div className="d-flex flex-column mb-3">
                  <h3 className="axel-text-orange fs-3 fw-bolder">Notre Process</h3>                            
                  <h2 className="axel-text-blue fw-bolder pt-3">Simplifier les processus administratifs et de garantir la conformité avec la réglementation en vigueur</h2>
                  <div className="border border-info border-2 w-25 my-3"></div>   
                  <p className='py-3'>Permettant ainsi à nos clients de se concentrer sur le développement et la croissance de leur activité en toute tranquillité d'esprit.</p>  
                  <h5>Création d'entreprise </h5>
                  <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: '60'+'%'}}>60%</div>
                  </div>  
                  <h5 className='pt-3'>Accompagnement</h5>
                  <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: '75'+'%'}}>75%</div>
                  </div> 
                  <h5 className='pt-3'>Autres services</h5>
                  <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{width: '90'+'%'}}>90%</div>
                  </div>         
              </div>                                    
            </div>
            <div className="col-sm-12 col-lg-6 py-5 ps-lg-5 axel-block1">
              <div className="border-2 border-dark">
                <div>
                    <img src="/surplus.png" alt="prise en main" className="img-fluid"/>
                </div>                                    
              </div>                                                     
            </div>
          </div>
        </div>
      </div>
     <Counter/>
      <div className='container py-5 mb-lg-5'>
        <div className="row d-flex justify-content-center py-5">
                <div className="col d-none d-lg-block"></div>
                <div className="col col-lg-8 d-flex  flex-column justify-content-center align-items-center">
                    <h5 className="card-title f-bold fs-3 axel-text-orange py-3">Nous proposons aussi d'autres services
                    </h5>
                    <h2 className="axel-text-blue fs-2 fw-bolder text-center">Une gamme de services complets pour des clients variés
                    </h2>
                    <p className='text-center'>Notre objectif est de simplifier les processus administratifs et de garantir la conformité avec la réglementation en vigueur, permettant ainsi à nos clients de se concentrer sur le développement et la croissance de leur activité en toute tranquillité d'esprit.</p>
                    <div className="border border-info border-2 w-25 my-3"></div>
                    
                </div>
                <div className="col d-none d-lg-block"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <HomeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Renouvellement Carte fiscale</h3>
                    <p className="card-text">Renouveler annuellement la carte fiscale pour se conformer aux xigences de l'Etat.</p>
                    
                  </div>
                  <div className="card-footer bg-transparent"><a href="#" className="card-link">Plus</a></div>
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Changement, rajout d'activité</h3>
                    <p className="card-text">Décision de changements, mise à jour des statuts, formalité à respecter.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">Plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOfficeIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Changement siège social</h3>
                    <p className="card-text">Modifier son siège principal nécessite une série de démarche juridique et administratif à respecter.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">Plus</a>
                  </div>                 
                </div>
              </div>           
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <UserGroupIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Cessation d'activité</h3>
                    <p className="card-text">Pour les entreprises souhaitant procéder à l'arrêt de l'activité économique</p>
                    
                  </div>
                  <div className="card-footer bg-transparent"><a href="#" className="card-link">Plus</a></div>
                 </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingOffice2Icon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Rédaction lettre administrative</h3>
                    <p className="card-text">Nous rédigeons des lettres administratives telles que demande d'agrément, permis de construire.</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">Plus</a>
                  </div>                 
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <div className="card-header bg-transparent border-0">
                    <BuildingLibraryIcon className={`${styles.icon2} axel-text-orange`}/>
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Diverses demandes</h3>
                    <p className="card-text">Nous traitons tous types de demandes (Agrément, autorisation ministérielle...)</p>                    
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href="#" className="card-link">Plus</a>
                  </div>                 
                </div>
              </div>
        </div>
      </div>
      
    </>
  );
}