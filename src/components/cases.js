        import React from 'react';

        const caseStudies = [
            {
                id:1,
                subtitle:"Curology",
                title:"A custom formula for your skin's unique needs",
                img:"https://images.unsplash.com/photo-1646618190355-41b496da7d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            },
            {
                id:2,
                subtitle:"Yourspace",
                title:"Open space floor plans for your next venture",
                img:"https://ucarecdn.com/906a58c2-da9c-46be-b6dc-0624e589e88a/1.jpg"
            },
            {
                id:3,
                subtitle:"Lumin",
                title:"For your best look ever",
                img:"https://images.unsplash.com/photo-1646520840233-660cd510276e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
        ]


        function Cases() {
        return (
            <section className='cases'>
                <div className='container-fluid'>
                    <div className='cases-navigation'>


                        <div className='cases-arrow prev disabled'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            </div>
                        <div className='cases-arrow next'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                        </svg>

                            </div>
                        </div>
                        <div className='row'>
                            {caseStudies.map((caseItem) => (
                                <div className='case' key={caseItem.id}>
                                    <div className='case-details'>
                                        <span>{caseItem.subtitle}</span>
                                        <h2> {caseItem.title}</h2>
                                        </div>
                                        <div className='case-image'>
                                            <img src={caseItem.img} alt={caseItem.title}></img>
                                    </div>
                                    </div>
                            ))}

                              </div>
                        </div>
                
            </section>
        );
        }

        export default Cases;