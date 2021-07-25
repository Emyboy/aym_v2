import React, { ReactElement } from 'react'

interface Props {
    heading: string;
    headingValue: string;
    description?: string;
}

export default function Heading({
    heading,
    headingValue,
    description
}: Props): ReactElement {
    return (
        <section className="categorie-section mb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="categorie-title">
                            {/* <small>
                                <a href="index.html">Home</a>
                                <span className="arrow_carrot-right"></span> Food
                            </small> */}
                            <h3>{heading}: <span> {headingValue}</span></h3>
                            <p> {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}
