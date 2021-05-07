import React from 'react';
import Paper from './tool/singleframe';

const paper_info={
    name:"Spectrum of the fully-heavy tetraquark state $QQ\\bar Q' \\bar Q'$",
    author:"G. Wang, Lu Meng, S. Zhu",
    year:"Published 2019",
    spec_intro:"In this work, we systematically calculate the mass spectra of the $S$-wave fully heavy tetraquark states $bb\bar b\bar b$, $cc\bar c\bar c$, and $bb\bar c\bar c$ in two nonrelativistic quark models. A tetraquark state may be an admixture of a $6_c-\bar 6_c$ state and a $\bar 3_c-3_c$ one, where $6_c-\bar 6_c$($\bar 3_c-3_c$) denotes"
}

export default class PaperFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    create_book_single() {
        return (
            <div className={"block"}>
                <Paper paper={paper_info}
                />
            </div>
        );
    }

    create_store(num) {
        let box=[];
        for(let i=0;i<num;++i)
        {
            box.push(this.create_book_single());
        }
        return(
            box
        );
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className="column ">
                        {this.create_store(4)}
                    </div>
                </div>
                <footer class="footer">

                    <nav className="pagination is-centered is-rounded"  role="navigation" aria-label="pagination">
                        <a className="pagination-previous">Previous</a>
                        <a className="pagination-next">Next page</a>
                        <ul className="pagination-list">
                            <li><a className="pagination-link"  aria-label="Goto page 1">1</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                            <li><a className="pagination-link is-current" aria-label="Page 46"
                                   aria-current="page">46</a></li>
                            <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                            <li><span className="pagination-ellipsis">&hellip;</span></li>
                            <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                        </ul>
                    </nav>
                </footer>
            </div>

        );
    }
}
